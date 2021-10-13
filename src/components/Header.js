import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={{paddingBottom: 4}}>
        <Text style={styles.greetingText}>Hi, Person A</Text>
      </View>

      <View>
        <Text style={styles.greetingSubtext}>
          Let's find you a place to stay!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  greetingText: {
    color: '#3485DE',
    fontWeight: 'bold',
    fontSize: 32,
  },
  greetingSubtext: {
    color: 'grey',
    fontSize: 20,
  },
  headerContainer: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
});

export default Header;
