import {Dimensions, StyleSheet} from 'react-native';
import {verticalScale, moderateScale} from '../../constants/constant_functions';
import { colors } from '../../constants/constant_strings';

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
  productContainer: {
    margin: moderateScale(20),
  },
  imageContainer: {
    width: width - 40,
    height: width - 60,
    // borderWidth: 1,
    borderColor: colors.borderColor,
    overflow: 'hidden',
    elevation: 1
  },
  image: {
    width: width - 40,
    height: width - 60,
    // resizeMode: 'contain',
    overflow: 'hidden'
  },
  thumbnailContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  thubImageView: {
    width: width/3 - 10,
    height: 100,
    marginRight: 5,
    borderWidth: 1,
    borderColor: colors.borderColor
  },
  thumImage: {
    width: width/3 - 10,
    height: 100
  }
})