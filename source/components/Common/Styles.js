import { Dimensions, StyleSheet } from 'react-native';
import { moderateScale } from '../../constants/constant_functions';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    margin: moderateScale(20),
    borderRadius: 10,
    padding: moderateScale(20),
  },
  pickerView: { 
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    opacity: 0.7
  },
  labelText: {
    fontSize: moderateScale(16),
  },
  drawerImage: {
    width: 180,
    height: 50,
    resizeMode: 'contain'
  }
});
