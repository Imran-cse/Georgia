import React, { Component } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native';

import { Form, Item, Input, Label, Picker } from 'native-base';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

import ChekcoutSteps from './CheckoutSteps';
import Header from '../Common/Header';
import Styles from './Styles';
import { coutriesJson } from '../../constants/countries';
import { fetchAddress } from '../../constants/constant_functions';

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
      address: {},
    };

    this.fetchAddress();
  }

  async fetchAddress() {
    await fetchAddress(this);

    // const {
    //   firstName,
    //   lastName,
    //   phoneNumber,
    //   email,
    //   country,
    //   state,
    //   city,
    //   street,
    //   zipCode,
    // } = this.state.address;
    console.log(this.state.address);
    this.setState({ ...this.state.address });
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      fetchAddress(this);
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  async validation() {
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
    if (firstName === undefined) {
      alert('Please give your first name');
      return false;
    } else if (lastName === undefined) {
      alert('Please give your lastname!');
      return false;
    } else if (phoneNumber === undefined) {
      alert('Please give your phone number!');
      return false;
    } else if (email === undefined) {
      alert('Please give your email!');
      return false;
    } else if (country === undefined) {
      alert('Please select country!');
      return false;
    } else if (city === undefined) {
      alert('Please give your city!');
      return false;
    } else if (street === undefined) {
      alert('Please give your street address!');
      return false;
    } else if (zipCode === undefined) {
      alert('Please give your zip code!');
      return false;
    } else return true;
  }

  async handleAddress() {
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

    let address = {
      firstName,
      lastName,
      phoneNumber,
      email,
      country,
      state,
      city,
      street,
      zipCode,
    };

    let vald = await this.validation();
    // console.log('vald', vald);
    if (vald === false) {
      return;
    }

    try {
      await AsyncStorage.setItem('address', JSON.stringify(address), err =>
        console.log(err),
      );
      this.props.navigation.navigate('Shipping');
    } catch (error) {
      console.log(error);
    }
  }

  async handleSave() {
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

    let address = {
      firstName,
      lastName,
      phoneNumber,
      email,
      country,
      state,
      city,
      street,
      zipCode,
    };

    let vald = await this.validation();
    // console.log('vald', vald);
    if (vald === false) {
      return;
    }

    try {
      await AsyncStorage.setItem('address', JSON.stringify(address), err =>
        console.log(err),
      );
      ToastAndroid.show('Address saved!', ToastAndroid.SHORT);
    } catch (error) {
      console.log(error);
    }
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
      selectedIndex,
    } = this.state;

    console.log('in render', this.state);

    let countryList = [];
    var stateList = [];

    for (let index = 0; index < coutriesJson.length; index++) {
      // console.log(coutriesJson[index]);
      if (!!coutriesJson[index].country) {
        countryList.push(
          <Picker.Item
            label={coutriesJson[index].country}
            value={coutriesJson[index].country}
            key={index}
          />,
        );
      }
    }

    if (selectedIndex || selectedIndex === 0) {
      if (coutriesJson[selectedIndex].states.length > 0) {
        const states = coutriesJson[selectedIndex].states;
        for (let i = 0; i < states.length; i++) {
          console.log('came here', states[i]);
          stateList.push(
            <Picker.Item label={states[i]} value={states[i]} key={i} />,
          );
        }
      }
    }

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
                  getRef={input => (this.firstNameRef = input)}
                  value={firstName}
                  onChangeText={firstName => this.setState({ firstName })}
                  returnKeyType="next"
                  onSubmitEditing={() => this.lastNameRef._root.focus()}
                />
              </Item>
              <Item floatingLabel style={Styles.formItem}>
                <Label>Last Name</Label>
                <Input
                  getRef={input => (this.lastNameRef = input)}
                  value={lastName}
                  onChangeText={lastName => this.setState({ lastName })}
                  returnKeyType="next"
                  onSubmitEditing={() => this.phoneNumberRef._root.focus()}
                />
              </Item>
              <Item floatingLabel style={Styles.formItem}>
                <Label>Phone Number</Label>
                <Input
                  getRef={input => (this.phoneNumberRef = input)}
                  value={phoneNumber}
                  returnKeyType="next"
                  onChangeText={phoneNumber => this.setState({ phoneNumber })}
                  onSubmitEditing={() => this.emailRef._root.focus()}
                  keyboardType="phone-pad"
                />
              </Item>
              <Item floatingLabel style={Styles.formItem}>
                <Label>Email</Label>
                <Input
                  getRef={input => (this.emailRef = input)}
                  value={email}
                  onChangeText={email => this.setState({ email })}
                  keyboardType="email-address"
                  // onSubmitEditing={() => this.phoneNumberRef._root.focus()}
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
                <Picker
                  selectedValue={country}
                  mode="dropdown"
                  onValueChange={(value, index) =>
                    this.setState({ country: value, selectedIndex: index })
                  }>
                  {countryList}
                </Picker>
              </View>
            </View>

            <View style={Styles.pickerContainer}>
              <Text>State/Province</Text>
              <View style={Styles.pickerView}>
                <Picker
                  selectedValue={state}
                  mode="dropdown"
                  onValueChange={value => this.setState({ state: value })}>
                  {stateList}
                </Picker>
              </View>
            </View>

            <Form>
              <Item floatingLabel style={Styles.formItem}>
                <Label>City</Label>
                <Input
                  value={city}
                  onChangeText={city => this.setState({ city })}
                  getRef={input => (this.cityRef = input)}
                  returnKeyType="next"
                  onSubmitEditing={() => this.streetRef._root.focus()}
                />
              </Item>
              <Item floatingLabel style={Styles.formItem}>
                <Label>Street Name</Label>
                <Input
                  value={street}
                  onChangeText={street => this.setState({ street })}
                  getRef={input => (this.streetRef = input)}
                  onSubmitEditing={() => this.zipRef._root.focus()}
                  returnKeyType="next"
                />
              </Item>
              <Item floatingLabel style={Styles.formItem}>
                <Label>Zip-code</Label>
                <Input
                  value={zipCode}
                  onChangeText={zipCode => this.setState({ zipCode })}
                  getRef={input => (this.zipRef = input)}
                  onSubmitEditing={() => this.handleAddress()}
                />
              </Item>
            </Form>

            <View style={Styles.buttonContainer}>
              <Button
                onPress={() => this.handleSave()}
                title="SAVE ADDRESS"
                titleStyle={{ color: 'black' }}
                buttonStyle={Styles.saveButton}
              />

              <Button
                onPress={() => this.handleAddress()}
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
