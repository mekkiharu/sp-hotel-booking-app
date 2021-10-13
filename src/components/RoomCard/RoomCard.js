import React from 'react';

import {
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Card from '../reusable/Card';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/core';
import {COLORS} from '../../enums/colors';
import ROOM_TYPE from '../../enums/roomType';
import SCENES from '../../enums/scenes';
import styles from './RoomCard.style';

const RoomCard = ({room, index, type}) => {
  const navigation = useNavigation();

  const _handleRoomDetailsRedirect = () => {
    navigation.navigate(SCENES.ROOM_DETAILS, room);
  };

  const _renderRoomCardImage = () => (
    <Image style={styles.cardImage} source={room.image} />
  );

  const _renderRatings = () => {
    const ratingIconHolder = [];

    for (let i = 0; i < room.rating; i++) {
      ratingIconHolder.push(
        <Icon key={i} name="star" size={20} solid color={COLORS.ORANGE} />,
      );
    }

    return ratingIconHolder;
  };

  const _renderCardDetails = () => (
    <>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.roomTitle}>{room.name}</Text>

          <Text style={{color: 'grey', fontSize: 18}}>{room.location}</Text>
        </View>

        <Icon name="bookmark" size={24} color={COLORS.PRIMARY} />
      </View>

      <View
        style={{
          ...styles.roomDataContainer,
          paddingTop: 16,
        }}>
        <View style={styles.roomDataContainer}>
          <Icon name="bed" size={20} color={COLORS.SECONDARY} />
          <Text style={styles.roomFeaturesText}>{room.beds}</Text>
        </View>

        <View
          style={{
            ...styles.roomDataContainer,
            marginLeft: 8,
          }}>
          <Icon name="shower" size={20} color={COLORS.SECONDARY} />
          <Text style={styles.roomFeaturesText}>{room.baths}</Text>
        </View>

        {type === ROOM_TYPE.LIST ? (
          <View
            style={{
              ...styles.roomDataContainer,
              marginLeft: 'auto',
            }}>
            <Text style={styles.price}>${room.price}</Text>
            <Text style={styles.priceSubText}>/night</Text>
          </View>
        ) : (
          <View
            style={{
              ...styles.roomDataContainer,
              marginLeft: 'auto',
            }}>
            {_renderRatings()}
          </View>
        )}
      </View>
    </>
  );

  const _renderListRoomCard = () => (
    <TouchableOpacity onPress={_handleRoomDetailsRedirect} activeOpacity={0.95}>
      <Card style={styles.roomCard} key={index}>
        {_renderRoomCardImage()}

        <View style={styles.listCardDetails}>{_renderCardDetails()}</View>
      </Card>
    </TouchableOpacity>
  );

  const _renderDetailsRoomCard = () => (
    <Card style={styles.roomDetailsCard}>
      <View style={{...styles.cardDetails, height: 100}}>
        {_renderCardDetails()}
      </View>
    </Card>
  );

  return type === ROOM_TYPE.LIST
    ? _renderListRoomCard()
    : _renderDetailsRoomCard();
};

export default RoomCard;
