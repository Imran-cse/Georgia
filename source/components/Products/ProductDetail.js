import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import { Button, Rating, Icon } from 'react-native-elements';
import { Picker } from 'native-base';

import ImageView from './ImageView';
import HTML from 'react-native-render-html';

import Styles from './Style';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: 0,
      selectedValue: 1,
    };
  }

  updateState(obj) {
    this.setState(obj);
  }

  render() {
    const { route, navigation } = this.props;
    console.log(route);
    const { product } = route.params;

    const { selectedImage, selectedValue } = this.state;

    let pickerList = [];
    for (let index = 0; index < 50; index++) {
      pickerList.push(
        <Picker.Item label={`${index}`} key={index} value={index} />,
      );
    }

    const rating = Number(product.average_rating);

    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={Styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" type="antdesign" color='red' />
          </TouchableOpacity>
          <View style={Styles.headerView}>
            <TouchableOpacity style={{ paddingRight: 15 }}>
              <Icon name="hearto" type="antdesign" size={20} color='red' />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="menu" type="feather" color='red' />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          <View style={[Styles.productContainer, {marginTop: 0}]}>
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
              <Button title="BUY NOW" buttonStyle={Styles.buyBotton} />
              <Button
                title="ADD CART"
                buttonStyle={Styles.cartButton}
                titleStyle={{ color: 'black' }}
                // onPress={() => this.setState({ count: 1 })}
              />

              <View style={Styles.pickerContainer}>
                <Picker
                  mode="dropdown"
                  selectedValue={selectedValue}
                  style={Styles.pickerStyle}
                  onValueChange={value =>
                    this.setState({ selectedValue: value })
                  }>
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
