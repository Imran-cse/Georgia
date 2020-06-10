import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { Rating } from 'react-native-elements';

import { getCategory } from '../../server/fetch';
import SearchBar from '../Search/SerchBar';
import ProductItemView from '../Products/ProductItemView';

import Styles from './Styles';

export default class Search extends Component {
  constructor(props) {
    super(props);
    const { route } = this.props;
    const data = route.params?.data;
    const searchText = route.params?.searchText;
    const count = route.params?.count;
    this.state = {
      searchText: searchText,
      showLoading: false,
      data: data || [],
      count: count,
      page: 1,
    };
  }

  async updateData() {
    const { route } = this.props;
    const { data, count, searchText } = route.params;
    await this.setState({ data, count, searchText });
  }

  updateState(obj) {
    this.setState(obj);
  }

  async handleSearch() {
    console.log('came in handleSerch');

    const { searchText } = this.state;
    const res = await getCategory(
      `products?search=${searchText}&per_page=${40}&`,
    );
    const data = await Promise.resolve(res.json());
    const count = res.headers.get('X-WP-Total');
    if (data !== null) {
      // console.log('data', data[0])
      this.setState({ showLoading: false });

      this.setState({ data, count });
    }
  }

  async loadMore() {
    const { count, page, searchText, data } = this.state;
    if (count - page * 40 < 0) {
      return;
    }
    const res = await getCategory(
      `products?search=${searchText}&page=${page + 1}&per_page=${40}&`,
    );
    let newData = await Promise.resolve(res.json());
    // let count = res.headers.get('X-WP-Total');
    if (newData !== null) {
      this.setState({ showLoading: false });
      let temp = [];
      temp.push(...data, ...newData);
      this.setState({ data: temp, page: page + 1 }, () =>
        console.log(this.state.data.length),
      );
    }
  }

  render() {
    const { route, navigation } = this.props;
    console.log(route, navigation.isFocused());

    // if (navigation.isFocused() && route.params?.fromHome) {
    //   this.updateData();
    // }

    const { data, count, searchText, showLoading } = this.state;

    return (
      <View style={Styles.container}>
        <Text style={Styles.searchHeadText}>Search</Text>
        <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
          <SearchBar
            searchText={searchText}
            showLoading={showLoading}
            updateState={this.updateState.bind(this)}
            handleSearch={this.handleSearch.bind(this)}
          />
        </View>
        {!!count && (
          <Text style={Styles.countText}>We found {count} products</Text>
        )}

        <View style={{ flex: 1 }}>
          <FlatList
            numColumns={2}
            contentContainerStyle={Styles.resultContainer}
            data={data}
            onEndReachedThreshold={0.8}
            onEndReached={() => this.loadMore()}
            renderItem={({ item }) => {
              return <ProductItemView item={item} navigation={navigation} from='Search' />;
            }}
          />
        </View>
      </View>
    );
  }
}
