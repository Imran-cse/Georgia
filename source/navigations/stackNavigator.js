import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../components/Home/Home';
import Categories from '../components/Categories/Categories';
import Search from '../components/Search/Search';
import Cart from '../components/Cart/Cart';
import Account from '../components/Account/Account';
import ProductDetails from '../components/Products/ProductDetail';
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';

const Stack = createStackNavigator();
const options = { headerShown: false };

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} options={options} />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={options}
      />
    </Stack.Navigator>
  );
};

export const CategoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={options}
      />
    </Stack.Navigator>
  );
};

export const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} options={options} />
    </Stack.Navigator>
  );
};

export const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={Cart} options={options} />
    </Stack.Navigator>
  );
};

export const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={Account} options={options} />
    </Stack.Navigator>
  );
};

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={options} />
      <Stack.Screen name='Signup' component={Signup} options={options} />
    </Stack.Navigator>
  )
}
