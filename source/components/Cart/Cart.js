import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  NativeModules,
  LayoutAnimation,
} from 'react-native';

import { Icon, Rating, Input, Button } from 'react-native-elements';
import { Picker } from 'native-base';

import {
  fetchCartData,
  updateCart,
  getUserAsync,
} from '../../constants/constant_functions';
import Styles from './Styles';

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {},
      user: undefined,
    };

    fetchCartData(this);
  }

  async fetchCartData() {
    LayoutAnimation.easeInEaseOut();
    await fetchCartData(this);
    const user = await getUserAsync();
    if (user) {
      this.setState({ user: JSON.parse(user) }, () => console.log('hello'));
    }
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      fetchCartData(this);
      this.fetchCartData();
      LayoutAnimation.easeInEaseOut();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  async removeFromCart(id) {
    LayoutAnimation.easeInEaseOut();
    let { cart } = this.state;
    delete cart[id];
    await upldatecart(cart, this);
  }

  async changeQuantity(id, quantity) {
    const { cart } = this.state;
    cart[id].quantity = quantity;

    await updateCart(cart, this);
    await fetchCartData(this);
  }

  async removeFromCart(id) {
    let { cart } = this.state;
    LayoutAnimation.easeInEaseOut();

    delete cart[id];
    await updateCart(cart, this);
    await fetchCartData(this);
  }

  async clearCart() {
    LayoutAnimation.easeInEaseOut();
    const { cart } = this.state;
    for (const key in cart) {
      if (cart.hasOwnProperty(key)) {
        delete cart[key];
      }
    }

    await updateCart(cart, this);
    await fetchCartData(this);
  }

  render() {
    const { cart, user } = this.state;
    console.log('cart', cart);

    let productCount = 0;
    let subTotal = 0;
    let arrCart = [];
    for (const key in cart) {
      if (cart.hasOwnProperty(key)) {
        arrCart.push({ ...cart[key], id: key });
        subTotal += Number(cart[key].quantity) * Number(cart[key].price);
        productCount += Number(cart[key].quantity);
      }
    }

    let tax = 0;
    if (!!user && user.role.includes('customer')) {
      tax = subTotal * 0.08;
    }
    let totalPrice = subTotal + tax;

    let pickerList = [];
    for (let index = 1; index < 50; index++) {
      pickerList.push(
        <Picker.Item label={`${index}`} key={index} value={index} />,
      );
    }

    return (
      <View style={Styles.container}>
        <View style={Styles.headerContainer}>
          <Text style={Styles.myCartText}>My Cart</Text>
          <View style={Styles.headBarView}>
            <Text style={Styles.totalText}>TOTAL {arrCart.length} items</Text>
            <TouchableOpacity onPress={() => this.clearCart()}>
              <Text style={Styles.clearText}>CLEAR CART</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          {arrCart.map(item => {
            const rating = !!item.average_raitng
              ? Number(item.average_raitng)
              : 0;
            return (
              <View style={Styles.itemContainer}>
                <View style={Styles.iconContainer}>
                  <Icon
                    name="minus-circle-outline"
                    type="material-community"
                    size={30}
                    color="grey"
                    onPress={() => this.removeFromCart(item.id)}
                  />
                </View>
                <View style={Styles.imageContainer}>
                  {item.images && (
                    <Image
                      source={{ uri: item.images[0].src }}
                      style={Styles.image}
                    />
                  )}
                  <View style={Styles.pickerView}>
                    <Picker
                      selectedValue={item.quantity}
                      mode="dropdown"
                      onValueChange={quantity => {
                        this.changeQuantity(item.id, quantity);
                      }}
                      style={{ flex: 1, width: 90, height: 30 }}>
                      {pickerList}
                    </Picker>
                  </View>
                </View>
                <View style={Styles.desContainer}>
                  <Text style={Styles.desText}>{item.name}</Text>
                  <Text style={Styles.priceText}>$ {item.price}</Text>
                  <Rating readonly startingValue={rating} imageSize={10} />
                </View>
              </View>
            );
          })}
          <View style={Styles.horizontalLine} />

          <View style={Styles.couponView}>
            <View style={{ flex: 7 }}>
              <Input placeholder="Coupon Code" inputStyle={{ fontSize: 16 }} />
            </View>
            <View style={{ flex: 3 }}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/home1/apply_button.png')}
                  style={Styles.couponImage}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={Styles.totalView}>
            <View style={Styles.rowView}>
              <Text style={Styles.smallText}>Products</Text>
              <Text style={Styles.smallText}>x{productCount}</Text>
            </View>
            <View style={Styles.rowView}>
              <Text style={Styles.bigText}>Sub Total</Text>
              <Text style={Styles.bigText}>$ {subTotal.toFixed(2)}</Text>
            </View>
            <View style={Styles.rowView}>
              <Text style={Styles.smallText}>Tax</Text>
              <Text style={Styles.smallText}>$ {tax.toFixed(2)}</Text>
            </View>
            <View style={Styles.rowView}>
              <Text style={Styles.bigText}>Total</Text>
              <Text style={Styles.bigText}>$ {totalPrice.toFixed(2)}</Text>
            </View>
          </View>

          {Object.keys(cart).length > 0 && (
            <Button
              onPress={() =>
                !!user
                  ? this.props.navigation.navigate('Checkout')
                  : Alert.alert('Login', 'Please login to checkout', [
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel pressed'),
                        style: 'cancel',
                      },
                      {
                        text: 'Ok',
                        onPress: () =>
                          this.props.navigation.navigate('Auth', {
                            screen: 'Login',
                          }),
                        style: 'default',
                      },
                    ])
              }
              title="CHECKOUT"
              buttonStyle={Styles.buttonStyle}
            />
          )}
        </ScrollView>
      </View>
    );
  }
}
