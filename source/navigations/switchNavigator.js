import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthStack, CheckoutStack } from './stackNavigator';
import { TabStack } from './tabNavigator';
import AllProductsView from '../components/Products/AllProductsView';
import ProductDetails from '../components/Products/ProductDetail';
import Wishlisht from '../components/Wishlist/Wishlist';
import Checkout from "../components/Checkout/Checkout";

const Stack = createStackNavigator();
const options = { headerShown: false };

export const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App" component={TabStack} options={options} />
        <Stack.Screen name="Auth" component={AuthStack} options={options} />
        <Stack.Screen name='AllProductsView' component={AllProductsView} options={options} />
        <Stack.Screen name='ProductDetails' component={ProductDetails} options={options} />
        <Stack.Screen name='Wishlist' component={Wishlisht} options={options} />
        <Stack.Screen name='Checkout' component={CheckoutStack} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
