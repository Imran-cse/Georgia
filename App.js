/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppStack } from './source/navigations/switchNavigator';

const App = () => {
  return <AppStack />;
};

export default App;
