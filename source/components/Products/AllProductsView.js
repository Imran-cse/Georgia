import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import ProductItemView from './ProductItemView';
import { getCategory } from '../../server/fetch';

import Styles from './Style';
import ProductHeader from './ProductHeader';

export default class AllProductsView extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.fetchProducts();
  }

  async fetchProducts() {
    const { route } = this.props;
    const endpoint = route.params?.endpoint;
    const res = await getCategory(endpoint);
    const data = await Promise.resolve(res.json());
    const count = res.headers.get('X-WP-Total');
    if (data !== null) {
      // console.log('data', data[0])
      this.setState({ showLoading: false });

      await this.setState({ data, count });
    }
  }

  render() {
    const { data } = this.state;
    const { navigation, route } = this.props;

    // const { headText } = route.params.headText;
    console.log('In all product, navigation:', navigation, 'route', route)

    return (
      <View style={Styles.allProductContainer}>
        <ProductHeader navigation={navigation} from={route.params.from} />
        <Text style={Styles.allProductLabel}>{route.params.headText}</Text>
        <View style={{ flex: 1 }}>
          <FlatList
            numColumns={2}
            contentContainerStyle={Styles.resultContainer}
            data={data}
            onEndReachedThreshold={0.8}
            // onEndReached={() => this.loadMore()}
            renderItem={({ item }) => {
              return (
                <ProductItemView
                  item={item}
                  navigation={navigation}
                  from="AllProductsView"
                />
              );
            }}
          />
        </View>
      </View>
    );
  }
}
