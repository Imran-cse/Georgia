import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

import Header from './Header';
import Profile from './Profile';
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

  async componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', async () => {
      await this.checkLogin();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  async checkLogin() {
    console.log('came to account');
    const user = await getUserAsync();
    if (user !== null) {
      this.setState({ user: JSON.parse(user) }, () => console.log('hello'));
    }
  }

  async logout() {
    await AsyncStorage.removeItem('user', error => {
      console.log(error);
      if (!error) {
        this.setState({ user: undefined });
      }
      this.checkLogin();
    });
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

        {!!user && <Profile user={user} logout={this.logout.bind(this)} />}

        <View style={Styles.horizontalLine} />

        <ScrollView>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Wishlist')}
            style={Styles.itemView}>
            <View style={Styles.leftItmes}>
              <Icon name="hearto" type="antdesign" />
              <Text style={Styles.loginText}>My Wishlist</Text>
            </View>
            <Icon name="ios-arrow-forward" type="ionicon" />
          </TouchableOpacity>
          {/* <TouchableOpacity style={Styles.itemView}>
            <Text style={Styles.itemText}>My Messages</Text>
            <Icon name="ios-arrow-forward" type="ionicon" />
          </TouchableOpacity> */}
          {!!user && (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('OrderHistory', {
                  userId: user.userId,
                })
              }
              style={Styles.itemView}>
              <View style={Styles.leftItmes}>
                <Icon name="history" type="material-community" size={28} />
                <Text style={Styles.loginText}>My Orders</Text>
              </View>
              <Icon name="ios-arrow-forward" type="ionicon" />
            </TouchableOpacity>
          )}
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
