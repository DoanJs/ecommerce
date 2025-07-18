import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  HomeAuth,
  Login,
  Register,
  SuccessfulScreen,
  SwiperScreen,
} from '../screens';
import TabNavigator from './TabNavigator';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeAuth" component={HomeAuth} />
      <Stack.Screen name="SwiperScreen" component={SwiperScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="SuccessfulScreen" component={SuccessfulScreen} />
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
