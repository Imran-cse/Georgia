import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';

import { Icon } from 'react-native-elements';

import Styles from './Styles';

const Profile = props => {
  const { user } = props;
  console.log(user);

  return (
    <View>
      <View style={[Styles.profileItem, { justifyContent: 'flex-start' }]}>
        <View style={Styles.proImageContainer}>
          <Image
            source={{
              uri:
                user.photo ||
                'https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg',
            }}
            style={{ width: 40, height: 40 }}
          />
        </View>
        <Text style={[Styles.loginText, { paddingLeft: 10 }]}>{user.name}</Text>
      </View>
      <View style={Styles.profileItem}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="email" type="material-community" size={25} />
          <Text style={Styles.loginText}>{user.email}</Text>
        </View>
      </View>
      <TouchableOpacity
        // onPress={() =>
        //   this.props.navigation.navigate('Auth', { screen: 'Login' })
        // }
        style={Styles.profileItem}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="account-edit" type="material-community" size={25} />
          <Text style={Styles.loginText}>Update Profile</Text>
        </View>
        <Icon name="ios-arrow-forward" type="ionicon" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Alert.alert('Logout', 'Are you sure to logout?', [
            {
              text: 'No',
              onPress: () => console.log('cancel pressed'),
              style: 'cancel',
            },
            {
              text: 'Yes',
              onPress: () => props.logout(),
              style: 'defaults',
            },
          ])
        }
        style={Styles.profileItem}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="logout" type="antdesign" size={23} />
          <Text style={Styles.loginText}>Logout</Text>
        </View>
        <Icon name="ios-arrow-forward" type="ionicon" />
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
