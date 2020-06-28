import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Modal from 'react-native-modal';
import { Picker } from 'native-base';

import Styles from './Styles';

const QuantityModal = props => {
  const { isModalVisible, item } = props;
  const { selectedQuantity, setQuantity } = useState(1);

  let pickerList = [];
  for (let index = 1; index <= 50; index++) {
    pickerList.push(
      <Picker.Item label={`${index}`} key={index} value={index} />,
    );
  }

  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={() => props.updateState({ isModalVisible: false })}>
      <View style={Styles.modalContainer}>
        <View style={{ paddingBottom: 5 }}>
          <Text style={Styles.labelText}>Please select the no of items:</Text>
        </View>
        <View style={Styles.pickerView}>
          <Picker
            selectedValue={selectedQuantity}
            mode="dropdown"
            placeholder="Select quantity"
            onValueChange={value => {
              // setQuantity(value);
              props.handleCart(value);
            }}>
            <Picker.item label="Select quatity" value={undefined} />
            {pickerList}
          </Picker>
        </View>
      </View>
    </Modal>
  );
};

export default QuantityModal;
