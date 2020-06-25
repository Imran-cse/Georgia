import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import { Icon } from 'react-native-elements';
import { moderateScale } from '../../constants/constant_functions';

import Styles from './Styles';

const SavedAddress = props => {
  const { savedAddresses } = props;

  console.log(savedAddresses);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => props.updateState({ showSavedAddress: false })}
          style={{ padding: moderateScale(20) }}>
          <Icon name="ios-arrow-back" type="ionicon" color="red" size={25} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: moderateScale(18),
            paddingLeft: moderateScale(30),
            fontWeight: 'bold',
            color: 'red',
          }}>
          Select Address
        </Text>
      </View>

      <FlatList
        ItemSeparatorComponent={() => (
          <View style={Styles.addressSeparator} />
        )}
        data={savedAddresses}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => props.selectAddress(index)}
              key={index}
              style={Styles.rowStyle}>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Icon name="home" type="entypo" />
              </View>
              <View style={{ flex: 8 }}>
                <View style={{ flexDirection: 'row' }}>
                  <Text>Street Name: </Text>
                  <Text>{item.street}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text>City: </Text>
                  <Text>{item.city}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text>State/Province: </Text>
                  <Text>{item.state}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text>Country: </Text>
                  <Text>{item.country}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text>Zip-code: </Text>
                  <Text>{item.zipCode}</Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => props.removeAddress(index)}
                style={{ flex: 1, justifyContent: 'center' }}>
                <Icon name="delete" type="material-community" />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default SavedAddress;
