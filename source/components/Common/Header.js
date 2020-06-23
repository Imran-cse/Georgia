import React, { version } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Icon } from 'react-native-elements';
import { moderateScale } from '../../constants/constant_functions';

const Header = props => {
  const { headerText, navigation } = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{ padding: moderateScale(20) }}
        onPress={() => navigation.goBack()}>
        <Icon name="ios-arrow-back" type="ionicon" color="red" size={25} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: moderateScale(18),
          paddingLeft: moderateScale(30),
          fontWeight: 'bold',
          color: 'red',
        }}>
        {headerText}
      </Text>
    </View>
  );
};

export default Header;
