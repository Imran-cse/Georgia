import React, { useState } from 'react';
import { View } from 'react-native';

import { SearchBar as SearchBarE } from 'react-native-elements';

import { getCategory } from '../../server/fetch';

import Styles from './Styles';

const SearchBar = props => {
  const [searchText, changeText] = useState(undefined);
  const [showLoading, setLoading] = useState(false);

  async function handleSearch(serchText, navigation) {
    const res = await getCategory(`products?search=${serchText}&`);
    const data = await Promise.resolve(res.json());
    const count = res.headers.get('X-WP-Total');
    if (data !== null) {
      // console.log('data', data[0])
      setLoading(!setLoading);
      navigation.navigate('Search', { data: data, count: count });
    }
  }

  return (
    <View style={Styles.serchWrapper}>
      <SearchBarE
        value={searchText}
        showLoading={showLoading}
        onChangeText={searchText => changeText(searchText)}
        placeholder="Search"
        lightTheme={true}
        inputContainerStyle={Styles.serchInputContainer}
        containerStyle={Styles.searchContainer}
        searchIcon={{ size: 25 }}
        onSubmitEditing={() => {
          setLoading(!showLoading);
          handleSearch(searchText, props.navigation);
        }}
      />
    </View>
  );
};

export default SearchBar;
