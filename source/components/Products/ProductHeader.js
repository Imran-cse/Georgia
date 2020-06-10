  import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { Icon } from 'react-native-elements';

import Styles from './Style';

const ProductHeader = props => {
  const { navigation, from } = props;

  // console(typeof(from));  

  return (
    <View style={Styles.headerContainer}>
      <TouchableOpacity
        onPress={() => { navigation.goBack()
          // navigation.navigate(from);
          // if (from === 'Search' || 'Categories' || 'AllProductsView')
          //   navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
        }}>
        <Icon name="arrowleft" type="antdesign" color="red" />
      </TouchableOpacity>
      <View style={Styles.headerView}>
        <TouchableOpacity style={{ paddingRight: 15 }}>
          <Icon name="hearto" type="antdesign" size={20} color="red" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="menu" type="feather" color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductHeader;
