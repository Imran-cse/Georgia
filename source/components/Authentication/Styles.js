import { Dimensions, StyleSheet } from 'react-native';
import {
  verticalScale,
  moderateScale,
} from '../../constants/constant_functions';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: moderateScale(20),
    justifyContent: 'center',
  },
  inputView: {
    marginTop: verticalScale(30),
    marginBottom: verticalScale(20),
  },
  horzontalLine: {
    height: 1,
    // borderWidth: 1,
    width: width / 4,
    backgroundColor: 'grey',
    opacity: 0.5
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(20),
  },
  orText: {
    paddingHorizontal: 5,
    color: 'red'
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(20),
  },
  icon: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  signupView: {
    marginTop: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    color: 'red',
  },
  logoView: {
    //  borderWidth: 1,
    //  justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  buttonStyle: {
    backgroundColor:'red',
    paddingVertical: verticalScale(8),
    marginHorizontal: moderateScale(20),
    borderRadius: 25
  },
  formItem: { marginLeft: 0,
     paddingBottom: 10 },
  linkText:{ 
    textDecorationLine: 'underline',
    color: 'red'
   }
});
