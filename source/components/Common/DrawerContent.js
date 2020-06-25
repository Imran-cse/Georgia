import React from 'react';
import { View, Text, Image } from 'react-native';

import {
  DrawerContent,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Styles from './Styles';

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView>
      <View style={{ alignItems: 'center', paddingVertical: 30 }}>
        <Image
          source={require('../../assets/home1/logo.png')}
          style={Styles.drawerImage}
        />
      </View>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label="HOME"
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="BRANDS"
        onPress={() => props.navigation.navigate('Brands')}
      />
      <DrawerItem
        label="CATEGORIES"
        onPress={() => props.navigation.navigate('Categories')}
      />
      {/* <DrawerItem
        label="CARRIERS"
        onPress={() => props.navigation.navigate('Categories')}
      /> */}
      <DrawerItem
        label="SHOP BY DEVICE"
        onPress={() => props.navigation.navigate('Categories')}
      />
      <DrawerItem
        label="NEW ARRIVAL"
        onPress={() =>
          props.navigation.navigate('NewArrival', {
            endpoint: `products?per_page=${40}&`,
            headText: 'All Products',
            categoryId: 0,
          })
        }
      />
      <DrawerItem
        label="C STORE"
        onPress={() =>
          props.navigation.navigate('AllProductsView', {
            endpoint: `products?category=${2145}&per_page=${40}&`,
            headText: 'C Store',
            categoryId: '',
          })
        }
      />
      <DrawerItem
        label="CUSTOMER SERVICE"
        onPress={() => props.navigation.navigate('Categories')}
      />
      <DrawerItem
        label="SALE"
        onPress={() =>
          props.navigation.navigate('AllProductsView', {
            endpoint: `products?category=${2138}&per_page=${40}&`,
            headText: 'Sale',
            categoryId: 2138,
          })
        }
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
