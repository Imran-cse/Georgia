import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Styles from './Styles';

const Header = props => {
  const { navigation } = props;

  return (
    <View style={Styles.headerContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/home1/menu_icon.png')}
            style={Styles.headerIcon}
          />
        </TouchableOpacity>
        <Text style={Styles.headerText}>Categories</Text>
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
