import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import SearchBar from '../Search/SerchBar';

import Styles from './Styles';
import { Rating } from 'react-native-elements';

export default class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { route } = this.props;
    console.log(route);
    const { data, count } = !!route.params && route.params;

    return (
      <View style={Styles.container}>
        <Text style={Styles.searchHeadText}>Search</Text>
        <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
          <SearchBar navigation={this.props.navigation} />
        </View>
        {!!count && (
          <Text style={Styles.countText}>We found {count} products</Text>
        )}

        <View style={{flex: 1}}>
          <FlatList
            numColumns={2}
            contentContainerStyle={Styles.resultContainer}
            data={data}
            renderItem={({ item }) => {
              return (
                <View style={Styles.itemContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('Home', {
                        screen: 'ProductDetails',
                        params: { product: item },
                      })
                    }
                    style={Styles.imageWrapper}>
                    <Image
                      source={{ uri: item.images[0].src }}
                      style={Styles.image}
                    />
                  </TouchableOpacity>
                  <View style={{ alignItems: 'flex-start' }}>
                    <Text numberOfLines={2}>{item.name}</Text>
                    <Text style={Styles.price}>$ {item.price}</Text>
                    <Rating
                      readonly
                      startingValue={Number(item.average_rating)}
                      imageSize={10}
                    />
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
}
