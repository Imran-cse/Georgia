import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

import { Form, Item, Input, Label, Picker } from 'native-base';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

import SavedAddress from './SavedAddress';
import ChekcoutSteps from './CheckoutSteps';
import Header from '../Common/Header';
import LocationMap from './MapView';
import Styles from './Styles';
import { coutriesJson } from '../../constants/countries';
import {
  fetchAddress,
  updateAddress,
  moderateScale,
  getUserAsync
} from '../../constants/constant_functions';

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
      savedAddresses: [],
      showSavedAddress: false,
      showAddressSearch: false,
    };

    this.fetchAddress();
  }

  async fetchAddress() {
    await fetchAddress(this);
    const res = await getUserAsync();
    if (res !== null) {
      let user = JSON.parse(res);
      let firstName = user.name ? user.name.split(' ')[0] : undefined;
      let lastName = user.name ? user.name.split(' ')[1] || undefined : undefined;
      let email = user.email || undefined;
      this.setState({ firstName, lastName, email }, () => console.log('hello'));
    }
    // console.log(this.state.address);
    // this.setState({ ...this.state.address });
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

  updateState(obj) {
    this.setState(obj);
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
    this.props.navigation.navigate('Shipping');
    // try {
    //   await AsyncStorage.setItem('address', JSON.stringify(address), err =>
    //     console.log(err),
    //   );
    //   this.props.navigation.navigate('Shipping');
    // } catch (error) {
    //   console.log(error);
    // }
  }

  selectAddress(index) {
    console.log(index);
    const { savedAddresses } = this.state;
    this.setState({ ...savedAddresses[index], showSavedAddress: false });
  }

  removeAddress(index) {
    const { savedAddresses } = this.state;
    savedAddresses.splice(index, 1);
    updateAddress(savedAddresses, this);
  }

  checkAddressExists(address) {
    const { savedAddresses } = this.state;
    if (savedAddresses.length > 0) {
      let tempAddress = JSON.stringify(address);
      for (let index = 0; index < savedAddresses.length; index++) {
        const element = JSON.stringify(savedAddresses[index]);
        if (element == tempAddress) {
          // alert('The address is already saved!');
          console.log('came to check');
          return true;
        }
      }
      return false;
    } else {
      return false;
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
      savedAddresses,
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

    let exists = await this.checkAddressExists(address);
    console.log(exists);
    if (await this.checkAddressExists(address)) {
      alert('The address is already saved!');
      return;
    } else {
      savedAddresses.push(address);
      console.log('address', address);
      this.setState({ savedAddresses });
      try {
        await updateAddress(savedAddresses, this);
        ToastAndroid.show('Address saved!', ToastAndroid.SHORT);
      } catch (error) {
        console.log(error);
      }
    }
  }

  saveMapAddress(address) {
    console.log(address);
    address.addressComponents.map(item => {
      console.log(item);
    });
    let street = address.addressComponents[0].name;
    let city = address.addressComponents[1].name;
    let state = address.addressComponents[2].name;
    let country =
      address.addressComponents[address.addressComponents.length - 1].name;
    this.setState({ showAddressSearch: false, street, city, state, country });
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
      showSavedAddress,
      savedAddresses,
      address,
      showAddressSearch,
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

    if (showAddressSearch) {
      return <LocationMap saveMapAddress={this.saveMapAddress.bind(this)} />;
    }

    if (showSavedAddress) {
      return (
        <SavedAddress
          savedAddresses={savedAddresses}
          updateState={this.updateState.bind(this)}
          selectAddress={this.selectAddress.bind(this)}
          removeAddress={this.removeAddress.bind(this)}
        />
      );
    }

    return (
      <View style={Styles.container}>
        <Header
          headerText="Checkout"
          address={address}
          navigation={this.props.navigation}
        />

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
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    showAddressSearch: true,
                    showSavedAddress: false,
                  });
                  // this.props.navigation.navigate('LocationMap');
                }}
                style={Styles.searchView}>
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
              <TouchableOpacity
                onPress={() =>
                  this.setState({ showSavedAddress: !showSavedAddress })
                }
                style={Styles.searchView}>
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

            {/* <View style={Styles.pickerContainer}>
              <Text>State/Province</Text>
              <View style={Styles.pickerView}>
                <Picker
                  selectedValue={state}
                  mode="dropdown"
                  onValueChange={value => this.setState({ state: value })}>
                  {stateList}
                </Picker>
              </View>
            </View> */}

            <Form>
              <Item floatingLabel style={Styles.formItem}>
                <Label>State/Province</Label>
                <Input
                  value={state}
                  onChangeText={state => this.setState({ state })}
                  getRef={input => (this.stateRef = input)}
                  returnKeyType="next"
                  onSubmitEditing={() => this.cityRef._root.focus()}
                />
              </Item>
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
                  // onSubmitEditing={() => this.handleAddress()}
                />
              </Item>
            </Form>

            <View style={Styles.buttonContainer}>
              <Button
                onPress={() => this.handleSave()}
                title="SAVE ADDRESS"
                titleStyle={{ color: 'black', fontSize: moderateScale(15) }}
                buttonStyle={Styles.saveButton}
              />

              <Button
                onPress={() => this.handleAddress()}
                title="CONTINUE TO SHIPPING"
                titleStyle={{ fontSize: moderateScale(15) }}
                buttonStyle={Styles.continueButton}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
