import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ConversationScreen, LogOutScreen } from '../screens';
import ProductDetailScreen from '../screens/home/ProductDetailScreen';
import TabNavigator from './TabNavigator';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
      <Stack.Screen name="LogOutScreen" component={LogOutScreen} />
      <Stack.Screen name="ConversationScreen" component={ConversationScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
