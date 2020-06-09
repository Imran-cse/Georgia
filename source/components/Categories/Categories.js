import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { categories, colors } from '../../constants/constant_strings';
import Header from './Header';

import Styles from './Styles';

export default class Categories extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Header />

        <View style={Styles.container}>
          <View style={Styles.itemContainer}>
            <View style={Styles.imageContainer}>
              <Image source={categories[0].image} style={Styles.imageStyle} />
            </View>
            <Text style={Styles.categoryText}>{categories[0].name}</Text>
          </View>
          <View style={Styles.itemContainer}>
            <View style={Styles.imageContainer}>
              <Image source={categories[0].image} style={Styles.imageStyle} />
            </View>
            <Text style={Styles.categoryText}>{categories[0].name}</Text>
          </View>
        </View>
      </View>
    );
  }
}
