import { Dimensions, StyleSheet } from 'react-native';
import { verticalScale, moderateScale } from '../../constants/constant_functions';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  headerContainer: {
    backgroundColor: 'red',
    flexDirection: 'row',
    height: verticalScale(60),
    alignItems: 'center'
  },
  headerIcon: {
    // width: 25,
    // height: 25,
    paddingHorizontal: moderateScale(20),
    // resizeMode: 'contain',
  },
  headerText: {
    fontSize: moderateScale(18),
    color: 'white',
    fontWeight: 'bold'
  },
  loginView: {
    flexDirection: 'row',
    padding: moderateScale(20),
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  loginText: {
    fontSize: moderateScale(22),
    paddingLeft: moderateScale(20)
  }
})