import { Dimensions, StyleSheet } from 'react-native';
import {
  verticalScale,
  moderateScale,
} from '../../constants/constant_functions';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  headerContainer: {
    backgroundColor: 'red',
    flexDirection: 'row',
    height: verticalScale(60),
    alignItems: 'center',
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
    fontWeight: 'bold',
  },
  loginView: {
    flexDirection: 'row',
    padding: moderateScale(20),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileItem: {
    flexDirection: 'row',
    padding: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    opacity: 0.7,
  },
  loginText: {
    fontSize: moderateScale(18),
    paddingLeft: moderateScale(25),
  },
  horizontalLine: {
    height: 2,
    backgroundColor: 'grey',
    opacity: 0.5,
  },
  itemView: {
    flexDirection: 'row',
    paddingHorizontal: moderateScale(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: moderateScale(20),
    opacity: 0.7,
  },
  itemText: {
    fontSize: moderateScale(18),
  },
  proImageContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: 'grey',
  },
  leftItmes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countLabelText: {
    marginLeft: moderateScale(20)
  },
  historyItem: {
    marginHorizontal: moderateScale(20),
    marginTop: moderateScale(20)
  },
  touchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: moderateScale(10),
    backgroundColor: '#d0dbd3'
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: moderateScale(10)
  }
});
