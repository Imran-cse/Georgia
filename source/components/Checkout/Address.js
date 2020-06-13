import React, { Component } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';

import { Form, Item, Input, Label, Picker } from 'native-base';
import { Button } from 'react-native-elements';

import ChekcoutSteps from './CheckoutSteps';
import Header from '../Common/Header';
import Styles from './Styles';

export default class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: undefined,
      lastName: undefined,
      phoneNumber: undefined,
      email: undefined,
      country: undefined,
      state: undefined,
      city: undefined,
      street: undefined,
      zipCode: undefined,
    };
  }

  render() {
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      country,
      state,
      city,
      street,
      zipCode,
    } = this.state;

    return (
      <View style={Styles.container}>
        <Header headerText="Checkout" navigation={this.props.navigation} />

        <ChekcoutSteps step={1} />

        <View style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
            <Form>
              <Item floatingLabel style={Styles.formItem}>
                <Label>First Name</Label>
                <Input
                  value={firstName}
                  onChangeText={firstName => this.setState({ firstName })}
                />
              </Item>
              <Item floatingLabel style={Styles.formItem}>
                <Label>Last Name</Label>
                <Input
                  value={lastName}
                  onChangeText={lastName => this.setState({ lastName })}
                />
              </Item>
              <Item floatingLabel style={Styles.formItem}>
                <Label>Phone Number</Label>
                <Input
                  value={phoneNumber}
                  onChangeText={phoneNumber => this.setState({ phoneNumber })}
                />
              </Item>
              <Item floatingLabel style={Styles.formItem}>
                <Label>Email</Label>
                <Input
                  value={email}
                  onChangeText={email => this.setState({ email })}
                />
              </Item>
            </Form>

            <View>
              <TouchableOpacity style={Styles.searchView}>
                <View style={{ paddingRight: 10 }}>
                  <Image
                    source={{
                      uri:
                        'https://cdn2.iconfinder.com/data/icons/seo-and-web-two-color-icons/512/30-512.png',
                    }}
                    style={{ width: 25, height: 25 }}
                  />
                </View>
                <Text style={Styles.searchText}>Searching Address</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.searchView}>
                <View style={{ paddingRight: 10 }}>
                  <Image
                    source={{
                      uri:
                        'https://cdn1.iconfinder.com/data/icons/hotel-and-restaurant-volume-5-1/48/235-512.png',
                    }}
                    style={{ width: 25, height: 25 }}
                  />
                </View>
                <Text style={Styles.searchText}>Select Address</Text>
              </TouchableOpacity>
            </View>

            <View style={Styles.pickerContainer}>
              <Text>Country</Text>
              <View style={Styles.pickerView}>
                <Picker>
                  <Picker.Item label="Select Country" />
                </Picker>
              </View>
            </View>

            <View style={Styles.pickerContainer}>
              <Text>Select/Province</Text>
              <View style={Styles.pickerView}>
                <Picker>
                  <Picker.Item label="Select State" />
                </Picker>
              </View>
            </View>

            <Form>
              <Item floatingLabel style={Styles.formItem}>
                <Label>City</Label>
                <Input
                  value={city}
                  onChangeText={city => this.setState({ city })}
                />
              </Item>
              <Item floatingLabel style={Styles.formItem}>
                <Label>Street Name</Label>
                <Input
                  value={street}
                  onChangeText={street => this.setState({ street })}
                />
              </Item>
              <Item floatingLabel style={Styles.formItem}>
                <Label>Zip-code</Label>
                <Input
                  value={zipCode}
                  onChangeText={zipCode => this.setState({ zipCode })}
                />
              </Item>
            </Form>

            <View style={Styles.buttonContainer}>
              <Button
                title="SAVE ADDRESS"
                titleStyle={{ color: 'black' }}
                buttonStyle={Styles.saveButton}
              />

              <Button
                onPress={() => this.props.navigation.navigate('Shipping')}
                title="CONTINUE TO SHIPPING"
                buttonStyle={Styles.continueButton}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
