import React from 'react';
import {View} from 'react-native';

import Spinner from 'react-native-spinkit';

const SpinView = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Spinner type='Circle' color='red' isVisible={true} />
    </View>
  )
}

export default SpinView;