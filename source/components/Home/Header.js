import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { SearchBar } from 'react-native-elements';

import Styles from './Styles';

const Header = props => {
  const {navigation} = props;

  return (
    <View>
      <View style={Styles.containerHeader}>
        <View>
          <Image
            source={require('../../assets/home1/logo.png')}
            style={Styles.logo}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/home1/notification_icon.png')}
              style={[Styles.headerIcon, {width: 20, height: 20}]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
            <Image
              source={require('../../assets/home1/wishlist_icon.png')}
              style={[Styles.headerIcon, {width: 20, height: 20}]}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <Image
              source={require('../../assets/home1/cart_icon.png')}
              style={Styles.headerIcon}
            />
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image
              source={require('../../assets/home1/menu_icon.png')}
              style={Styles.headerIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  );
};

export default Header;
