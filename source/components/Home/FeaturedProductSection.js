import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

import { Icon, Rating } from 'react-native-elements';

import Styles from './Styles';

const FeaturedProdcutSection = props => {
  const {
    products,
    navigation,
    featureCatId,
    wishList,
    sectionHeader,
    isFeature,
  } = props;
  const [scrollEnd, setScroll] = useState(false);

  return (
    <View style={{ marginBottom: 20 }}>
      <View style={Styles.sectionHeaderContainer}>
        <Text style={Styles.sectionHeaderText}>{sectionHeader}</Text>
        {scrollEnd && (
          <TouchableOpacity
            onPress={() => {
              if (isFeature) {
                navigation.navigate('AllProductsView', {
                  endpoint: `products?category=${featureCatId}/&per_page=${40}&`,
                  headText: 'Featured Products',
                });
              } else {
                navigation.navigate('NewArrival', {
                  endpoint: `products?per_page=${40}&`,
                  headText: 'New Products',
                  categoryId: 0,
                });
              }
            }}>
            <Text style={Styles.seeProductText}>See all Products</Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={[Styles.featuredProductSectionContainer, { marginRight: 0 }]}>
        <FlatList
          data={products}
          horizontal
          showsHorizontalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          onEndReached={() => setScroll(true)}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('ProductDetails', {
                  product: item,
                  from: 'Home',
                })
              }
              style={Styles.featuredProductItem}>
              <View>
                <Image
                  source={{ uri: item.images[0].src }}
                  style={Styles.featureProductImage}
                />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={Styles.featuredProductFooter}>
                  <Text>SKU: {item.sku}</Text>
                  <Text numberOfLines={4} style={Styles.featuredProductDesText}>
                    {item.name}
                  </Text>
                  <Text style={Styles.currencyText}>$ {item.price}</Text>
                  <Rating
                    imageSize={10}
                    readonly
                    startingValue={Number(item.average_rating)}
                  />
                </View>
                <View style={{ flex: 2, justifyContent: 'space-around' }}>
                  {(wishList && wishList.hasOwnProperty(item.id) && (
                    <TouchableOpacity
                      onPress={() => alert('already added to wishlist!')}>
                      <Icon name="heart" type="antdesign" color="red" />
                    </TouchableOpacity>
                  )) || (
                    <TouchableOpacity
                      onPress={() => props.handleWishlist(item)}>
                      <Icon name="hearto" type="antdesign" />
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity
                    onPress={() => {
                      props.updateState({ isModalVisible: true, item: item });
                    }}>
                    <Icon name="shoppingcart" type="antdesign" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default FeaturedProdcutSection;
