import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';

import { categories, colors } from '../../constants/constant_strings';
import Header from './Header';
import { getCategory } from '../../server/fetch';
import SpinView from '../Common/SpinView';

import Styles from './Styles';
import { moderateScale } from '../../constants/constant_functions';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

    this.fetchCategories();
  }

  async fetchCategories() {
    const res = await getCategory(`products/categories?parent=0&per_page=100&`);
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

    if (!data || data.length < 1) {
      return (
        <View style={{backgroundColor:'white', flex: 1}}>
          <Header />
          <SpinView />
        </View>
      );
    }

    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Header />

        <View style={{ flex: 1, paddingTop: 10 }}>
          <FlatList
            data={data}
            numColumns={2}
            contentContainerStyle={{ paddingHorizontal: moderateScale(20) }}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('AllProductsView', {
                    endpoint: `products?category=${item.id}&per_page=${40}&`,
                    headText: item.name,
                    from: 'Categories',
                  })
                }
                style={Styles.itemContainer}>
                <View style={Styles.imageContainer}>
                  {item.image && (
                    <Image
                      source={{ uri: item.image.src }}
                      style={Styles.imageStyle}
                    />
                  )}
                </View>
                <Text style={Styles.categoryText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }
}
