import {StyleSheet, Dimensions} from 'react-native';
import globalStyles from '../../styles/global-styles';
import {COLORS} from '../../enums/colors';

const {width} = Dimensions.get('screen');
const cardWidth = width / 1.4;

export default StyleSheet.create({
  roomCard: {
    marginTop: 20,
    width: cardWidth,
    borderRadius: 10,
    marginRight: 20,
    padding: 0,
  },
  roomDetailsCard: {
    shadowColor: 'transparent',
    elevation: 0,
  },
  cardImage: {
    width: '100%',
    height: 375,
    borderRadius: 10,
  },
  listCardDetails: {
    height: 120,
    borderRadius: 10,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    padding: 20,
    width: '100%',
  },
  cardDetails: {
    height: 120,
    borderRadius: 10,
    backgroundColor: 'white',
    width: '100%',
  },
  roomTitle: {
    ...globalStyles.bold,
    fontSize: 22,
  },
  price: {
    ...globalStyles.bold,
    fontSize: 24,
  },
  priceSubText: {
    color: 'grey',
    fontSize: 20,
  },
  roomDataContainer: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  roomFeaturesText: {
    ...globalStyles.text,
    marginLeft: 4,
  },
});
