import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Notification, ShoppingCart, User } from 'iconsax-react-nativejs';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { RowComponent, TextComponent } from '../components';
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fontFamilies';
import CartNavigator from './CartNavigator';
import HomeNavigator from './HomeNavigator';
import NotificationNavigator from './NotificationNavigator';
import ProfileNavigator from './ProfileNavigator';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  const tabBarIcon = ({ focused, size, color, route }: any) => {
    color = focused ? colors.white : colors.dark;
    size = focused ? 14 : 22;
    let icon = <Entypo size={size} color={color} name="home" />;
    let name = 'Home';
    switch (route.name) {
      case 'Cart':
        icon = <ShoppingCart variant="TwoTone" color={color} size={size} />;
        name = 'Cart';
        break;
      case 'Notification':
        icon = <Notification variant="TwoTone" color={color} size={size} />;
        name = 'Notification';
        break;
      case 'Profile':
        icon = <User variant="TwoTone" color={color} size={size} />;
        name = 'Profile';
        break;

      default:
        icon = <Entypo size={size} color={color} name="home" />;
        name = 'Home';
        break;
    }
    return (
      <RowComponent styles={focused ? localStyle.tabContainer : undefined}>
        <View style={focused ? localStyle.tabIcon : undefined}>{icon}</View>
        {focused && <TextComponent text={name} styles={localStyle.tabText} />}
      </RowComponent>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: Platform.OS === 'ios' ? 16 : 10,
        },
        tabBarIcon: ({ focused, size, color }: any) =>
          tabBarIcon({ focused, size, color, route }),
      })}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Cart" component={CartNavigator} />
      <Tab.Screen name="Notification" component={NotificationNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const localStyle = StyleSheet.create({
  tabContainer: {
    backgroundColor: colors.gray,
    height: 30,
    borderRadius: 100,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: 30,
    height: 30,
    backgroundColor: colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  tabText: {
    paddingHorizontal: 6,
    fontSize: 11,
    fontFamily: fontFamilies.poppinsMedium,
  },
});
