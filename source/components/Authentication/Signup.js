import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import { Form, Input, Label, Item } from 'native-base';
import { Button } from 'react-native-elements';

import Styles from './Styles';
import { verticalScale } from '../../constants/constant_functions';

export default class Singup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      password: undefined,
    };
  }

  handleSingup() {
    const { firstName, lastName, email, password } = this.state;
  }

  render() {
    const { firstName, lastName, email, password } = this.state;

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
                onPress={() => props.navigation.navigate('Login')}
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
