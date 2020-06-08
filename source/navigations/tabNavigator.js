import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Search from '../components/Search/Search'

import {
  HomeStack,
  CategoryStack,
  SearchStack,
  CartStack,
  AccountStack,
} from './stackNavigator';

import Styles from './style';

const Tab = createBottomTabNavigator();

export const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return focused ? (
              <Image
                source={require('../assets/home1/home_icon1.png')}
                style={Styles.tabIcon}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require('../assets/home1/home_icon.png')}
                style={Styles.tabIcon}
                resizeMode="contain"
              />
            );
          } else if (route.name === 'Categories') {
            return focused ? (
              <Image
                source={require('../assets/home1/categories_icon1.png')}
                style={[Styles.tabIcon, {width: 20, height: 20}]}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require('../assets/home1/categories_icon.png')}
                style={[Styles.tabIcon, {width: 20, height: 20}]}
                resizeMode='contain'
              />
            );
          } else if (route.name === 'Search') {
            return focused ? (
              <Image
                source={require('../assets/home1/footer_searchicon1.png')}
                style={Styles.tabIcon}
                resizeMode='contain'
              />
            ) : (
              <Image
                source={require('../assets/home1/footer_searchicon.png')}
                style={Styles.tabIcon}
                resizeMode="contain"
              />
            );
          } else if (route.name === 'Cart') {
            return focused ? (
              <Image
                source={require('../assets/home1/footer_cart_icon1.png')}
                style={Styles.tabIcon}
                resizeMode='contain'
              />
            ) : (
              <Image
                source={require('../assets/home1/footer_cart_icon.png')}
                style={Styles.tabIcon}
                resizeMode='contain'
              />
            );
          } else if (route.name === 'Account') {
            return focused ? (
              <Image
                source={require('../assets/home1/account_footer_icon1.png')}
                style={Styles.tabIcon}
                resizeMode='contain'
              />
            ) : (
              <Image
                source={require('../assets/home1/account_footer_icon.png')}
                style={Styles.tabIcon}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        labelStyle: { fontSize: 14 },
        activeTintColor: 'red',
        style: { height: 70 },
        tabStyle: { height: 50, alignSelf: 'center' },
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Categories" component={CategoryStack} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Cart" component={CartStack} />
      <Tab.Screen name="Account" component={AccountStack} />
    </Tab.Navigator>
  );
};
