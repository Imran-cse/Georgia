import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { CheckBox, Button } from 'react-native-elements';
import RNPaypal from 'react-native-paypal-lib';

import Header from '../Common/Header';
import CheckoutSteps from './CheckoutSteps';
import Styles from './Styles';

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentMethod: undefined,
    };
  }

  handlePaypal() {
    RNPaypal.paymentRequest({
      clientId: 'AaMsQpgXR4knQrSgTy3YwyUFh09aV9tgMftpiFhGaUH-gjH9DhjKUe4TeD2jUQN0N53pBJh41kr8qqLQ',
      environment: RNPaypal.ENVIRONMENT.SANDBOX,
      intent: RNPaypal.INTENT.SALE,
      price: 60,
      currency: 'USD',
      description: `Android testing`,
      acceptCreditCards: true,
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  render() {  
    const { flatRate, freeShiping, localPickup, method } = this.state;

    return (
      <View style={Styles.container}>
        <Header headerText="Checkout" navigation={this.props.navigation} />

        <CheckoutSteps step={4} />

        <View>
          {/* <CheckBox
            checked={freeShiping}
            onPress={() =>
              this.setState({
                freeShiping: true,
                flatRate: false,
                localPickup: false,
                method: 'freeShiping',
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
          /> */}
          <CheckBox
            onPress={() =>
              this.setState({
                freeShiping: false,
                flatRate: true,
                localPickup: false,
                method: 'flatRate',
              })
            }
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={flatRate}
            title={
              <View style={{ paddingLeft: 30 }}>
                <Image
                  source={require('../../assets/paypal.png')}
                  style={{ width: 200, height: 100, resizeMode: 'contain' }}
                />
              </View>
            }
            containerStyle={{ backgroundColor: 'white' }}
          />
          {/* <CheckBox
            checked={localPickup}
            onPress={() =>
              this.setState({
                freeShiping: false,
                flatRate: false,
                localPickup: true,
                method: 'localPickup',
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
          /> */}
        </View>

        <Button
          onPress={() => this.handlePaypal()}
          title="CONTIUE TO SHIPPING"
          buttonStyle={Styles.shipButton}
        />
      </View>
    );
  }
}
