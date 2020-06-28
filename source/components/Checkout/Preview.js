import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TextInput } from 'react-native';

import { Picker } from 'native-base';
import { Icon, Button, Rating } from 'react-native-elements';

import Header from '../Common/Header';
import ChekcoutSteps from './CheckoutSteps';
import PreviewAddress from './PreviewAddress';
import Styles from './Styles';
import Styles1 from '../Cart/Styles';
import {
  fetchCartData,
  updateCart,
  fetchAddress,
  getUserAsync,
  moderateScale,
  fetchShipAddress
} from '../../constants/constant_functions';

export default class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {},
      address: {},
      note: undefined,
    };

    this.fetchCartData();
  }

  async fetchCartData() {
    await fetchCartData(this);
    await fetchShipAddress(this);
    const user = await getUserAsync();
    if (user) {
      this.setState({ user: JSON.parse(user) }, () => console.log('hello'));
    }
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      fetchCartData(this);
      fetchShipAddress(this);
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  async removeFromCart(id) {
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

  render() {
    const { cart, address, note, user } = this.state;
    const { route } = this.props;
    let { shipMethod, shippingFee } = route.params;
    // console.log('cart in preview', cart);

    let productCount = 0;
    let subTotalPrice = 0;
    let arrCart = [];
    for (const key in cart) {
      if (cart.hasOwnProperty(key)) {
        arrCart.push({ ...cart[key], id: key });
        subTotalPrice += Number(cart[key].quantity) * Number(cart[key].price);
        productCount += Number(cart[key].quantity);
      }
    }

    let tax = 0;
    if (!!user && user.role.includes('customer')) {
      tax = subTotalPrice * 0.08;
    }

    let totalPrice = subTotalPrice + tax
    if (subTotalPrice < 150) {
      totalPrice = totalPrice + shippingFee
    } else {
      shippingFee = 0.00
    }

    let pickerList = [];
    for (let index = 1; index < 50; index++) {
      pickerList.push(
        <Picker.Item label={`${index}`} key={index} value={index} />,
      );
    }
    // let totalPrice = subTotalPrice + shippingFee;

    console.log('arrCart', arrCart);

    return (
      <View style={Styles.container}>
        <Header headerText="Checkout" navigation={this.props.navigation} />

        <ChekcoutSteps step={3} />

        <View style={{ flex: 1 }}>
          <ScrollView>
            <View style={Styles.shpiLevelView}>
              <Text style={Styles.shipText}>Shipping Address</Text>
            </View>

            <PreviewAddress address={address} />

            <View>
              <Text style={Styles.orderDetailLabel}>Order details</Text>

              {arrCart.map(item => {
                const rating = !!item.average_raitng
                  ? Number(item.average_raitng)
                  : 0;
                productCount += Number(item.price) * Number(item.quantity);
                return (
                  <View style={Styles1.itemContainer}>
                    <View style={Styles1.iconContainer}>
                      <Icon
                        name="minus-circle-outline"
                        type="material-community"
                        size={30}
                        color="grey"
                        onPress={() => this.removeFromCart(item.id)}
                      />
                    </View>
                    <View style={Styles1.imageContainer}>
                      {item.images && (
                        <Image
                          source={{ uri: item.images[0].src }}
                          style={Styles1.image}
                        />
                      )}
                      <View style={Styles1.pickerView}>
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
                    <View style={Styles1.desContainer}>
                      <Text style={Styles1.desText}>{item.name}</Text>
                      <Text style={Styles1.priceText}>$ {item.price}</Text>
                      <Rating readonly startingValue={rating} imageSize={10} />
                    </View>
                  </View>
                );
              })}
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

            <View style={Styles.noteView}>
              <Text style={Styles.noteText}>Your note</Text>
              <TextInput
                value={note}
                onChangeText={note => this.setState({ note })}
                style={Styles.textInput}
                multiline={true}
                numberOfLines={4}
              />
            </View>

            <Button
              onPress={() => this.props.navigation.navigate('Payment', {
                subTotalPrice: subTotalPrice,
                totalPrice: totalPrice,
                note: note,
                tax: tax,
                shipMethod: shipMethod,
                shippingFee: shippingFee
              })}
              title="CONTIUE TO PAYMENT"
              buttonStyle={[
                Styles.shipButton,
                { marginHorizontal: moderateScale(20) },
              ]}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
