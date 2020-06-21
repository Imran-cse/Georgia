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
import SnackBar from 'react-native-snackbar-component';

import QuantityModal from '../Common/QuantityModal';
import { getCategory } from '../../server/fetch';
import SearchBar from '../Search/SerchBar';
import ProductItemView from '../Products/ProductItemView';
import {
  fetchCartData,
  fetchWishlist,
  updateCart,
  upldateWishlist,
} from '../../constants/constant_functions';
import Styles from './Styles';
import SpinView from '../Common/SpinView';

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
      isLoading: false,
      cart: {},
      wishList: {},
      isModalVisible: false,
      isSnackVisible: false,
    };
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      fetchWishlist(this);
      fetchCartData(this);
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
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
    // this.setState({ isLoading: true });
    const { searchText } = this.state;
    const res = await getCategory(
      `products?search=${searchText}&per_page=${40}&`,
    );
    const data = await Promise.resolve(res.json());
    const count = res.headers.get('X-WP-Total');
    if (data !== null) {
      // console.log('data', data[0])
      this.setState({ showLoading: false });

      this.setState({ data, count, isLoading: false });
    }
  }

  updateState(obj) {
    this.setState(obj);
  }

  handleWishlist(item) {
    let { wishList } = this.state;
    const { id, name, average_rating, price, images } = item;
    wishList[id.toString()] = { name, average_rating, price, images };

    upldateWishlist(wishList, this);
  }

  async handleCart(quantity) {
    const { cart, isModalVisible, item } = this.state;
    const { id, name, average_rating, price, images } = item;
    cart[id.toString()] = { name, average_rating, quantity, price, images };

    await updateCart(cart, this);
    this.setState(
      { item: undefined, isModalVisible: false, isSnackVisible: true },
      () => {
        // alert('Product added to cart');
      },
    );
  }

  async loadMore() {
    const { count, page, searchText, data } = this.state;
    if (count - page * 40 < 0) {
      return;
    }
    this.setState({ isLoading: true });
    const res = await getCategory(
      `products?search=${searchText}&page=${page + 1}&per_page=${40}&`,
    );
    let newData = await Promise.resolve(res.json());
    // let count = res.headers.get('X-WP-Total');
    if (newData !== null) {
      this.setState({ showLoading: false });
      let temp = [];
      temp.push(...data, ...newData);
      this.setState({ data: temp, page: page + 1, isLoading: false }, () =>
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

    const {
      data,
      count,
      searchText,
      isModalVisible,
      showLoading,
      isLoading,
      wishList,
      cart,
      isSnackVisible
    } = this.state;

    return (
      <View style={Styles.container}>
        <QuantityModal
          isModalVisible={this.state.isModalVisible}
          updateState={this.updateState.bind(this)}
          handleCart={this.handleCart.bind(this)}
        />

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
              return (
                <ProductItemView
                  item={item}
                  navigation={navigation}
                  handleWishlist={this.handleWishlist.bind(this)}
                  isWished={wishList.hasOwnProperty(item.id)}
                  updateState={this.updateState.bind(this)}
                />
              );
            }}
          />
          {this.state.isLoading && <SpinView />}
        </View>

        <SnackBar
          visible={isSnackVisible}
          autoHidingTime={3500}
          textMessage="Product added to cart!"
          actionHandler={() => {
            this.setState({ isSnackVisible: false });
          }}
          actionText="OK"
        />
      </View>
    );
  }
}
