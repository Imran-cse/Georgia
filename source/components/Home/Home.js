import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

// import { SearchBar } from 'react-native-elements';
import { SliderBox } from 'react-native-image-slider-box';

import Header from './Header';
import CategorySection from './CategorySection';
import FeaturedProductSection from './FeaturedProductSection';
import PopularPhoneSection from './PopularPhoneSection';
import NewPhoneSection from './NewPhoneSection';
import SearchBar from '../Search/SerchBar';

import { base_url, config, base_url2, getCategory } from '../../server/fetch';
import Styles from './Styles';
import { Icon } from 'react-native-elements';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      featuredProducts: [],
      searchText: undefined,
      showLoading: false,
    };
  }

  componentDidMount() {
    this.fetchBanner();
    this.featuredProducts();
  }

  async featuredProducts() {
    const result = await getCategory(
      'products/categories?search=featured-products&',
    );
    const response = await Promise.resolve(result.json());
    console.log('respones', JSON.stringify(response));
    const head1 = result.headers.get('X-WP-Total');
    console.log('head1: ', head1);
    const catId = response[0].id;
    const result2 = await getCategory(`products?category=${catId}&`);
    const data = await Promise.resolve(result2.json());
    this.setState({ featuredProducts: data, featureCatId: catId });
    // console.log(JSON.stringify(data));
  }

  async fetchBanner() {
    await fetch(base_url, config)
      .then(res => res.json())
      .then(data => {
        let tempImages = this.state.images;

        data.map((item, index) => {
          if (item.slug.includes('banner')) {
            // console.log(item.guid.rendered);
            tempImages.push(item.guid.rendered);
          }
        });
        // console.log('temp image', tempImages);
        this.setState({ images: tempImages });
      })
      .catch(err => console.log(err));
  }

  updateState(obj) {
    this.setState(obj);
  }

  async handleSearch() {
    const { searchText } = this.state;
    const res = await getCategory(`products?search=${searchText}&`);
    const data = await Promise.resolve(res.json());
    const count = res.headers.get('X-WP-Total');
    if (data !== null) {
      // console.log('data', data[0])
      this.setState({ showLoading: false });
      this.props.navigation.navigate('Search', {
        data: data,
        count: count,
        searchText: searchText,
        fromHome: true,
      });
    }
  }

  render() {
    const { featuredProducts, searchText, featureCatId } = this.state;

    return (
      <View style={Styles.container}>
        <Header />

        <ScrollView>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Search')}
            style={{ marginHorizontal: 20, marginVertical: 10 }}>
            <View style={Styles.searchView}>
              <Icon name="search" type="fontisto" />
              <Text style={Styles.searchText}>Search...</Text>
            </View>
          </TouchableOpacity>

          <SliderBox images={this.state.images} />

          <CategorySection />
          <View style={Styles.divider} />

          {featuredProducts.length > 0 && (
            <FeaturedProductSection
              products={featuredProducts}
              navigation={this.props.navigation}
              featureCatId={featureCatId}
            />
          )}

          <View style={Styles.bannerContainer}>
            <Image
              source={require('../../assets/home1/mobile_accesories_banner.png')}
              style={Styles.banner}
            />
          </View>

          <PopularPhoneSection />

          <NewPhoneSection />
        </ScrollView>
      </View>
    );
  }
}
