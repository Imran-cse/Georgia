import React, {Component} from 'react';
import {View, Text} from 'react-native'

import Styles from './Styles';

export default class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={Styles.container}>
        <Text>This is the first screen of the project</Text>
      </View>
    )
  }
}