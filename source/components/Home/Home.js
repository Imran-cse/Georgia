import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import { SearchBar } from 'react-native-elements';
import { SliderBox } from 'react-native-image-slider-box';

import Header from './Header';
import CategorySection from './CategorySection';
import FeaturedProductSection from './FeaturedProductSection';
import PopularPhoneSection from './PopularPhoneSection';
import NewPhoneSection from './NewPhoneSection';

import { base_url, config, base_url2, getCategory } from '../../server/fetch';
import Styles from './Styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      featuredProducts: [],
    };
  }

  componentDidMount() {
    this.fetchBanner();
    this.featuredProducts();
  }

  async featuredProducts() {
    // await fetch(base_url2, config)
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data[0].id);
    //   })
    //   .catch(err => console.log(err));
    const response = await getCategory(
      'products/categories?search=featured-products&',
    );
    const catId = response[0].id;
    const data = await getCategory(`products?category=${catId}&`);
    this.setState({ featuredProducts: data });
    console.log(JSON.stringify(data));
  }

  async fetchBanner() {
    await fetch(base_url, config)
      .then(res => res.json())
      .then(data => {
        let tempImages = this.state.images;

        data.map((item, index) => {
          if (item.slug.includes('banner')) {
            console.log(item.guid.rendered);
            tempImages.push(item.guid.rendered);
          }
        });
        console.log('temp image', tempImages);
        this.setState({ images: tempImages });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { featuredProducts } = this.state;

    return (
      <View style={Styles.container}>
        <Header />

        <ScrollView>
          <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
            <View style={Styles.serchWrapper}>
              <SearchBar
                placeholder="Search"
                lightTheme={true}
                inputContainerStyle={{
                  backgroundColor: 'white',
                  overflow: 'hidden',
                  height: 35,
                }}
                containerStyle={{
                  backgroundColor: 'white',
                  paddingTop: 2,
                  height: 35,
                  borderBottomWidth: 0,
                  borderTopWidth: 0,
                  overflow: 'hidden',
                }}
                searchIcon={{ size: 25 }}
              />
            </View>
          </View>

          <SliderBox images={this.state.images} />

          <CategorySection />
          <View style={Styles.divider} />

          {featuredProducts.length > 0 && (
            <FeaturedProductSection
              products={featuredProducts}
              navigation={this.props.navigation}
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
