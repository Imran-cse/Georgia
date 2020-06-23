import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Styles from './Styles';

const Header = props => {
  const { navigation, headerText } = props;

  return (
    <View style={Styles.headerContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            source={require('../../assets/home1/menu_icon.png')}
            style={Styles.headerIcon}
          />
        </TouchableOpacity>
        <Text style={Styles.headerText}>{headerText}</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
        <Image
          source={require('../../assets/home1/wishlist_icon.png')}
          style={[Styles.headerIcon]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
