// react
import React from 'react';
// navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routesConstants } from '../constants/constants';
import HomeScreen from '../screens/HomeScreen';
import MovieListScreen from '../screens/MovieListScreen';
// constant
// stack
const Stack = createNativeStackNavigator();

// main
const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routesConstants.home}
      screenOptions={{
        // headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name={routesConstants.home} options={{ title: 'Home' }} component={HomeScreen} />
      <Stack.Screen name={routesConstants.movieList} options={{ title: 'Movies List' }} component={MovieListScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
