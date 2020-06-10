import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { Icon, Rating, Input, Button } from 'react-native-elements';
import { Picker } from 'native-base';

import Styles from './Styles';

export default class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.headerContainer}>
          <Text style={Styles.myCartText}>My Cart</Text>
          <View style={Styles.headBarView}>
            <Text style={Styles.totalText}>TOTAL 1 items</Text>
            <TouchableOpacity>
              <Text style={Styles.clearText}>CLEAR CART</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={Styles.itemContainer}>
          <View style={Styles.iconContainer}>
            <Icon
              name="minus-circle-outline"
              type="material-community"
              size={30}
              color="grey"
            />
          </View>
          <View style={Styles.imageContainer}>
            <Image
              source={require('../../assets/home1/newest_phone_model_5.png')}
              style={Styles.image}
            />
            <View style={Styles.pickerView}>
              <Picker style={{ flex: 1, width: 90, height: 30 }}>
                <Picker.Item label="10" value="1" />
              </Picker>
            </View>
          </View>
          <View style={Styles.desContainer}>
            <Text style={Styles.desText}>
              10 Pack Apple iPhone 11 (6.1 inch) Clear Front Tempered
            </Text>
            <Text style={Styles.priceText}>$ 7.99</Text>
            <Rating readonly startingValue={3} imageSize={10} />
          </View>
        </View>

        <View style={Styles.horizontalLine} />

        <View style={Styles.couponView}>
          <View style={{ flex: 7 }}>
            <Input placeholder="Coupon Code" inputStyle={{fontSize: 16}} />
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
            <Text style={Styles.smallText}>x1</Text>
          </View>
          <View style={Styles.rowView}>
            <Text style={Styles.bigText}>Sub Total</Text>
            <Text style={Styles.bigText}>$ 7.99</Text>
          </View>
          <View style={Styles.rowView}>
            <Text style={Styles.smallText}>Tax</Text>
            <Text style={Styles.smallText}>$ 0.32</Text>
          </View>
          <View style={Styles.rowView}>
            <Text style={Styles.bigText}>Sub Total</Text>
            <Text style={Styles.bigText}>$ 8.31</Text>
          </View>
        </View>

        <Button title='CHECKOUT' buttonStyle={Styles.buttonStyle} />
      </View>
    );
  }
}
