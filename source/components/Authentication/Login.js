import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Form, Item, Input, Label } from 'native-base';
import { Button } from 'react-native-elements';

import Styles from './Styles';

const Login = props => {
  return (
    <View style={Styles.container}>
      <View style={Styles.logoView}>
        <Image source={require('../../assets/auth/logo.png')}
          style={Styles.logo}
        />
      </View>

      <View style={Styles.inputView}>
        <Form>
          <Item floatingLabel style={Styles.formItem}>
            <Label>Username/Phone</Label>
            <Input style={{padding: 10}} />
          </Item>
          <Item floatingLabel style={Styles.formItem}>
            <Label>Password</Label>
            <Input />
          </Item>
        </Form>
      </View>
      <Button title="Sign in" buttonStyle={Styles.buttonStyle} />

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
        <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
          <Text style={Styles.signupText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
