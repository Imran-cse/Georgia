import React, { Component } from 'react';

import { View, Image } from 'react-native';
import { moderateScale } from '../../constants/constant_functions';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('App', { screen: 'Home' });
    }, 2000);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../assets/home1/logo.png')}
          style={{
            width: moderateScale(230),
            height: moderateScale(150),
            resizeMode: 'contain',
          }}
        />
      </View>
    );
  }
}
