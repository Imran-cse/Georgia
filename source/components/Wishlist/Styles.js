import {Dimensions, StyleSheet} from 'react-native'
import { moderateScale, verticalScale } from '../../constants/constant_functions';
import {colors} from '../../constants/constant_strings'

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white' 
  },
  horizontalLine: {
    height: 2,
    backgroundColor: 'grey',
    opacity: 0.5,
  },
  quantityText: {
    fontSize: moderateScale(17),
    color: 'grey',
    paddingVertical: moderateScale(5),
    marginLeft: moderateScale(20)
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
    justifyContent: 'flex-end',
    paddingBottom: verticalScale(30),
    alignItems: 'center'
    // height: width/2
  },
  imageContainer: {
    flex: 4,
    borderWidth: 2,
    borderColor: '#f2e7e6',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(20)
  },
  image: {
    width: width / 4 + 10,
    height: width / 3 -20,
    resizeMode: 'contain',
  },
  desContainer: {
    flex: 4,
    // borderWidth: 1,
    alignItems: 'flex-start',
    padding: moderateScale(5)
  },
  desText: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    opacity: 0.7
  },
  priceText: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: 'red',
    paddingTop: 8
  },
  buttonStyle: {
    backgroundColor: 'red',
    marginTop: 5,
    height: 30,
    paddingHorizontal: 10
    // width: moderateScale(200)
  }
})