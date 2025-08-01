import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeAuth, SwiperScreen } from '../screens';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeAuth" component={HomeAuth} />
      <Stack.Screen name="SwiperScreen" component={SwiperScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
