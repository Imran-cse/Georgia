import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthStack, CheckoutStack } from './stackNavigator';
import Wishlisht from '../components/Wishlist/Wishlist';
import Checkout from "../components/Checkout/Checkout";
import OrderHistory from '../components/Account/OrderHistory';
import {DrawerStack} from './drawerNavigator';

const Stack = createStackNavigator();
const options = { headerShown: false };

export const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App" component={DrawerStack} options={options} />
        <Stack.Screen name="Auth" component={AuthStack} options={options} />
        <Stack.Screen name='Wishlist' component={Wishlisht} options={options} />
        <Stack.Screen name='OrderHistory' component={OrderHistory} options={options} />
        <Stack.Screen name='Checkout' component={CheckoutStack} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
