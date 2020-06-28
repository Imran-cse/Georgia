import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';

import { CheckBox, Button } from 'react-native-elements';
import RNPaypal from 'react-native-paypal-lib';
import AsyncStorage from '@react-native-community/async-storage';

import Header from '../Common/Header';
import CheckoutSteps from './CheckoutSteps';
import Styles from './Styles';
import {
  fetchCartData,
  fetchAddress,
  getUserAsync,
} from '../../constants/constant_functions';
import { getCategory, createOrder } from '../../server/fetch';
import { clientId } from '../../../config';

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentMethod: undefined,
      cart: {},
      address: {},
      user: undefined,
    };

    this.fetchCartData();
  }

  async fetchCartData() {
    await fetchCartData(this);
    await fetchAddress(this);
    const user = await getUserAsync();
    if (user !== null) {
      this.setState({ user: JSON.parse(user) }, () => console.log('hello'));
    }
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      fetchCartData(this);
      fetchAddress(this);
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  handlePaypal(totalPrice) {
    RNPaypal.paymentRequest({
      clientId: clientId,
      environment: RNPaypal.ENVIRONMENT.PRODUCTION,
      intent: RNPaypal.INTENT.SALE,
      price: totalPrice,
      currency: 'USD',
      description: `Android testing`,
      acceptCreditCards: true,
    })
      .then(response => {
        console.log(response.response.id);
        if (response.response && response.response.id) {
          const transactionId = response.response.id;
          this.placeOrder(transactionId);
        }
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  async placeOrder(transantionId) {
    const { route } = this.props;
    const {
      subTotalPrice,
      totalPrice,
      note,
      shipMethod,
      shippingFee,
    } = route.params;
    const { address, cart, user } = this.state;
    let lineItems = [];
    for (const key in cart) {
      if (cart.hasOwnProperty(key)) {
        lineItems.push({ product_id: key, quantity: cart[key].quantity });
      }
    }
    console.log('line items: ', lineItems);

    const data = {
      customer_id: user.userId,
      customer_note: note,
      payment_method: 'paypal',
      payment_method_title: 'Paypal',
      transaction_id: transantionId,
      set_paid: true,
      billing: {
        first_name: address.firstName,
        last_name: address.lastName,
        address_1: address.street,
        address_2: '',
        city: address.city,
        state: address.state,
        postcode: address.zipCode,
        country: address.country,
        email: address.email,
        phone: address.phoneNumber,
      },
      shipping: {
        first_name: address.firstName,
        last_name: address.lastName,
        address_1: address.street,
        address_2: '',
        city: address.city,
        state: address.state,
        postcode: address.zipCode,
        country: address.country,
      },
      line_items: [...lineItems],
      shipping_lines: [
        {
          method_id: shipMethod.toLowerCase().replace(' ', '_'),
          method_title: shipMethod,
          total: String(shippingFee),
        },
      ],
    };

    const res = await createOrder('orders?', data);
    const result = await Promise.resolve(res.json());
    console.log(JSON.stringify(result));
    if (result.id) {
      await AsyncStorage.removeItem('cart', err => console.log(err));
      Alert.alert('Success', 'Your has been placed successfully', [
        {
          text: 'Ok',
          onPress: () => this.props.navigation.navigate('Home'),
          style: 'default',
        },
      ]);
    }
  }

  render() {
    const { flatRate, freeShiping, localPickup } = this.state;
    const { route } = this.props;
    const {
      subTotalPrice,
      totalPrice,
      note,
      tax,
      shipMethod,
      shippingFee,
    } = route.params;

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
            checked={true}
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

        <View style={Styles.totalView}>
          <View style={Styles.rowView}>
            <Text>Subtotal</Text>
            <Text>$ {subTotalPrice.toFixed(2)}</Text>
          </View>
          <View style={Styles.rowView}>
            <Text>Tax</Text>
            <Text>$ {tax.toFixed(2)}</Text>
          </View>
          <View style={Styles.rowView}>
            <Text>{shipMethod}</Text>
            <Text>$ {shippingFee}</Text>
          </View>
          <View style={Styles.rowView}>
            <Text>Total</Text>
            <Text style={Styles.totalPrice}>$ {totalPrice.toFixed(2)}</Text>
          </View>
        </View>

        <Button
          onPress={() => this.handlePaypal(totalPrice)}
          title="PLACE MY ORDER"
          buttonStyle={Styles.shipButton}
        />

        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={Styles.backView}>
          <Text style={{ textDecorationLine: 'underline' }}>
            Go back to preview
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
