import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

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

        <View style={Styles.horizontalLine} />

        <ScrollView>
          <TouchableOpacity style={Styles.itemView}>
            <Text style={Styles.itemText}>My Profile</Text>
            <Icon name="ios-arrow-forward" type="ionicon" />
          </TouchableOpacity>
          <TouchableOpacity style={Styles.itemView}>
            <Text style={Styles.itemText}>My Messages</Text>
            <Icon name="ios-arrow-forward" type="ionicon" />
          </TouchableOpacity>
          <TouchableOpacity style={Styles.itemView}>
            <Text style={Styles.itemText}>My Orders</Text>
            <Icon name="ios-arrow-forward" type="ionicon" />
          </TouchableOpacity>
          <TouchableOpacity style={Styles.itemView}>
            <Text style={Styles.itemText}>Payment Method</Text>
            <Icon name="ios-arrow-forward" type="ionicon" />
          </TouchableOpacity>
          <TouchableOpacity style={Styles.itemView}>
            <Text style={Styles.itemText}>Shipping Address</Text>
            <Icon name="ios-arrow-forward" type="ionicon" />
          </TouchableOpacity>
          <TouchableOpacity style={Styles.itemView}>
            <Text style={Styles.itemText}>Customer Service</Text>
            <Icon name="ios-arrow-forward" type="ionicon" />
          </TouchableOpacity>
          <TouchableOpacity style={Styles.itemView}>
            <Text style={Styles.itemText}>Terms & Conditions</Text>
            <Icon name="ios-arrow-forward" type="ionicon" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
