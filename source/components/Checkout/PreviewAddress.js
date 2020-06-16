import React from 'react';
import { View, Text } from 'react-native';

import Styles from './Styles';

const PreviewAddress = props => {
  const { address } = props;
  console.log(address);

  return (
    <View style={{paddingBottom: 10}}>
      <View style={Styles.addressRow}>
        <View style={Styles.firstColumn}>
          <Text>First Name:</Text>
        </View>
        <View style={Styles.secondColumn}>
          {!!address.firstName && <Text>{address.firstName}</Text>}
        </View>
      </View>
      <View style={Styles.addressRow}>
        <View style={Styles.firstColumn}>
          <Text>Last Name:</Text>
        </View>
        <View style={Styles.secondColumn}>
          {!!address.lastName && <Text>{address.lastName}</Text>}
        </View>
      </View>
      <View style={Styles.addressRow}>
        <View style={Styles.firstColumn}>
          <Text>Email:</Text>
        </View>
        <View style={Styles.secondColumn}>
          {!!address.email && <Text>{address.email}</Text>}
        </View>
      </View>
      <View style={Styles.addressRow}>
        <View style={Styles.firstColumn}>
          <Text>Phone Number:</Text>
        </View>
        <View style={Styles.secondColumn}>
          {!!address.phoneNumber && <Text>{address.phoneNumber}</Text>}
        </View>
      </View>
      <View style={Styles.addressRow}>
        <View style={Styles.firstColumn}>
          <Text>Country:</Text>
        </View>
        <View style={Styles.secondColumn}>
          {!!address.country && <Text>{address.country}</Text>}
        </View>
      </View>
      <View style={Styles.addressRow}>
        <View style={Styles.firstColumn}>
          <Text>State/Province:</Text>
        </View>
        <View style={Styles.secondColumn}>
          {!!address.state && <Text>{address.state}</Text>}
        </View>
      </View>
      <View style={Styles.addressRow}>
        <View style={Styles.firstColumn}>
          <Text>City:</Text>
        </View>
        <View style={Styles.secondColumn}>
          {!!address.city && <Text>{address.city}</Text>}
        </View>
      </View>
      <View style={Styles.addressRow}>
        <View style={Styles.firstColumn}>
          <Text>Street:</Text>
        </View>
        <View style={Styles.secondColumn}>
          {!!address.street && <Text>{address.street}</Text>}
        </View>
      </View>
      <View style={Styles.addressRow}>
        <View style={Styles.firstColumn}>
          <Text>Zip Code:</Text>
        </View>
        <View style={Styles.secondColumn}>
          {!!address.zipCode && <Text>{address.zipCode}</Text>}
        </View>
      </View>
    </View>
  );
};

export default PreviewAddress;
