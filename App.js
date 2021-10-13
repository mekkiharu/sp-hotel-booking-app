/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {StatusBar, View} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import RoomsList from './src/scenes/RoomsList';
import RoomDetails from './src/scenes/RoomDetails';
import {COLORS} from './src/enums/colors';
import SCENES from './src/enums/scenes';
const Stack = createNativeStackNavigator();

const App = () => {
  const navigationRef = useNavigationContainerRef();
  const [routeName, setRouteName] = React.useState('');
  const activeBackgroundColor =
    routeName === SCENES.ROOM_DETAILS ? 'white' : COLORS.BACKGROUND;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: activeBackgroundColor,
      }}>
      <NavigationContainer
        ref={navigationRef}
        theme={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            primary: COLORS.PRIMARY,
            background: activeBackgroundColor,
          },
        }}
        onReady={() => setRouteName(navigationRef.getCurrentRoute().name)}
        onStateChange={() =>
          setRouteName(navigationRef.getCurrentRoute().name)
        }>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={SCENES.ROOMS} component={RoomsList} />
          <Stack.Screen name={SCENES.ROOM_DETAILS} component={RoomDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
