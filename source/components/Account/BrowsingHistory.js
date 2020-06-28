import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import Header from '../Common/Header';
import ProductItemView from '../Products/ProductItemView';
import {
  fetchBrowsingHistory,
  fetchWishlist,
  upldateWishlist,
} from '../../constants/constant_functions';

import Styles from '../Products/Style';

export default class BrowsingHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      browsingHistory: {},
      wishList: {}
    };

    this.fetchHistory();
  }

  async fetchHistory() {
    await fetchBrowsingHistory(this);
    await fetchWishlist(this);
  }

  handleWishlist(item) {
    let { wishList } = this.state;
    const { id, name, average_rating, price, images } = item;
    wishList[id.toString()] = { name, average_rating, price, images };

    upldateWishlist(wishList, this);
  }

  updateState(obj) {
    this.setState(obj);
  }

  render() {
    const { browsingHistory, wishList } = this.state;
    console.log('browsingHistory', browsingHistory);

    let data = [];
    for (const key in browsingHistory) {
      if (browsingHistory.hasOwnProperty(key)) {
        data.push({ ...browsingHistory[key], id: key });
      }
    }

    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Header headerText='Browsing History' navigation={this.props.navigation} />

        <View style={{ flex: 1 }}>
          <FlatList
            numColumns={2}
            contentContainerStyle={Styles.resultContainer}
            data={data}
            // onEndReachedThreshold={0.8}
            // onEndReached={() => this.loadMore()}
            renderItem={({ item }) => {
              return (
                <ProductItemView
                  item={item}
                  navigation={this.props.navigation}
                  handleWishlist={this.handleWishlist.bind(this)}
                  isWished={wishList.hasOwnProperty(item.id)}
                  updateState={this.updateState.bind(this)}
                />
              );
            }}
          />
        </View>
      </View>
    );
  }
}
