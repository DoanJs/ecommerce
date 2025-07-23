import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TabNavigator from './TabNavigator';
import ProductDetailScreen from '../screens/home/ProductDetailScreen';
import { LogOutScreen } from '../screens';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
      <Stack.Screen name="LogOutScreen" component={LogOutScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
