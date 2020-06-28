import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 620;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.25) =>
  size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };

export const getUserAsync = async () => {
  const user = await AsyncStorage.getItem('user');
  return user;
};

export const multiset = async (user, token) => {
  const firstPair = ['user', JSON.stringify(user)];
  const secondPair = ['token', JSON.stringify(token)];
  try {
    await AsyncStorage.multiSet([firstPair, secondPair]);
  } catch (error) {
    console.log(error);
  }
};

export const fetchCartData = async context => {
  await AsyncStorage.getItem('cart', (err, res) => {
    const cart = res ? JSON.parse(res) : {};
    context.setState({ cart });
  });
};

export const fetchAddress = async context => {
  await AsyncStorage.getItem('savedAddresses', (err, res) => {
    const savedAddresses = res ? JSON.parse(res) : [];
    context.setState({ savedAddresses });
  });
};

export const updateAddress = async (savedAddresses, context) => {
  await AsyncStorage.setItem(
    'savedAddresses',
    JSON.stringify(savedAddresses),
    (err, res) => {
      context.setState({ savedAddresses });
    },
  );
};

export const fetchCartDataCount = async () => {
  const res = await AsyncStorage.getItem('cart');
  const count = res ? JSON.parse(res) : {};
  // return Object.keys(count).length;
  return 2;
};

export const updateCart = async (cart, context) => {
  await AsyncStorage.setItem('cart', JSON.stringify(cart), (err, res) => {
    context.setState({ cart });
  });
};

export const fetchBrowsingHistory = async context => {
  await AsyncStorage.getItem('browsingHistory', (err, res) => {
    const browsingHistory = res ? JSON.parse(res) : {};
    context.setState({ browsingHistory });
  });
};

export const updateBrowsingHistory = async (browsingHistory, context) => {
  console.log('browsingHistory', browsingHistory);
  await AsyncStorage.setItem(
    'browsingHistory',
    JSON.stringify(browsingHistory),
    (err, res) => {
      context.setState({ browsingHistory });
    },
  );
};

export const upldateWishlist = async (wishList, context) => {
  await AsyncStorage.setItem(
    'wishList',
    JSON.stringify(wishList),
    (err, res) => {
      context.setState({ wishList });
    },
  );
};

export const fetchWishlist = async context => {
  await AsyncStorage.getItem('wishList', (err, res) => {
    const wishList = res ? JSON.parse(res) : {};
    context.setState({ wishList });
  });
};
