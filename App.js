/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native'

import { HomeStack } from './source/navigations/stackNavigator';
import { TabStack } from './source/navigations/tabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <TabStack />
    </NavigationContainer>
  )
}


export default App;
