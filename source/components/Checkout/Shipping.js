import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { CheckBox, Button } from 'react-native-elements';

import CheckoutSteps from './CheckoutSteps';
import Header from '../Common/Header';
import Styles from './Styles';

export default class Shipping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      freeShiping: true,
      flatRate: false,
      localPickup: false,
      shippingFee: 0,
      method: 'freeShiping',
    };
  }

  render() {
    const {
      flatRate,
      freeShiping,
      localPickup,
      method,
      shippingFee,
    } = this.state;

    return (
      <View style={Styles.container}>
        <Header headerText="Checkout" navigation={this.props.navigation} />

        <CheckoutSteps step={2} />

        <View style={Styles.shpiLevelView}>
          <Text style={Styles.shipText}>Shipping Method</Text>
        </View>

        <View>
          <View>
            <CheckBox
              checked={freeShiping}
              onPress={() =>
                this.setState({
                  freeShiping: true,
                  flatRate: false,
                  localPickup: false,
                  method: 'Free shipping',
                  shippingFee: 0,
                })
              }
              uncheckedIcon="circle-o"
              checkedIcon="dot-circle-o"
              title={
                <View style={{ paddingLeft: 30 }}>
                  <Text>Free shipping</Text>
                  <Text>$ 0.00</Text>
                </View>
              }
              containerStyle={[
                Styles.checkboxContainer,
                { backgroundColor: freeShiping ? '#e8eded' : 'white' },
              ]}
            />
            <CheckBox
              onPress={() =>
                this.setState({
                  freeShiping: false,
                  flatRate: true,
                  localPickup: false,
                  method: 'Flat rate',
                  shippingFee: 20,
                })
              }
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={flatRate}
              title={
                <View style={{ paddingLeft: 30 }}>
                  <Text>Flat rate</Text>
                  <Text>$ 20.00</Text>
                </View>
              }
              containerStyle={[
                Styles.checkboxContainer,
                { backgroundColor: flatRate ? '#e8eded' : 'white' },
              ]}
            />
            <CheckBox
              checked={localPickup}
              onPress={() =>
                this.setState({
                  freeShiping: false,
                  flatRate: false,
                  localPickup: true,
                  method: 'Locla pickup',
                  shippingFee: 10,
                })
              }
              uncheckedIcon="circle-o"
              checkedIcon="dot-circle-o"
              title={
                <View style={{ paddingLeft: 30 }}>
                  <Text>Locla pickup</Text>
                  <Text>$ 10.00</Text>
                </View>
              }
              containerStyle={[
                Styles.checkboxContainer,
                { backgroundColor: localPickup ? '#e8eded' : 'white' },
              ]}
            />
          </View>
        </View>

        <Button
          onPress={() =>
            this.props.navigation.navigate('Preview', {
              shipMethod: method,
              shippingFee: shippingFee,
            })
          }
          title="CONTIUE TO SHIPPING"
          buttonStyle={Styles.shipButton}
        />

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Address')}
          style={Styles.backView}>
          <Text style={{ textDecorationLine: 'underline' }}>
            Go back to address
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
