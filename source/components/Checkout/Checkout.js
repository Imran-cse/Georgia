import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import Header from '../Common/Header';
import Address from './Address';
import Shipping from './Shipping';
import Preview from './Preview';
import Payment from './Payment';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

export default function Checkout(props) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Address' },
    { key: 'second', title: 'Shipping' },
    { key: 'third', title: 'Preview' },
    { key: 'fourth', title: 'Payment' },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <Address />;
      case 'second':
        return <Shipping />;
      case 'third':
        return <Preview />;
      case 'fourth':
        return <Payment />;
      default:
        return null;
    }
  };

  const _renderTabBar = props => (
    <TabBar
      {...props}
      style={{ backgroundColor: 'transparent', elevation: 0 }}
      labelStyle={{ color: 'grey', fontWeight: 'bold' }}
    />
  );

  return (
    <React.Fragment>
      <Header headerText="Checkout" navigation={props.navigation} />
      <TabView
        style={{marginHorizontal: 10}}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={_renderTabBar}
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
});
