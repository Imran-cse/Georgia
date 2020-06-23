import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { TabStack } from './tabNavigator';
import CustomDrawerContent from '../components/Common/DrawerContent';

import AllBrands from '../components/Brands/AllBrands';
import ProductDetails from '../components/Products/ProductDetail';
import AllProductsView from '../components/Products/AllProductsView';
import Home from '../components/Home/Home';

const Drawer = createDrawerNavigator();
const options = { headerShown: false };

export const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Tab" component={TabStack} />
      <Drawer.Screen name="Brands" component={AllBrands} options={options} />
      <Drawer.Screen
        name="AllProductsView"
        component={AllProductsView}
        options={options}
      />
      <Drawer.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={options}
      />
    </Drawer.Navigator>
  );
};
