import { Dimensions, StyleSheet } from 'react-native';
import {
  moderateScale,
  verticalScale,
} from '../../constants/constant_functions';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  containerHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    paddingTop: moderateScale(10),
  },
  headerIcon: {
    width: 25,
    height: 25,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  serchWrapper: {
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
    overflow: 'visible',
  },
  categorySectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  categorySectionItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 3 - 20,
    // borderWidth: 1
  },
  categoryImage: {
    width: width / 6,
    height: width / 6,
    resizeMode: 'contain',
  },
  categorySectionText: {
    textAlign: 'center',
    color: 'grey',
  },
  divider: {
    height: 4,
    backgroundColor: 'grey',
    marginVertical: 5,
    opacity: 0.5,
  },
  featuredProductSectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(20),
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ebeff5',
    marginBottom: 10,
  },
  seeProductText: {
    fontSize: moderateScale(16),
    color: 'red',
    marginRight: 20,
    paddingBottom: 3,
  },
  sectionHeaderText: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: 'grey',
    paddingBottom: 3,
    marginLeft: moderateScale(20),
  },
  featuredProductItem: {
    width: width / 2 - 30,
    marginRight: 10,
    borderWidth: 1,
    padding: 5,
    borderColor: '#ebeff5',
  },
  featureProductImage: {
    height: width / 2.5,
    width: width / 2 - 50,
    resizeMode: 'cover',
  },
  featuredProductFooter: {
    flex: 8,
    alignItems: 'flex-start',
  },
  featuredProductDesText: {
    fontSize: 12,
  },
  currencyText: {
    color: 'red',
  },
  bannerContainer: {
    marginHorizontal: 20,
  },
  banner: {
    width: width - 40,
    height: 150,
    resizeMode: 'contain',
  },
  popularImageContainer: {
    width: width / 3,
    borderWidth: 1,
    borderColor: '#ebeff5',
    marginRight: 10,
    alignItems: 'center',
  },
  poularImage: {
    width: width / 6,
    height: 170,
    padding: 10,
    paddingBottom: 0,
    resizeMode: 'contain',
  },
  popularText: {
    textAlign: 'center',
  },
  newPhoneSection: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  newPhoneContainer: {
    width: width / 2 - 30,
    // marginRight: 20,
    borderWidth: 1,
    padding: 5,
    borderColor: '#ebeff5',
  },
  newPhoneImage: {
    height: width / 2.5,
    width: width / 2 - 50,
    resizeMode: 'contain',
  },
  newPhoneText: {
    textAlignVertical: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  newPhoneFooter: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  logo: {
    height: 70,
    width: 150,
    resizeMode: 'contain',
  },
});
