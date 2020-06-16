import { Dimensions, StyleSheet } from 'react-native';
import {
  moderateScale,
  verticalScale,
} from '../../constants/constant_functions';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    // marginHorizontal: moderateScale(10),
    flex: 1,
    paddingBottom: 5,
    backgroundColor: 'white',
  },
  formItem: {
    marginLeft: 0,
    paddingBottom: 10,
    marginTop: 0,
  },
  searchView: {
    height: verticalScale(50),
    backgroundColor: 'grey',
    marginTop: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.4,
    flexDirection: 'row',
  },
  searchText: {
    fontSize: moderateScale(15),
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  pickerContainer: {
    marginTop: moderateScale(10),
    opacity: 0.5,
  },
  pickerView: {
    borderBottomWidth: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: moderateScale(20),
    justifyContent: 'space-between',
  },
  saveButton: {
    backgroundColor: 'grey',
    opacity: 0.2,
    padding: moderateScale(10),
  },
  continueButton: {
    backgroundColor: 'red',
    padding: moderateScale(10),
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
  },
  barContainer: {
    height: 3,
    marginVertical: 5,
    flexDirection: 'row',
    paddingHorizontal: moderateScale(10),
  },
  shpiLevelView: {
    margin: moderateScale(10),
    marginLeft: moderateScale(20)
  },
  shipText: {
    fontSize: moderateScale(15),
    fontWeight: 'bold',
    color: 'grey',
  },
  checkboxContainer: {
    // backgroundColor: 'white',
    borderWidth: 0,
    paddingLeft: 30,
  },
  shipButton: {
    margin: moderateScale(10),
    paddingVertical: moderateScale(10),
    backgroundColor: 'red'
  },
  backView: {
    alignItems: 'center',
    marginVertical: 5,
    opacity: 0.5
  },
  orderDetailLabel: {
    marginLeft: moderateScale(20),
    fontSize: moderateScale(15),
    opacity: 0.6
  },
  totalView: {
    margin: moderateScale(20)
  },
  rowView: {
    flexDirection: 'row',
    paddingTop: moderateScale(10),
    justifyContent: 'space-between'
  },
  totalPrice: {
    fontSize: moderateScale(16),
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    opacity: 0.7
  },
  noteView: {
    marginHorizontal: moderateScale(20)
  },
  textInput: {
    borderWidth: 1,
    textAlignVertical: 'top',
    borderColor: '#dfe6f2',
    marginTop: 5
  },
  noteText: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    opacity: 0.5
  },
  addressRow: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(20),
    paddingBottom: 2,
    opacity: 0.7
  },
  firstColumn: {
    flex: 4,
  },
  secondColumn: {
    flex: 6
  }
});
