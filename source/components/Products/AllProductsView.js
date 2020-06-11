import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import ProductItemView from './ProductItemView';
import { getCategory } from '../../server/fetch';
import QuantityModal from '../../components/Common/QuantityModal';
import Styles from './Style';
import ProductHeader from './ProductHeader';
import SpinView from '../Common/SpinView';
import {
  updateCart,
  upldateWishlist,
  fetchCartData,
  fetchWishlist,
} from '../../constants/constant_functions';

export default class AllProductsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishList: {},
      isModalVisible: false,
      cart: {},
      page: 1,
      isLoading: false,
    };

    this.fetchProducts();
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

  async fetchProducts() {
    // this.setState({isLoading: true})
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
    this.setState({ item: undefined, isModalVisible: false }, () => {
      alert('Product added to cart');
    });
  }

  async loadMore() {
    const { count, page, searchText, data } = this.state;
    if (count - page * 40 < 0) {
      return;
    }
    // console.log(categoryId)
    this.setState({ isLoading: true });
    const { categoryId } = this.props.route.params;
    const res = await getCategory(
      `products?category=${categoryId}&page=${page + 1}&per_page=40&`,
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
    const { data, wishList, isModalVisible } = this.state;
    const { navigation, route } = this.props;

    // const { headText } = route.params.headText;
    // console.log('In all product, navigation:', navigation, 'route', route);

    if (!data || data.length < 1) {
      return (
        <View style={Styles.allProductContainer}>
          <ProductHeader navigation={navigation} />
          <SpinView />
        </View>
      );
    }

    return (
      <View style={Styles.allProductContainer}>
        <QuantityModal
          isModalVisible={this.state.isModalVisible}
          updateState={this.updateState.bind(this)}
          handleCart={this.handleCart.bind(this)}
        />

        <ProductHeader navigation={navigation} from={route.params.from} />
        <Text style={Styles.allProductLabel}>{route.params.headText}</Text>
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
                  from="AllProductsView"
                  handleWishlist={this.handleWishlist.bind(this)}
                  isWished={wishList.hasOwnProperty(item.id)}
                  updateState={this.updateState.bind(this)}
                />
              );
            }}
          />
          {this.state.isLoading && <SpinView />}
        </View>
      </View>
    );
  }
}
