import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';

import { Form, Input, Label, Item } from 'native-base';
import { Button } from 'react-native-elements';

import Styles from './Styles';
import { verticalScale } from '../../constants/constant_functions';
import { signup } from '../../server/fetch';
import SpinView from '../Common/SpinView';

export default class Singup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      password: undefined,
      isLoading: false,
    };
  }

  async handleSingup() {
    const { firstName, lastName, email, password } = this.state;
    if (firstName === undefined || firstName.length < 2) {
      alert('Enter a valid first name!');
      return;
    }
    if (lastName === undefined || lastName.length < 2) {
      alert('Enter a valid last name!');
      return;
    }
    if (email === undefined || email.length < 2) {
      alert('Enter a valid email!');
      return;
    }
    if (password === undefined || password.length < 4) {
      alert('Enter a valid password! It must be of 4 or more length');
      return;
    }
    this.setState({ isLoading: true });
    const data = {
      first_name: firstName,
      last_name: lastName,
      email,
      username: email,
      password,
    };
    console.log(data);

    const res = await signup(data, 'customers?');
    const result = await Promise.resolve(res.json());
    console.log(JSON.stringify(result));
    if (!!result && !!result.id) {
      this.setState({ isLoading: false });
      this.props.navigation.navigate('Login');
    } else if (!!result && !!result.message) {
      alert(JSON.stringify(result.message));
      this.setState({ isLoading: false });
      return;
    }
  }

  render() {
    const { firstName, lastName, email, password, isLoading } = this.state;

    if (isLoading) {
      return <SpinView />
    }

    return (
      
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView>
          <View style={[Styles.logoView, { marginTop: verticalScale(30) }]}>
            <Image
              source={require('../../assets/auth/logo.png')}
              style={Styles.logo}
            />
          </View>

          <View style={Styles.inputView}>
            <Form style={{ paddingHorizontal: 20 }}>
              <Item floatingLabel style={Styles.formItem}>
                <Label>Frist Name</Label>
                <Input
                  value={firstName}
                  onChangeText={firstName => this.setState({ firstName })}
                />
              </Item>
              <Item floatingLabel style={Styles.formItem}>
                <Label>Last Name</Label>
                <Input
                  value={lastName}
                  onChangeText={lastName => this.setState({ lastName })}
                />
              </Item>
              <Item floatingLabel style={Styles.formItem}>
                <Label>Enter your email</Label>
                <Input
                  value={email}
                  onChangeText={email => this.setState({ email })}
                />
              </Item>
              <Item floatingLabel style={Styles.formItem}>
                <Label>Enter your password</Label>
                <Input
                  value={password}
                  onChangeText={password => this.setState({ password })}
                  secureTextEntry={true}
                  onSubmitEditing={() => this.handleSingup()}
                />
              </Item>
            </Form>
          </View>

          <Button
            onPress={() => this.handleSingup()}
            title="Sign up"
            buttonStyle={Styles.buttonStyle}
          />

          <View style={{ alignItems: 'center', paddingTop: 20 }}>
            <Text>
              OR{' '}
              <Text
                onPress={() => this.props.navigation.navigate('Login')}
                style={Styles.linkText}>
                Login to your account
              </Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
