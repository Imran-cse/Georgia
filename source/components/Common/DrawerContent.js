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
      <DrawerItem
        label="CARRIERS"
        onPress={() => props.navigation.navigate('Categories')}
      />
      <DrawerItem
        label="SHOP BY DEVICE"
        onPress={() => props.navigation.navigate('Categories')}
      />
      <DrawerItem
        label="NEW ARRIVAL"
        onPress={() => props.navigation.navigate('Categories')}
      />
      <DrawerItem
        label="C STORE"
        onPress={() => props.navigation.navigate('Categories')}
      />
      <DrawerItem
        label="CUSTOMER SERVICE"
        onPress={() => props.navigation.navigate('Categories')}
      />
      <DrawerItem
        label="SALE"
        onPress={() => props.navigation.navigate('Categories')}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
