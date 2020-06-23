import React, { Component } from 'react';
import { FlatList, View, Text, TouchableOpacity, Image } from 'react-native';

import Header from '../Categories/Header';
import SpinView from '../Common/SpinView';
import Styles from '../Categories/Styles';
import { getCategory } from '../../server/fetch';
import { moderateScale } from '../../constants/constant_functions';

export default class AllBrands extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.fetchBrands();
  }

  async fetchBrands() {
    const res = await getCategory(`brands?`);
    const data = await Promise.resolve(res.json());
    const count = res.headers.get('X-WP-Total');
    if (data !== null) {
      // console.log('data', data[0]);
      this.setState({ showLoading: false });

      await this.setState({ data, count });
    }
  }

  render() {
    const { data } = this.state;
    const { navigation } = this.props;

    let brandList = [];
    if (!!data && data.length > 0) {
      for (let index = 0; index < data.length; index++) {
        if (data[index].parent == 0) {
          brandList.push(data[index]);
        }
      }
    }

    if (!data || data.length < 1) {
      return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
          <Header navigation={navigation} headerText="Brands" />
          <SpinView />
        </View>
      );
    }

    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Header navigation={navigation} headerText="Brands" />

        <View style={{ flex: 1, paddingTop: 10 }}>
          <FlatList
            data={brandList}
            numColumns={2}
            contentContainerStyle={{ paddingHorizontal: moderateScale(20) }}
            renderItem={({ item }) => {
              if (item.parent !== 0) {
                return;
              }
              return (
                <TouchableOpacity
                  // onPress={() =>
                  //   navigation.navigate('AllProductsView', {
                  //     endpoint: `products?category=${item.id}&per_page=${40}&`,
                  //     headText: item.name,
                  //     categoryId: item.id,
                  //   })
                  // }
                  style={Styles.itemContainer}>
                  <View style={Styles.imageContainer}>
                    {item.brand_image && (
                      <Image
                        source={{ uri: item.brand_image[0] }}
                        style={Styles.imageStyle}
                      />
                    )}
                  </View>
                  <Text style={Styles.categoryText}>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  }
}
