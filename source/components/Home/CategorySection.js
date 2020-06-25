import React from 'react';
import { View, Image, TouchableOpacity, Text, Dimensions } from 'react-native';

import Styles from './Styles';

const CategorySection = props => {
  const {navigation} = props;

  return (
    <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
      <View style={Styles.categorySectionContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AllProductsView', {
              endpoint: `products?category=15&per_page=${40}&`,
              headText: 'Phone Cases',
              from: 'Categories',
            })
          }
          style={Styles.categorySectionItem}>
          <Image
            source={require('../../assets/home1/phone_case_icon.png')}
            style={Styles.categoryImage}
          />
          <Text style={Styles.categorySectionText}>Phone Case</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AllProductsView', {
              endpoint: `products?category=1734&per_page=${40}&`,
              headText: 'Screen Protector',
              from: 'Categories',
            })
          }
          style={Styles.categorySectionItem}>
          <Image
            source={require('../../assets/home1/screen_protector_icon.png')}
            style={Styles.categoryImage}
          />
          <Text style={Styles.categorySectionText}>Screen Protector</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AllProductsView', {
              endpoint: `products?category=1740&per_page=${40}&`,
              headText: 'AirPods Cases',
              
            })
          }
          style={Styles.categorySectionItem}>
          <Image
            source={require('../../assets/home1/Air_pods_case_icon.png')}
            style={Styles.categoryImage}
          />
          <Text style={Styles.categorySectionText}>Air Pods Cases</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.categorySectionContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AllProductsView', {
              endpoint: `products?category=1737&per_page=${40}&`,
              headText: 'Batteries',
              
            })
          }
          style={Styles.categorySectionItem}>
          <Image
            source={require('../../assets/home1/batteries_icon.png')}
            style={Styles.categoryImage}
          />
          <Text style={Styles.categorySectionText}>Batteries</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AllProductsView', {
              endpoint: `products?category=1738&per_page=${40}&`,
              headText: 'Chargers/Cables',
              
            })
          }
          style={Styles.categorySectionItem}>
          <Image
            source={require('../../assets/home1/charger_cables_icon.png')}
            style={Styles.categoryImage}
          />
          <Text style={Styles.categorySectionText}>Chargers/Cables</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AllProductsView', {
              endpoint: `products?category=1739&per_page=${40}&`,
              headText: 'Bluetooth Speakers',
              
            })
          }
          style={Styles.categorySectionItem}>
          <Image
            source={require('../../assets/home1/bluetooth_icon.png')}
            style={Styles.categoryImage}
          />
          <Text style={Styles.categorySectionText}>Bluetooth Speakers</Text>
        </TouchableOpacity>
      </View>

      <View
        style={[
          Styles.categorySectionContainer,
          { justifyContent: 'flex-start' },
        ]}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AllProductsView', {
              endpoint: `products?category=2107&per_page=${40}&`,
              headText: 'SD Cards/Flash Drivers',
              
            })
          }
          style={Styles.categorySectionItem}>
          <Image
            source={require('../../assets/home1/sd_card_flash_icon.png')}
            style={Styles.categoryImage}
          />
          <Text style={Styles.categorySectionText}>SD Cards/Flash Drives</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AllProductsView', {
              endpoint: `products?category=2145&per_page=${40}&`,
              headText: 'C Store',
            })
          }
          style={[Styles.categorySectionItem, { marginLeft: 15 }]}>
          <Image
            source={require('../../assets/home1/c_store_icon.png')}
            style={Styles.categoryImage}
          />
          <Text style={Styles.categorySectionText}>C Store</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AllProductsView', {
              endpoint: `products?category=2137&per_page=${40}&`,
              headText: 'Watch Accessories',
            })
          }
          style={[Styles.categorySectionItem, {width: Dimensions.get('window').width/3}]}>
          <Image
            source={require('../../assets/home1/watch_accesories_img.png')}
            style={[Styles.categoryImage, {height: 60}]}
          />
          <Text style={Styles.categorySectionText}>Watch Accessories</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategorySection;
