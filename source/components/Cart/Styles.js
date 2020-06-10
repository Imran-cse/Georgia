import { Dimensions, StyleSheet } from 'react-native';
import {
  moderateScale,
  verticalScale,
} from '../../constants/constant_functions';
import {colors} from '../../constants/constant_strings';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    marginHorizontal: moderateScale(20),
    marginTop: verticalScale(25),
  },
  myCartText: {
    color: 'red',
    fontSize: moderateScale(25),
    paddingBottom: moderateScale(5),
  },
  headBarView: {
    padding: moderateScale(15),
    backgroundColor: '#e3e5e8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  clearText: {
    color: 'red',
    fontSize: moderateScale(15),
    fontWeight: 'bold',
  },
  totalText: {
    fontSize: moderateScale(15),
    fontWeight: '500',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingTop: moderateScale(20),
    marginHorizontal: moderateScale(20),
    // borderWidth: 1,
  },
  iconContainer: {
    flex: 2,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
    // height: width/2
  },
  imageContainer: {
    flex: 4,
    borderWidth: 1,
    borderColor: colors.borderColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(20)
  },
  image: {
    width: width / 3,
    height: width / 3,
    resizeMode: 'contain',
  },
  desContainer: {
    flex: 4,
    // borderWidth: 1,
    alignItems: 'flex-start',
    padding: moderateScale(5)
  },
  pickerView: {
    // borderWidth: 1,
    position: 'absolute',
    bottom: 0 ,
    right: 0,
    backgroundColor: 'white'
  },
  desText: {
    fontSize: moderateScale(12)
  },
  priceText: {
    fontSize: moderateScale(12),
    color: 'red',
    fontWeight: 'bold',
    paddingVertical: moderateScale(5)
  },
  horizontalLine: {
    height: 2,
    backgroundColor: 'grey',
    opacity: 0.5,
    marginVertical: moderateScale(20)
  },
  couponView: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(15)
  },
  couponImage: {
    width: 100,
    height: 60,
    resizeMode:'contain'
  },
  totalView: {
    margin: moderateScale(20),
    backgroundColor: '#e3e5e8',
    padding: moderateScale(10)
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: moderateScale(5)
  },
  smallText: {
    fontSize: moderateScale(12)
  },
  bigText: {
    fontSize: moderateScale(14),
    fontWeight: 'bold'
  },
  buttonStyle: {
    marginHorizontal: moderateScale(20),
    backgroundColor: 'red'
  }
});
