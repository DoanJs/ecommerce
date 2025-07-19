import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  HomeCategoryScreen,
  HomeScreen,
  ProductListScreen,
  ProductMixScreen,
  SearchCategoryScreen,
} from '../screens';

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="HomeCategoryScreen" component={HomeCategoryScreen} />
      <Stack.Screen name="ProductListScreen" component={ProductListScreen} />
      <Stack.Screen name="ProductMixScreen" component={ProductMixScreen} />
      <Stack.Screen
        name="SearchCategoryScreen"
        component={SearchCategoryScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
