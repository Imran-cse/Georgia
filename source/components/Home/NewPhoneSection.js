import React from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';

import { Icon, Rating } from 'react-native-elements';

import Styles from './Styles';

const NewPhoneSection = props => {
  return (
    <View style={{ marginBottom: 20 }}>
      <View style={Styles.sectionHeaderContainer}>
        <Text style={Styles.sectionHeaderText}>New Phone Models</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={Styles.newPhoneSection}>
        <TouchableOpacity style={Styles.popularImageContainer}>
          <View>
            <Image
              source={require('../../assets/home1/newest_phone_model_1.png')}
              style={Styles.poularImage}
            />
          </View>
          {/* <View style={Styles.newPhoneFooter}> */}
            <View>
              <Text style={Styles.popularText}>iPhone SE (2020)</Text>
            </View>
            {/* <View style={{ flex: 2, justifyContent: 'space-around' }}>
              <TouchableOpacity>
                <Icon name="hearto" type="antdesign" size={20} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="shoppingcart" type="antdesign" />
              </TouchableOpacity>
            </View> */}
          {/* </View> */}
        </TouchableOpacity>

        <TouchableOpacity style={Styles.popularImageContainer}>
          <View>
            <Image
              source={require('../../assets/home1/newest_phone_model_2.png')}
              style={Styles.poularImage}
            />
          </View>
          {/* <View style={Styles.newPhoneFooter}>
            <View style={Styles.featuredProductFooter}> */}
              <Text style={Styles.popularText}>SKU: GPC98801</Text>
            {/* </View>
            <View /> */}
            {/* <View style={{ flex: 2, justifyContent: 'space-around' }}>
              <TouchableOpacity>
                <Icon name="hearto" type="antdesign" size={20} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="shoppingcart" type="antdesign" />
              </TouchableOpacity>
            </View> */}
          {/* </View> */}
        </TouchableOpacity>
      {/* </View>
      <View style={Styles.newPhoneSection}> */}
        <TouchableOpacity style={Styles.popularImageContainer}>
          <View>
            <Image
              source={require('../../assets/home1/newest_phone_model_3.png')}
              style={Styles.poularImage}
            />
          </View>
          {/* <View style={Styles.newPhoneFooter}>
            <View style={Styles.featuredProductFooter}> */}
              <Text style={Styles.popularText}>SKU: GPC98801</Text>
            {/* </View>
            <View />
            <View style={{ flex: 2, justifyContent: 'space-around' }}>
              <TouchableOpacity>
                <Icon name="hearto" type="antdesign" size={20} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="shoppingcart" type="antdesign" />
              </TouchableOpacity>
            </View>
          </View> */}
        </TouchableOpacity>
        <TouchableOpacity style={Styles.popularImageContainer}>
          <View>
            <Image
              source={require('../../assets/home1/newest_phone_model_4.png')}
              style={Styles.poularImage}
            />
          </View>
          {/* <View style={Styles.newPhoneFooter}>
            <View style={Styles.featuredProductFooter}> */}
              <Text style={Styles.popularText}>SKU: GPC98801</Text>
            {/* </View>
            <View />
            <View style={{ flex: 2, justifyContent: 'space-around' }}>
              <TouchableOpacity>
                <Icon name="hearto" type="antdesign" size={20} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="shoppingcart" type="antdesign" />
              </TouchableOpacity>
            </View>
          </View> */}
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
};

export default NewPhoneSection;
