import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';

import { Button, Rating, Icon } from 'react-native-elements';
import { Picker } from 'native-base';
import HTML from 'react-native-render-html';

import ImageView from './ImageView';
import ProductHeader from './ProductHeader';

import Styles from './Style';
import {
  fetchCartData,
  updateCart,
  getUserAsync,
  updateBrowsingHistory,
  fetchBrowsingHistory,
} from '../../constants/constant_functions';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: 0,
      selectedValue: 1,
      quantity: 1,
      browsingHistory: {},
    };

    this.fetchCartData();
  }

  async fetchCartData() {
    await fetchCartData(this);
    await fetchBrowsingHistory(this);
    this.hadleBrowseData();
    const user = await getUserAsync();
    if (user) {
      this.setState({ user: JSON.parse(user) }, () => console.log('hello'));
    }
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      fetchCartData(this);
      this.fetchCartData();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  async hadleBrowseData() {
    const { route } = this.props;
    const { product } = route.params;
    const { browsingHistory } = this.state;

    const { id } = product;
    browsingHistory[id.toString()] = product;

    await updateBrowsingHistory(browsingHistory, this);
  }

  async handleCart(product) {
    const { cart, quantity } = this.state;
    const { id, name, average_rating, price, images } = product;
    cart[id.toString()] = { name, average_rating, quantity, price, images };

    await updateCart(cart, this);
    ToastAndroid.show('Product added to cart!', ToastAndroid.SHORT);
  }

  async handleBuy(product) {
    const { cart, quantity } = this.state;
    const { id, name, average_rating, price, images } = product;
    cart[id.toString()] = { name, average_rating, quantity, price, images };

    await updateCart(cart, this);
    this.props.navigation.navigate('Cart');
  }

  updateState(obj) {
    this.setState(obj);
  }

  render() {
    const { route, navigation } = this.props;
    // console.log(route);
    const { product, from } = route.params;

    const { selectedImage, selectedValue, quantity } = this.state;

    let pickerList = [];
    for (let index = 0; index < 50; index++) {
      pickerList.push(
        <Picker.Item label={`${index}`} key={index} value={index} />,
      );
    }

    const rating = Number(product.average_rating);

    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ProductHeader navigation={navigation} from={route.params.from} />

        <ScrollView>
          <View style={[Styles.productContainer, { marginTop: 0 }]}>
            <ImageView
              images={product.images}
              selectedImage={selectedImage}
              updateState={this.updateState.bind(this)}
            />

            <Text style={Styles.descriptionText}>{product.name}</Text>

            <View style={Styles.priceView}>
              <Text style={Styles.priceText}>
                $ {product.sell_price || product.price}
              </Text>
              {!!product.sell_price && <Text>${product.price}</Text>}
            </View>

            <View style={{ alignItems: 'flex-start', marginTop: 5 }}>
              <Rating
                imageSize={15}
                ratingCount={5}
                readonly
                startingValue={rating}
              />
            </View>

            <View style={Styles.priceView}>
              <Text style={{ fontSize: 16 }}>Availability </Text>
              <Text style={Styles.stockText}>{product.stock_status}</Text>
            </View>

            <View style={Styles.buttonContainer}>
              <Button
                onPress={() => this.handleBuy(product)}
                title="BUY NOW"
                buttonStyle={Styles.buyBotton}
              />
              <Button
                onPress={() => this.handleCart(product)}
                title="ADD TO CART"
                // buttonStyle={[Styles.cartButton, { paddingHorizontal: 10 }]}
                buttonStyle={[Styles.buyBotton, { paddingHorizontal: 10 }]}
                // titleStyle={{ color: 'black' }}
              />

              <View style={Styles.pickerContainer}>
                <Picker
                  mode="dropdown"
                  selectedValue={quantity}
                  style={Styles.pickerStyle}
                  onValueChange={quantity => this.setState({ quantity })}>
                  {pickerList}
                </Picker>
              </View>
            </View>

            {!!product.short_description && (
              <View>
                {/* <Text>Description</Text> */}
                <HTML html={product.short_description} />
              </View>
            )}

            {!!product.reviews && (
              <View>
                <Text>Reviews</Text>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}
