import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

import Styles from './Styles';

const CategorySection = props => {
  return (
    <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
      <View style={Styles.categorySectionContainer}>
        <TouchableOpacity style={Styles.categorySectionItem}>
          <Image
            source={require('../../assets/home1/phone_case_icon.png')}
            style={Styles.categoryImage}
          />
          <Text style={Styles.categorySectionText}>Phone Case</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.categorySectionItem}>
          <Image
            source={require('../../assets/home1/screen_protector_icon.png')}
            style={Styles.categoryImage}
          />
          <Text style={Styles.categorySectionText}>Screen Protector</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.categorySectionItem}>
          <Image
            source={require('../../assets/home1/Air_pods_case_icon.png')}
            style={Styles.categoryImage}
          />
          <Text style={Styles.categorySectionText}>Air Pods Case</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.categorySectionContainer}>
        <TouchableOpacity style={Styles.categorySectionItem}>
          <Image
            source={require('../../assets/home1/batteries_icon.png')}
            style={Styles.categoryImage}
          />
          <Text style={Styles.categorySectionText}>Batteries</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.categorySectionItem}>
          <Image
            source={require('../../assets/home1/charger_cables_icon.png')}
            style={Styles.categoryImage}
          />
          <Text style={Styles.categorySectionText}>Chargers/Cables</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.categorySectionItem}>
          <Image
            source={require('../../assets/home1/bluetooth_icon.png')}
            style={Styles.categoryImage}
          />
          <Text style={Styles.categorySectionText}>Bluetooth Speakers</Text>
        </TouchableOpacity>
      </View>

      <View style={[Styles.categorySectionContainer, {justifyContent: 'flex-start'}]}>
        <TouchableOpacity style={Styles.categorySectionItem}>
          <Image
            source={require('../../assets/home1/sd_card_flash_icon.png')}
            style={Styles.categoryImage}
          />
          <Text style={Styles.categorySectionText}>Batteries</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.categorySectionItem, {marginLeft: 15}]}>
          <Image
            source={require('../../assets/home1/c_store_icon.png')}
            style={Styles.categoryImage}
          />
          <Text style={Styles.categorySectionText}>Chargers/Cables</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.categorySectionItem}>
          <Image
            source={require('../../assets/home1/bluetooth_icon.png')}
            style={Styles.categoryImage}
          />
          <Text style={Styles.categorySectionText}>Bluetooth Speakers</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
};

export default CategorySection;
