import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import { Icon } from 'react-native-elements';
import moment from 'moment';

import Header from '../Common/Header';
import SpinView from '../Common/SpinView';
import { getCategory } from '../../server/fetch';
import Styles from './Styles';

export default class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };

    this.fetchOrders();
  }

  async fetchOrders() {
    const { route } = this.props;
    const { userId } = route.params;
    const res = await getCategory(`orders?customer=${userId}&`);
    const result = await Promise.resolve(res.json());
    // console.log(JSON.stringify(result));
    this.setState({ orders: result });
  }

  async componentDidMount() {
    await this.fetchOrders();
  }

  render() {
    const { orders } = this.state;

    if (orders.length <= 0) {
      return (
        <View style={{ flex: 1 }}>
          <Header headerText="My Orders" navigation={this.props.navigation} />
          <SpinView />
        </View>
      );
    }

    return (
      <View>
        <Header headerText="My Orders" navigation={this.props.navigation} />

        <Text style={Styles.countLabelText}>{orders.length} items</Text>
        <View>
          <FlatList
            data={orders}
            renderItem={({ item }) => {
              return (
                <View style={Styles.historyItem}>
                  <View style={Styles.touchView}>
                    <Text>#{item.number}</Text>
                    <Icon name="md-arrow-dropright" type="ionicon" />
                  </View>
                  <View style={Styles.rowStyle}>
                    <Text>Order Date</Text>
                    <Text>
                      {moment(item.date_created).format('DD/MM/YYYY')}
                    </Text>
                  </View>
                  <View style={Styles.rowStyle}>
                    <Text>Status</Text>
                    <Text style={{ textTransform: 'uppercase' }}>
                      {item.status}
                    </Text>
                  </View>
                  <View style={Styles.rowStyle}>
                    <Text>Payment Method</Text>
                    <Text>{item.payment_method_title}</Text>
                  </View>
                  <View style={Styles.rowStyle}>
                    <Text>Total</Text>
                    <Text>${item.total}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
}
