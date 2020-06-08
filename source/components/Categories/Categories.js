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
      <View>
        <Header />

        <View style={Styles.container}>
          <View style={{ flexDirection: 'column',borderWidth: 1,  }}>
            <View style={Styles.itemContainer}>
              <Image source={categories[0].image} style={Styles.imageStyle} />
            </View>
            <Text style={Styles.categoryText}>{categories[0].name}</Text>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <View style={Styles.itemContainer}>
              <Image source={categories[0].image} style={Styles.imageStyle} />
            </View>
            <Text style={Styles.categoryText}>{categories[0].name}</Text>
          </View>
        </View>
      </View>
    );
  }
}
