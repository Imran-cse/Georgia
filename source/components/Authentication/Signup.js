import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import { Form, Input, Label, Item } from 'native-base';
import { Button } from 'react-native-elements';

import Styles from './Styles';
import { verticalScale } from '../../constants/constant_functions';

const Signup = props => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <View style={[Styles.logoView, {marginTop: verticalScale(30)}]}>
          <Image
            source={require('../../assets/auth/logo.png')}
            style={Styles.logo}
          />
        </View>

        <View style={Styles.inputView}>
          <Form style={{ paddingHorizontal: 20 }}>
            <Item floatingLabel style={Styles.formItem}>
              <Label>Frist Name</Label>
              <Input />
            </Item>
            <Item floatingLabel style={Styles.formItem}>
              <Label>Last Name</Label>
              <Input />
            </Item>
            <Item floatingLabel style={Styles.formItem}>
              <Label>Enter your email</Label>
              <Input />
            </Item>
            <Item floatingLabel style={Styles.formItem}>
              <Label>Enter your password</Label>
              <Input />
            </Item>
          </Form>
        </View>

        <Button title="Sign up" buttonStyle={Styles.buttonStyle} />

        <View style={{ alignItems: 'center', paddingTop: 20 }}>
          <Text>
            OR{' '}
            <Text onPress={() => props.navigation.navigate('Login')} style={Styles.linkText}>
              Login to your account
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;
