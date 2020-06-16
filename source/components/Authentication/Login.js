import React, { useState, Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Form, Item, Input, Label } from 'native-base';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

import SpinView from '../Common/SpinView';
import Styles from './Styles';
import { login, getUser } from '../../server/fetch';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      password: undefined,
      isLoading: false,
    };
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
      let user = { name: result.user_display_name, email: result.user_email };
      const token = result.token;

      console.log(JSON.stringify(user), JSON.stringify(token));
      try {
        await AsyncStorage.multiSet(
          [['user', JSON.stringify(user)], ['token', JSON.stringify(token)]],
          err => console.log(err),
        );
        this.setState({ isLoading: false });
        this.props.navigation.navigate('Account');
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
                onChangeText={username => this.setState({ username })}
                style={{ padding: 10 }}
              />
            </Item>
            <Item floatingLabel style={Styles.formItem}>
              <Label>Password</Label>
              <Input
                value={password}
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
          <TouchableOpacity>
            <Image
              source={require('../../assets/auth/facebook_icon.png')}
              style={Styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
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
