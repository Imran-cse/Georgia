import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

import MapView from 'react-native-maps';

const {width, height } = Dimensions.get('window');

export default class LocationMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const region = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };

    return (
      <View style={{width: width, height: height}}>
        <Text>MapView</Text>
        <MapView
          style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
          followsUserLocation={true}
          // mapPadding={{top: 10, bottom: 0, left: 10, right: 10}}
        />
      </View>
    );
  }
}
