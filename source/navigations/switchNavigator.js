import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthStack } from './stackNavigator';
import { TabStack } from './tabNavigator';
import AllProductsView from '../components/Products/AllProductsView';
import ProductDetails from '../components/Products/ProductDetail';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
