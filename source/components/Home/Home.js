import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import { SearchBar } from 'react-native-elements';
import { SliderBox } from 'react-native-image-slider-box';

import Header from './Header';
import CategorySection from './CategorySection';
import FeaturedProductSection from './FeaturedProductSection';
import PopularPhoneSection from './PopularPhoneSection';
import NewPhoneSection from './NewPhoneSection';

import { base_url, config } from '../../server/fetch';
import Styles from './Styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        // require('../../assets/home1/slider.png'),
        // 'https://source.unsplash.com/1024x768/?nature',
        // 'https://source.unsplash.com/1024x768/?water',
        // 'https://source.unsplash.com/1024x768/?girl',
        // 'https://source.unsplash.com/1024x768/?tree',
      ],
    };
  }

  componentDidMount() {
    fetch(base_url, config)
      .then(res => res.json())
      .then(data => {
        let tempImages = this.state.images

        data.map((item, index) => {
          if (item.slug.includes('banner')) {
            console.log(item.guid.rendered);
            tempImages.push(item.guid.rendered);
          }
        });
        console.log('temp image', tempImages)
        this.setState({images: tempImages})
      })
      .catch(err => console.log(err));
  }

  render() {
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

          <FeaturedProductSection />

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
