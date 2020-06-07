import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import Styles from './Style';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { route } = this.props;
    // const { product } = route.params;

    return (
      <View>
        <View style={Styles.productContainer}>
          <View style={Styles.imageContainer}>
            <Image
              source={require('../../assets/home1/phone_case_img.png')}
              style={Styles.image}
            />
          </View>
          <View style={Styles.thumbnailContainer}>
            <View style={Styles.thubImageView}>
              <Image
                source={require('../../assets/home1/phone_case_img.png')}
                style={Styles.thumImage}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
