import React from 'react';
import { View, Text } from 'react-native';
import Styles from './Styles';

const CheckoutSteps = props => {
  const { step } = props;

  return (
    <View>
      <View style={Styles.stepsContainer}>
        <Text
          style={{ color: step === 1 ? 'red' : 'grey', fontWeight: 'bold' }}>
          ADDRESS
        </Text>
        <Text
          style={{ color: step === 2 ? 'red' : 'grey', fontWeight: 'bold' }}>
          SHIPPING
        </Text>
        <Text
          style={{ color: step === 3 ? 'red' : 'grey', fontWeight: 'bold' }}>
          PREVIEW
        </Text>
        <Text
          style={{ color: step === 4 ? 'red' : 'grey', fontWeight: 'bold' }}>
          PAYMENT
        </Text>
      </View>
      <View style={Styles.barContainer}>
        <View style={{ backgroundColor: 'red', flex: 2.5 * step }} />
        <View
          style={{
            backgroundColor: 'grey',
            opacity: 0.3,
            flex: 10 - 2.5 * step,
          }}
        />
      </View>
    </View>
  );
};

export default CheckoutSteps;
