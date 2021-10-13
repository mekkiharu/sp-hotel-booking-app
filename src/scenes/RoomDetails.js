import React from 'react';

import {
  Dimensions,
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RoomCard from '../components/RoomCard/RoomCard';
import LinearGradient from 'react-native-linear-gradient';

import ROOM_TYPE from '../enums/roomType';
import {COLORS} from '../enums/colors';
const {height: screenHeight} = Dimensions.get('screen');
import globalStyles from '../styles/global-styles';

const RoomDetails = ({navigation, route}) => {
  const {params: roomData} = route;

  const _handleRedirectAway = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={{flex: 1}}>
      <ImageBackground style={styles.imageHeader} source={roomData.image}>
        <View style={styles.roomDetailsHeader}>
          <Pressable style={styles.backButton} onPress={_handleRedirectAway}>
            <Icon name="arrow-left" size={26} color="white" />
          </Pressable>
        </View>
      </ImageBackground>

      <View style={styles.cardContainer}>
        <RoomCard room={roomData} type={ROOM_TYPE.DETAILS} />
      </View>

      <View style={{marginHorizontal: 20}}>
        <View>
          <Text style={styles.descriptionText}>{roomData.details}</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.priceTagContainer}>
            <Text style={styles.priceTagLabel}>Price </Text>

            <View style={styles.priceTag}>
              <Text style={styles.priceTagText}>${roomData.price}</Text>
              <Text style={styles.priceTagSubtext}>/night</Text>
            </View>
          </View>

          <View style={styles.roomDetailsButtonContainer}>
            <TouchableOpacity activeOpacity={0.7}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={[COLORS.PRIMARY_LIGHT, COLORS.PRIMARY]}
                style={styles.roomDetailsButton}>
                <Text style={styles.roomDetailsButtonText}>Book Now</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  roomDetailsHeader: {
    flexDirection: 'row',
    margin: 20,
  },
  backButton: {
    marginRight: 'auto',
  },
  imageHeader: {
    height: 400,
    overflow: 'hidden',
  },
  cardContainer: {
    zindex: 10,
    alignSelf: 'center',
    width: '100%',
  },
  descriptionText: {
    ...globalStyles.text,
    marginTop: 8,
  },
  priceTagContainer: {
    flexDirection: 'column',
    marginTop: 20,
  },
  priceTagLabel: {
    ...globalStyles.text,
    fontSize: 24,
  },
  priceTag: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  priceTagText: {
    ...globalStyles.bold,
    color: COLORS.PRIMARY,
    fontSize: 32,
  },
  priceTagSubtext: {
    ...globalStyles.text,
    color: 'grey',
    fontSize: 20,
  },
  roomDetailsButtonContainer: {
    width: 150,
    marginLeft: 'auto',
    marginTop: 15,
  },
  roomDetailsButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
  },
  roomDetailsButtonText: {
    ...globalStyles.text,
    fontSize: 24,
    color: 'white',
  },
});

export default RoomDetails;
