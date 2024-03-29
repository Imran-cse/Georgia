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
    const token = await AsyncStorage.getItem('token');
    if (user !== null) {
      this.setState({ user: JSON.parse(user), token: JSON.parse(token) }, () =>
        console.log('hello'),
      );
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
        <Header navigation={this.props.navigation} />
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
          {!!user && (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('MyWalletBalance', {
                  userId: user.userId,
                  token: this.state.token,
                })
              }
              style={Styles.itemView}>
              <View style={Styles.leftItmes}>
                <Icon name="wallet" type="antdesign" size={28} />
                <Text style={Styles.loginText}>My Wallet Balance</Text>
              </View>
              <Icon name="ios-arrow-forward" type="ionicon" />
            </TouchableOpacity>
          )}
          {!!user && (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('ShippingAddress', {
                  userId: user.userId,
                  token: this.state.token,
                })
              }
              style={Styles.itemView}>
              <View style={Styles.leftItmes}>
                <Icon name="local-shipping" type="material-icon" size={28} />
                <Text style={Styles.loginText}>Shipping Addresses</Text>
              </View>
              <Icon name="ios-arrow-forward" type="ionicon" />
            </TouchableOpacity>
          )}
          {!!user && (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('BrowsingHistory', {
                  userId: user.userId,
                })
              }
              style={Styles.itemView}>
              <View style={Styles.leftItmes}>
                <Icon name="history" type="material-community" size={28} />
                <Text style={Styles.loginText}>Browsing History</Text>
              </View>
              <Icon name="ios-arrow-forward" type="ionicon" />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('PrivacyPolicy')}
            style={Styles.itemView}>
            <View style={Styles.leftItmes}>
              <Icon name="shield-half-full" type="material-community" />
              <Text style={Styles.loginText}>Privacy Policy</Text>
            </View>
            <Icon name="ios-arrow-forward" type="ionicon" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('TermsCondition')}
            style={Styles.itemView}>
            <View style={Styles.leftItmes}>
              <Icon name="file-document-outline" type="material-community" />
              <Text style={Styles.loginText}>Terms & Condition </Text>
            </View>
            <Icon name="ios-arrow-forward" type="ionicon" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
