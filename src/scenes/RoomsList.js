import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Header from '../components/Header';
import PopularRooms from '../components/PopularRooms';
import {COLORS} from '../enums/colors';

const RoomsList = ({navigation}) => {
  return (
    <View style={styles.viewWrapper}>
      <View style={styles.headerWrapper}>
        <Header />
        <Icon
          style={styles.userIcon}
          name="user-circle"
          size={35}
          color={COLORS.PRIMARY}
        />
      </View>

      <PopularRooms />
    </View>
  );
};

const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
  },
  userIcon: {
    margin: 16,
    padding: 16,
    marginLeft: 'auto',
  },
});

export default RoomsList;
