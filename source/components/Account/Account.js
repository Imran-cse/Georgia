import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Icon } from 'react-native-elements';

import Header from './Header';

import Styles from './Styles';

export default class Account extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={Styles.container}>
        <Header />
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Auth', { screen: 'Login' })
          }
          style={Styles.loginView}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="user" type="feather" size={25} />
            <Text style={Styles.loginText}>Login</Text>
          </View>
          <Icon name="ios-arrow-forward" type="ionicon" />
        </TouchableOpacity>
      </View>
    );
  }
}
