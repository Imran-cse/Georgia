import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home/Home';

import {
  HomeStack,
  CategoryStack,
  SearchStack,
  CartStack,
  AccountStack,
} from './stackNavigator';

const Tab = createBottomTabNavigator();

export const TabStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Categories" component={CategoryStack} />
      <Tab.Screen name="Search" component={SearchStack} />
      <Tab.Screen name="Cart" component={CartStack} />
      <Tab.Screen name="Account" component={AccountStack} />
    </Tab.Navigator>
  );
};
