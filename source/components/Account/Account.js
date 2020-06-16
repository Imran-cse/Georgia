import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import { Icon } from 'react-native-elements';

import Header from './Header';
import { getUserAsync } from '../../constants/constant_functions';
import Styles from './Styles';

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
    };

    this.checkLogin();
  }

  async checkLogin() {
    console.log('came to account');
    const user = await getUserAsync();
    if (user !== null) {
      this.setState({ user: JSON.parse(user) });
    }
  }

  render() {
    const { user } = this.state;

    return (
      <View style={Styles.container}>
        <Header />
        {!user && (
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
        )}

        {!!user && (
          <View>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Auth', { screen: 'Login' })
              }
              style={Styles.loginView}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="user" type="feather" size={25} />
            <Text style={Styles.loginText}>{user.name}</Text>
              </View>
              <Icon name="ios-arrow-forward" type="ionicon" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Auth', { screen: 'Login' })
              }
              style={Styles.loginView}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="user" type="feather" size={25} />
                <Text style={Styles.loginText}>{user.email}</Text>
              </View>
              <Icon name="ios-arrow-forward" type="ionicon" />
            </TouchableOpacity>
          </View>
        )}

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
