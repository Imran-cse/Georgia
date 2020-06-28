import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Header from '../Common/Header';
import Styles from './Styles';
import { getBalance, getUser } from '../../server/fetch';

export default class MyWalletBalance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: undefined,
    };

    this.fetchBalance();
  }

  async fetchBalance() {
    const { route } = this.props;
    const { userId, token } = route.params;
    const res = await getBalance(`current_balance/${userId}`, token);
    const result = await Promise.resolve(res.json());
    this.setState({ balance: result });
    console.log(result);
  }

  render() {
    const { balance } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Header
          headerText="My Wallet Balance"
          navigation={this.props.navigation}
        />

        <Text style={{ margin: 20, fontSize: 17 }}>Wallet Balance:</Text>

        {!!balance && (
          <View
            style={{
              marginHorizontal: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 50, color: 'grey'}}>$ {balance}</Text>
          </View>
        )}
      </View>
    );
  }
}
