import { Dimensions, StyleSheet } from 'react-native';
import {
  verticalScale,
  moderateScale,
} from '../../constants/constant_functions';
import { colors } from '../../constants/constant_strings';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  productContainer: {
    margin: moderateScale(20),
  },
  imageContainer: {
    width: width - 40,
    height: width - 60,
    borderWidth: 1,
    borderColor: colors.borderColor,
    overflow: 'hidden',
    // elevation: 1,
  },
  image: {
    width: width - 40,
    height: width - 60,
    // resizeMode: 'contain',
    overflow: 'hidden',
  },
  thumbnailContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  thubImageView: {
    width: width / 3 - 20,
    height: 100,
    // marginRight: 10,
    borderWidth: 1,
    elevation: 1,
    borderColor: colors.borderColor,
  },
  thumImage: {
    width: width / 3 - 20,
    height: 100,
  },
  descriptionText: {
    paddingTop: moderateScale(15),
    fontSize: moderateScale(14),
  },
  priceView: {
    marginTop: 10,
    flexDirection: 'row',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  buyBotton: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    borderRadius: 10,
    // width: width / 3 + 10,
  },
  cartButton: {
    backgroundColor: 'grey',
    paddingHorizontal: 20,
    borderRadius: 10,
    opacity: 0.3,
    // width: width / 3 + 10,
  },
  reviewHederView: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceText: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
  },
  stockText: {
    color: 'red',
    textTransform: 'capitalize',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pickerContainer: {
    borderWidth: 1,
    width: 90,
    height: 42,
    borderRadius: 10
  },
  pickerStyle: {
    // width: 30,
    padding: 0,
    margin: 0,
    marginRight: 0,
    marginBottom: 0,
    height: 43,
    flexGrow: 0
  }
});
