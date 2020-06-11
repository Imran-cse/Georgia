import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';

import { Icon, Button } from 'react-native-elements';

import QuantityModal from '../Common/QuantityModal';
import Header from '../Common/Header';
import Styles from './Styles';
import {
  fetchWishlist,
  upldateWishlist,
  updateCart,
  fetchCartData
} from '../../constants/constant_functions';

export default class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishList: {},
      cart: {},
      isModalVisible: false,
    };

    this.fetchWishlist();
  }

  async fetchWishlist() {
    await fetchWishlist(this);
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      fetchWishlist(this);
      fetchCartData(this)
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  async removeFromWish(id) {
    let { wishList } = this.state;
    delete wishList[id];
    await upldateWishlist(wishList, this);
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

  updateState(obj) {
    this.setState(obj)
  }

  render() {
    const { wishList } = this.state;

    let arrWishlist = [];
    for (const key in wishList) {
      if (wishList.hasOwnProperty(key)) {
        arrWishlist.push({ ...wishList[key], id: key });
      }
    }

    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <QuantityModal
          isModalVisible={this.state.isModalVisible}
          updateState={this.updateState.bind(this)}
          handleCart={this.handleCart.bind(this)}
        />

        <Header headerText="My Wishlist" navigation={this.props.navigation} />

        <View style={Styles.horizontalLine} />
        <Text style={Styles.quantityText}>{arrWishlist.length} Items</Text>
        <View style={Styles.horizontalLine} />

        <View style={{ flex: 1 }}>
          <FlatList
            data={arrWishlist}
            // contentContainerStyle={}
            renderItem={({ item }) => (
              <View style={Styles.itemContainer}>
                <View style={Styles.iconContainer}>
                  <Icon
                    name="minus-circle-outline"
                    type="material-community"
                    size={35}
                    color="grey"
                    onPress={() => this.removeFromWish(item.id)}
                  />
                </View>
                <View style={Styles.imageContainer}>
                  <Image
                    source={{ uri: item.images[0].src }}
                    style={Styles.image}
                  />
                </View>
                <View style={Styles.desContainer}>
                  <Text numberOfLines={3} style={Styles.desText}>
                    {item.name}
                  </Text>
                  <Text style={Styles.priceText}>$ {item.price}</Text>
                  <Button
                    title="ADD TO CART"
                    onPress={() =>
                      this.setState({ isModalVisible: true, item: item })
                    }
                    buttonStyle={Styles.buttonStyle}
                    titleStyle={{ fontSize: 13 }}
                  />
                </View>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}
