  import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { Icon } from 'react-native-elements';

import Styles from './Style';
import { moderateScale } from '../../constants/constant_functions';

const ProductHeader = props => {
  const { navigation, from } = props;

  // console(typeof(from));  

  return (
    <View style={Styles.headerContainer}>
      <TouchableOpacity
        style={Styles.backButton}
        onPress={() => { navigation.goBack()
          // navigation.navigate(from);
          // if (from === 'Search' || 'Categories' || 'AllProductsView')
          //   navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
        }}>
        <Icon name="arrowleft" type="antdesign" color="red" />
      </TouchableOpacity>
      <View style={Styles.headerView}>
        <TouchableOpacity onPress={() => navigation.navigate('Wishlist')} style={{ paddingRight: 15 }}>
          <Icon name="hearto" type="antdesign" size={20} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{paddingRight: moderateScale(20)}}>
          <Icon name="menu" type="feather" color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductHeader;
