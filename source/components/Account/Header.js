import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { Icon } from 'react-native-elements';

import Styles from './Styles';

const Header = props => {
  return (
    <View>
      <View style={Styles.headerContainer}>
        <TouchableOpacity>
          <Icon
            name="menu"
            type="feather"
            color="white"
            size={30}
            style={Styles.headerIcon}
          />
        </TouchableOpacity>
        <Text style={Styles.headerText}>General Settings</Text>
      </View>
    </View>
  );
};

export default Header;
