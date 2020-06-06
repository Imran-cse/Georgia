import React from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';

import { Icon, Rating } from 'react-native-elements';

import Styles from './Styles';

const FeaturedProdcutSection = props => {
  return (
    <View style={{ marginBottom: 20 }}>
      <View style={Styles.sectionHeaderContainer}>
        <Text style={Styles.sectionHeaderText}>Featured Products</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={Styles.featuredProductSectionContainer}>
          <TouchableOpacity style={Styles.featuredProductItem}>
            <View>
              <Image
                source={require('../../assets/home1/featured_product_1.png')}
                style={Styles.featureProductImage}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={Styles.featuredProductFooter}>
                <Text>SKU: GPC5663</Text>
                <Text style={Styles.featuredProductDesText}>
                  Black-E3 Metal Stereo Bass 3.5mm Wired Earphone With M
                </Text>
                <Text style={Styles.currencyText}>$ 4.49</Text>
                <Rating imageSize={10} readonly startingValue={3.5} />
              </View>
              <View style={{ flex: 2, justifyContent: 'space-around' }}>
                <TouchableOpacity>
                  <Icon name="hearto" type="antdesign" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon name="shoppingcart" type="antdesign" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.featuredProductItem}>
            <View>
              <Image
                source={require('../../assets/home1/featured_product_2.png')}
                style={Styles.featureProductImage}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={Styles.featuredProductFooter}>
                <Text>SKU: GPC98801</Text>
                <Text style={Styles.featuredProductDesText}>
                  Blue-Universal (Under 6 inch) Waterproof For iPhone 7 6
                </Text>
                <Text style={Styles.currencyText}>$ 3.99</Text>
                <Rating imageSize={10} readonly startingValue={3} />
              </View>
              <View />
              <View style={{ flex: 2, justifyContent: 'space-around' }}>
                <TouchableOpacity>
                  <Icon name="hearto" type="antdesign" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon name="shoppingcart" type="antdesign" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.featuredProductItem}>
            <View>
              <Image
                source={require('../../assets/home1/featured_product_3.png')}
                style={Styles.featureProductImage}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={Styles.featuredProductFooter}>
                <Text>SKU: GPC98801</Text>
                <Text style={Styles.featuredProductDesText}>
                  Blue-Universal (Under 6 inch) Waterproof For iPhone 7 6
                </Text>
                <Text style={Styles.currencyText}>$ 3.99</Text>
                <Rating imageSize={10} readonly startingValue={3} />
              </View>
              <View />
              <View style={{ flex: 2, justifyContent: 'space-around' }}>
                <TouchableOpacity>
                  <Icon name="hearto" type="antdesign" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon name="shoppingcart" type="antdesign" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default FeaturedProdcutSection;
