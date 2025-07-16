import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeAuth } from '../screens';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeAuth" component={HomeAuth} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
