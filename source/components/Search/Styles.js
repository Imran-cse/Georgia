import { Dimensions, StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../../constants/constant_functions';
import { colors } from '../../constants/constant_strings';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  searchContainer: {
    backgroundColor: 'white',
    paddingTop: 2,
    height: 35,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    overflow: 'hidden',
  },
  serchInputContainer: {
    backgroundColor: 'white',
    overflow: 'hidden',
    height: 35,
  },
  serchWrapper: {
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
    overflow: 'visible',
  },
  searchHeadText: {
    fontSize: moderateScale(20),
    margin: 20,
    marginBottom: 0,
    color: 'red',
    fontWeight: 'bold',
  },
  resultContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
  },
  itemContainer: {
    width: width / 2 - moderateScale(30),
    marginBottom: moderateScale(20)
  },
  imageWrapper: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    overflow: 'hidden'
  },
  image: {
    width: width / 2 - moderateScale(30),
    height: moderateScale(170),
    resizeMode: 'contain',
  },
  countText: {
    marginLeft: moderateScale(20),
    fontSize: moderateScale(15),
    color: 'grey',
    paddingBottom: 5
  },
  price: {
    fontSize: moderateScale(15),
    color: 'red',
    fontWeight: 'bold'
  },
  scrollView: {
    padding: moderateScale(20),
    marginBottom: verticalScale(120)
  }
});
