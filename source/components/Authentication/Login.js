import React, { useState, Component } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';

import { Form, Item, Input, Label } from 'native-base';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';
import {
  LoginButton,
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

import SpinView from '../Common/SpinView';
import Styles from './Styles';
import { login, getUser, signup } from '../../server/fetch';
import { config, dummyPass } from '../../../config';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      password: undefined,
      isLoading: false,
      userInfo: undefined,
    };
  }

  async componentDidMount() {
    await this._configureGoogleSignIn();
  }

  async _configureGoogleSignIn() {
    await GoogleSignin.configure({
      webClientId: config.webClientId,
      offlineAccess: true,
    });
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo, isLoading: true });
      console.log(userInfo);
      if (!!userInfo) {
        const data = {
          first_name: userInfo.user.givenName,
          last_name: userInfo.user.familyName,
          user_display_name: userInfo.user.name,
          email: userInfo.user.email,
          username: userInfo.user.email,
          password: dummyPass,
          avatar_url: userInfo.user.photo,
        };
        const res1 = await signup(data, 'customers?');
        const response = await Promise.resolve(res1.json());
        console.log(JSON.stringify(response));
        if (!!response && response.data && response.data.status === 400) {
          const res = await login(data.username, dummyPass);
          const result = await Promise.resolve(res.json());
          // console.log('after login', result);
          console.log('user', userInfo.user.name);
          if (result) {
            let user = {
              userId: result.user_id,
              name: userInfo.user.name,
              email: result.user_email,
              photo: data.avatar_url,
            };
            const token = result.token;

            // console.log(JSON.stringify(user), JSON.stringify(token));
            try {
              await AsyncStorage.multiSet(
                [
                  ['user', JSON.stringify(user)],
                  ['token', JSON.stringify(token)],
                ],
                err => {
                  this.setState({ isLoading: false });
                  console.log(err);
                  if (!err) {
                    this.props.navigation.navigate('Account');
                  }
                },
              );
              this.setState({ isLoading: false });
            } catch (error) {
              this.setState({ isLoading: false });
              console.log(error);
            }
          }
        } else {
          console.log('user', userInfo.user.name);
          let user = {
            userId: response.id,
            name: userInfo.user.name,
            email: data.email,
            photo: data.avatar_url,
            user_display_name: userInfo.user.name,
          };
          const token = response.token;

          console.log(JSON.stringify(user), JSON.stringify(token));
          try {
            await AsyncStorage.multiSet(
              [
                ['user', JSON.stringify(user)],
                ['token', JSON.stringify(token)],
              ],
              err => {
                this.setState({ isLoading: false });
                console.log(err);
                if (!err) {
                  this.props.navigation.navigate('Account');
                }
              },
            );
            this.setState({ isLoading: false });
          } catch (error) {
            this.setState({ isLoading: false });
            console.log(error);
          }
        }
      }
    } catch (error) {
      this.setState({ isLoading: false });
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('user cancelled the login flwo');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('sign in is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('play services not available or outdated');
      } else {
        // some other error happened
        console.log('some error happened');
      }
    }
  };

  fbLogin() {
    const that = this;
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function(result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(result);
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
          that.setState({ isLoading: true });
          AccessToken.getCurrentAccessToken()
            .then(res => {
              console.log(res.accessToken);
              const infoRequest = new GraphRequest(
                '/me?fields=id,first_name,last_name,name,email,picture.type(large)',
                null,
                async (gerror, gresult) => {
                  if (gerror) {
                    that.setState({ isLoading: false });
                    console.log(gerror);
                  } else {
                    const profile = gresult;
                    profile.avatar = `https://graph.facebook.com/${
                      gresult.id
                    }/picture`;
                    console.log(profile);
                    if (!!gresult) {
                      const data = {
                        first_name: gresult.first_name,
                        last_name: gresult.last_name,
                        user_display_name: gresult.name,
                        email: gresult.email || gresult.id,
                        username: gresult.email || gresult.id,
                        password: dummyPass,
                        avatar_url: profile.avatar,
                      };
                      const res1 = await signup(data, 'customers?');
                      const response = await Promise.resolve(res1.json());
                      console.log(JSON.stringify(response));
                      if (
                        !!response &&
                        response.data &&
                        response.data.status === 400
                      ) {
                        const res = await login(data.username, dummyPass);
                        const result = await Promise.resolve(res.json());
                        // console.log('after login', result);
                        console.log('user', gresult.name);
                        if (result) {
                          let user = {
                            userId: result.user_id,
                            name: profile.name,
                            email: result.user_email,
                            photo: profile.avatar,
                          };
                          const token = result.token;

                          // console.log(JSON.stringify(user), JSON.stringify(token));
                          try {
                            await AsyncStorage.multiSet(
                              [
                                ['user', JSON.stringify(user)],
                                ['token', JSON.stringify(token)],
                              ],
                              err => {
                                console.log(err);
                                if (!err) {
                                  that.props.navigation.navigate('Account');
                                }
                              },
                            );
                            this.setState({ isLoading: false });
                          } catch (error) {
                            this.setState({ isLoading: false });
                            console.log(error);
                          }
                        }
                      } else {
                        console.log('user', gresult.name);
                        let user = {
                          userId: response.id,
                          name: gresult.name,
                          email: gresult.email,
                          photo: profile.avatar,
                          user_display_name: gresult.name,
                        };
                        const token = response.token;

                        console.log(
                          JSON.stringify(user),
                          JSON.stringify(token),
                        );
                        try {
                          await AsyncStorage.multiSet(
                            [
                              ['user', JSON.stringify(user)],
                              ['token', JSON.stringify(token)],
                            ],
                            err => {
                              console.log(err);
                              if (!err) {
                                that.props.navigation.navigate('Account');
                              }
                            },
                          );
                          this.setState({ isLoading: false });
                        } catch (error) {
                          this.setState({ isLoading: false });
                          console.log(error);
                        }
                      }
                    }
                  }
                },
              );

              new GraphRequestManager().addRequest(infoRequest).start();
            })
            .catch(err => console.log(err));
        }
      },
      function(error) {
        that.setState({ isLoading: false });
        console.log('Login fail with error: ' + error);
      },
    );
  }

  async handleLogin() {
    const { username, password } = this.state;
    if (!username || !password) {
      alert('The username or password you entered is not valid!');
      return;
    }

    this.setState({ isLoading: true });
    const res = await login(username, password);
    const result = await Promise.resolve(res.json());
    console.log('after login', result);

    if (result) {
      let user = {
        userId: result.user_id,
        name: result.user_display_name,
        email: result.user_email,
      };
      const token = result.token;

      console.log(JSON.stringify(user), JSON.stringify(token));
      try {
        await AsyncStorage.multiSet(
          [['user', JSON.stringify(user)], ['token', JSON.stringify(token)]],
          err => {
            console.log(err);
            if (!err) {
              this.props.navigation.navigate('Account');
            }
          },
        );
        this.setState({ isLoading: false });
      } catch (error) {
        this.setState({ isLoading: false });
        console.log(error);
      }
    }
  }

  render() {
    const { username, password, isLoading } = this.state;

    if (isLoading) {
      return <SpinView />;
    }

    return (
      <View style={Styles.container}>
        <View style={Styles.logoView}>
          <Image
            source={require('../../assets/auth/logo.png')}
            style={Styles.logo}
          />
        </View>

        <View style={Styles.inputView}>
          <Form>
            <Item floatingLabel style={Styles.formItem}>
              <Label>Username/Phone</Label>
              <Input
                value={username}
                getRef={input => (this.usernameRef = input)}
                onChangeText={username => this.setState({ username })}
                style={{ padding: 10 }}
                onSubmitEditing={() => this.passwrodRef._root.focus()}
                keyboardType="email-address"
                returnKeyType="next"
              />
            </Item>
            <Item floatingLabel style={Styles.formItem}>
              <Label>Password</Label>
              <Input
                value={password}
                getRef={input => (this.passwrodRef = input)}
                onChangeText={password => this.setState({ password })}
                secureTextEntry={true}
                onSubmitEditing={() => this.handleLogin()}
              />
            </Item>
          </Form>
        </View>
        <Button
          onPress={() => this.handleLogin()}
          title="Sign in"
          buttonStyle={Styles.buttonStyle}
        />

        <View style={Styles.orContainer}>
          <View style={Styles.horzontalLine} />
          <Text style={Styles.orText}>OR</Text>
          <View style={Styles.horzontalLine} />
        </View>

        <View style={Styles.iconContainer}>
          <TouchableOpacity onPress={() => this.fbLogin()}>
            <Image
              source={require('../../assets/auth/facebook_icon.png')}
              style={Styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.signIn()}>
            <Image
              source={require('../../assets/auth/google_icon.png')}
              style={Styles.icon}
            />
          </TouchableOpacity>
        </View>

        <View style={Styles.signupView}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={Styles.signupText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
