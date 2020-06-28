import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import RNGooglePlaces from 'react-native-google-places';
import { moderateScale } from '../../constants/constant_functions';

const { width, height } = Dimensions.get('window');

export default class LocationMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
      results: [],
    };

    this.getCurrentPlace();
  }

  onOpenAutocompletePress = () => {
    RNGooglePlaces.openAutocompleteModal()
      .then(place => {
        console.log(place);
        this.setState({
          results: [place],
          x: place.location,
        });
      })
      .catch(error => console.log(error.message));
  };

  getCurrentPlace = () => {
    RNGooglePlaces.getCurrentPlace()
      .then(results => {
        this.setState({ x: results[0].location, results: results });
        console.log(results);
      })
      .catch(error => console.log(error.message));
  };

  getPrediction = () => {
    RNGooglePlaces.getAutocompletePredictions()
      .then(results => {
        console.log(results);
        this.setState({ results: results });
      })
      .catch(error => console.log(error.message));
  };

  onSelectSuggestion(placeID) {
    console.log('place id', placeID);
    // getPlaceByID call here
    RNGooglePlaces.lookUpPlaceByID(placeID)
      .then(results => {
        console.log(results);
        this.setState({
          results: [results],
        });
      })
      .catch(error => console.log(error.message));
  }

  getPlaceDetail(placeID) {
    console.log('place id', placeID);
    // getPlaceByID call here
    RNGooglePlaces.lookUpPlaceByID(placeID)
      .then(results => {
        console.log(results);
        this.setState({
          results: [results],
        });
        this.props.saveMapAddress(results);
      })
      .catch(error => console.log(error.message));
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    const { results } = this.state;
    console.log(this.state.x);

    return (
      <View style={{ width: width, height: height }}>
        <MapView
          style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          region={{
            ...this.state.x,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          zoomEnabled={true}
          minZoomLevel={15}
          zoomControlEnabled
          showsUserLocation={true}
          followsUserLocation={true}
          onPoiClick={e => {
            this.setState({ x: e.nativeEvent.coordinate });
            console.log(e.nativeEvent.placeId);
            this.onSelectSuggestion(e.nativeEvent.placeId);
          }}
          // onUserLocationChange={e => this.setState({x: e.nativeEvent.coordinate})}
          // onPress={e => {
          //   this.setState({ x: e.nativeEvent.coordinate });
          // }}
          // mapPadding={{top: 10, bottom: 0, left: 10, right: 10}}
        >
          <Marker
            draggable
            coordinate={this.state.x}
            onDragEnd={e => {
              console.log(e.nativeEvent.position);
              this.setState({ x: e.nativeEvent.coordinate });
            }}
          />
        </MapView>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            position: 'absolute',
            top: 20,
            width: width - 40,
            backgroundColor: 'white',
            marginLeft: 20,
            padding: 10,
          }}
          onPress={() => this.onOpenAutocompletePress()}>
          <Text>Search Place</Text>
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            bottom: 2,
            backgroundColor: 'white',
            width: width,
            maxHeight: height / 3,
            padding: moderateScale(20),
          }}>
          <FlatList
            data={results}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  height: 1,
                  backgroundColor: 'grey',
                  marginVertical: moderateScale(10),
                  opacity: 0.5
                }}
              />
            )}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  if (item.hasOwnProperty('addressComponents')) {
                    this.props.saveMapAddress(item);
                  } else {
                    this.getPlaceDetail(item.placeID);
                  }
                }}>
                <Text style={{fontSize: 17}}>{item.name}</Text>
                <Text style={{fontSize: 14, color: 'grey'}}>{item.address}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }
}
