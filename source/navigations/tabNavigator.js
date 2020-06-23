import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  EventEmitter,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Badge } from 'react-native-elements';
import AsyncStoragte from '@react-native-community/async-storage';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

import Search from '../components/Search/Search';
import {
  HomeStack,
  CategoryStack,
  CartStack,
  AccountStack,
} from './stackNavigator';

import { fetchCartDataCount } from '../constants/constant_functions';
import Styles from './style';

const Tab = createBottomTabNavigator();

export const TabStack = ({ navigation }) => {
  const options = { tabBarButton: props => <TouchableOpacity {...props} /> };
  const [cartCount, setCount] = React.useState(0);

  // var cartCount;

  React.useEffect(() => {
    async function getCartCount() {
      const res = await AsyncStoragte.getItem('cart');
      let temp = res ? JSON.parse(res) : {};
      console.log('in tab', Object.keys(temp).length);
      setCount(Object.keys(temp).length);
    }
    console.log('hello');

    getCartCount();
    return () => getCartCount();
  });

  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener('state', async () => {
  //     const res = await AsyncStoragte.getItem('cart');
  //     let temp = res ? JSON.parse(res) : {};
  //     console.log('in tab', Object.keys(temp).length);
  //     setCount(Object.keys(temp).length);
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route, navigation }) => ({
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
                style={[Styles.tabIcon, { width: 20, height: 20 }]}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require('../assets/home1/categories_icon.png')}
                style={[Styles.tabIcon, { width: 20, height: 20 }]}
                resizeMode="contain"
              />
            );
          } else if (route.name === 'Search') {
            return focused ? (
              <Image
                source={require('../assets/home1/footer_searchicon1.png')}
                style={Styles.tabIcon}
                resizeMode="contain"
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
              <View>
                <Image
                  source={require('../assets/home1/footer_cart_icon1.png')}
                  style={Styles.tabIcon}
                  resizeMode="contain"
                />
                <Badge
                  value={cartCount}
                  badgeStyle={{ backgroundColor: 'red' }}
                  containerStyle={{ position: 'absolute', top: -5, right: -5 }}
                />
              </View>
            ) : (
              <View>
                <Image
                  source={require('../assets/home1/footer_cart_icon.png')}
                  style={Styles.tabIcon}
                  resizeMode="contain"
                />
                {/* <Badge
                  value={cartCount}
                  badgeStyle={{ backgroundColor: 'red' }}
                  containerStyle={{ position: 'absolute', top: -5, right: -5 }}
                /> */}
              </View>
            );
          } else if (route.name === 'Account') {
            return focused ? (
              <Image
                source={require('../assets/home1/account_footer_icon1.png')}
                style={Styles.tabIcon}
                resizeMode="contain"
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
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen name="Home" component={HomeStack} options={options} />
      <Tab.Screen
        name="Categories"
        component={CategoryStack}
        options={options}
      />
      <Tab.Screen name="Search" component={Search} options={options} />
      <Tab.Screen name="Cart" component={CartStack} options={options} />
      <Tab.Screen name="Account" component={AccountStack} options={options} />
    </Tab.Navigator>
  );
};
