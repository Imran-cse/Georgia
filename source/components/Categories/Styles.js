import { Dimensions, StyleSheet } from 'react-native';
import { moderateScale } from '../../constants/constant_functions';
import { colors } from '../../constants/constant_strings';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    margin: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  headerContainer: {
    // flex: 1,
    elevation: 4,
    backgroundColor: 'white',
    borderBottomColor: 'rgb(224, 224, 224)',
    shadowColor: 'rgb(224, 224, 224)',
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIcon: {
    width: 25,
    height: 25,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 20,
    paddingLeft: 10,
    color: 'red',
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'column',
    // borderWidth: 1,
    borderColor: colors.borderColor,
    width: width/2 - 30,
    marginBottom: moderateScale(20),
    marginRight: moderateScale(20)
  },
  imageContainer: {
    width: width / 2 - 30,
    height: width / 2 + 10,
    overflow: 'hidden',
    borderWidth: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.borderColor
  },
  imageStyle: {
    width: width / 3,
    height: width / 3,
    overflow: 'hidden',
    resizeMode: 'contain'
  },
  categoryText: {
    fontSize: moderateScale(16),
    textAlign: 'center',
    opacity: 0.7,
  },
});
