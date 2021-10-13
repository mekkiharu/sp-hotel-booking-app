import React from 'react';

import {
  Dimensions,
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import Card from './reusable/Card';
import Icon from 'react-native-vector-icons/FontAwesome5';

import hotelsData from '../utils/constants/hotelsData';
import ROOM_TYPE from '../enums/roomType';
import RoomCard from './RoomCard/RoomCard';

const {width} = Dimensions.get('screen');
const cardWidth = width / 1.4;

const PopularRooms = () => {
  return (
    <View style={styles.popularRoomsContainer}>
      <View style={{paddingBottom: 4}}>
        <Text style={styles.greetingText}>Top Rooms</Text>
      </View>

      <FlatList
        data={hotelsData}
        horizontal
        showHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({item, index}) => (
          <RoomCard room={item} index={index} type={ROOM_TYPE.LIST} />
        )}
        snapToInterval={cardWidth}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  greetingText: {
    color: '#000',
    fontSize: 24,
  },
  popularRoomsContainer: {
    marginTop: 20,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  flatListContainer: {
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: cardWidth / 2 - 140,
  },
});
export default PopularRooms;
