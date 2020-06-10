import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { Rating, Icon } from 'react-native-elements';

import Styles from '../Search/Styles';

const ProductItemView = props => {
  const { item, navigation, from } = props;
  const rating = Number(item?.average_rating) || 0;

  return (
    <View style={Styles.itemContainer}>
      <TouchableOpacity
        onPress={() =>
          // from === 'Search' ? props.navigation.navigate('Home', {
          //   screen: 'ProductDetails',
          //   params: { product: item, from: 'Search' },
          // }) :
          navigation.navigate('ProductDetails', { product: item, from: from })
        }
        style={Styles.imageWrapper}>
        {item.images && (
          <Image source={{ uri: item?.images[0]?.src }} style={Styles.image} />
        )}
      </TouchableOpacity>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 8, alignItems: 'flex-start' }}>
          <Text numberOfLines={2}>{item.name}</Text>
          <Text style={Styles.price}>$ {item.price}</Text>
          <Rating readonly startingValue={rating} imageSize={10} />
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
    </View>
  );
};

export default ProductItemView;
