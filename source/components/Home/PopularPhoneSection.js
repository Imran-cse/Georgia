import React from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';

import { Icon } from 'react-native-elements';

import Styles from './Styles';

const PopularPhoneSection = props => {
  return (
    <View style={{ marginVertical: 20 }}>
      <View style={Styles.sectionHeaderContainer}>
        <Text style={Styles.sectionHeaderText}>Popular Phone Models</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', marginLeft: 20 }}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('AllProductsView', {
                endpoint: `products?per_page=${100}&`,
                headText: 'iPhone XR',
                filter: 'popularPhone'
              })
            }
            style={Styles.popularImageContainer}>
            <Image
              source={require('../../assets/home1/popular_phone_model_1.png')}
              style={Styles.poularImage}
            />
            <Text style={Styles.popularText}>iPhone XR</Text>
            {/* <View style={{ position: 'absolute', right: 2 }}>
              <TouchableOpacity style={{ paddingVertical: 10 }}>
                <Icon name="shoppingcart" type="antdesign" size={20} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="hearto" type="antdesign" size={18} />
              </TouchableOpacity>
            </View> */}
          </TouchableOpacity>
          <TouchableOpacity style={Styles.popularImageContainer}>
            <Image
              source={require('../../assets/home1/popular_phone_model_2.png')}
              style={Styles.poularImage}
            />
            <Text style={Styles.popularText}>iPhone XS Max</Text>
            {/* <View style={{ position: 'absolute', right: 2 }}>
              <TouchableOpacity style={{ paddingVertical: 10 }}>
                <Icon name="shoppingcart" type="antdesign" size={20} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="hearto" type="antdesign" size={18} />
              </TouchableOpacity>
            </View> */}
          </TouchableOpacity>
          <TouchableOpacity style={Styles.popularImageContainer}>
            <Image
              source={require('../../assets/home1/popular_phone_model_3.png')}
              style={Styles.poularImage}
            />
            <Text style={Styles.popularText}>iPhone XS/X</Text>
            {/* <View style={{ position: 'absolute', right: 2 }}>
              <TouchableOpacity style={{ paddingVertical: 10 }}>
                <Icon name="shoppingcart" type="antdesign" size={20} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="hearto" type="antdesign" size={18} />
              </TouchableOpacity>
            </View> */}
          </TouchableOpacity>
          <TouchableOpacity style={Styles.popularImageContainer}>
            <Image
              source={require('../../assets/home1/popular_phone_model_4.png')}
              style={Styles.poularImage}
            />
            <Text style={Styles.popularText}>iPhone 8 Plus/7 Plus</Text>
            {/* <View style={{ position: 'absolute', right: 2 }}>
              <TouchableOpacity style={{ paddingVertical: 10 }}>
                <Icon name="shoppingcart" type="antdesign" size={20} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="hearto" type="antdesign" size={18} />
              </TouchableOpacity>
            </View> */}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PopularPhoneSection;
