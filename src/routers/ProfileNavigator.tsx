import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MessageScreen, ProfileScreen } from '../screens';

const ProfileNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
