import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Header from '../Common/Header';
import ChekcoutSteps from './CheckoutSteps';
import Styles from './Styles';

export default class Payment extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={Styles.container}>
        <Header headerText='Checkout' navigation={this.props.navigation} />

        <Text>This is Payment</Text>
      </View>
    )
  }
}