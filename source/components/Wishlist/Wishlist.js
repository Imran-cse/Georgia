import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { Icon, Button } from 'react-native-elements';

import Header from '../Common/Header';
import Styles from './Styles';

export default class Wishlist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Header headerText="My Wishlist" navigation={this.props.navigation} />

        <View style={Styles.horizontalLine} />
        <Text style={Styles.quantityText}>1 Items</Text>
        <View style={Styles.horizontalLine} />

        <View style={Styles.itemContainer}>
          <View style={Styles.iconContainer}>
            <Icon
              name="minus-circle-outline"
              type="material-community"
              size={35}
              color="grey"
            />
          </View>
          <View style={Styles.imageContainer}>
            <Image
              source={require('../../assets/home1/newest_phone_model_5.png')}
              style={Styles.image}
            />
            {/* <View style={Styles.pickerView}>
              <Picker style={{ flex: 1, width: 90, height: 30 }}>
                <Picker.Item label="10" value="1" />
              </Picker>
            </View> */}
          </View>
          <View style={Styles.desContainer}>
            <Text style={Styles.desText}>
              10 Pack Apple iPhone 11 (6.1 inch) Clear Front Tempered
            </Text>
            <Text style={Styles.priceText}>$ 7.99</Text>
            <Button title="ADD TO CART" buttonStyle={Styles.buttonStyle}
              titleStyle={{fontSize: 13}}
            />
          </View>
        </View>
      </View>
    );
  }
}
