import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Notification, ShoppingCart, User } from 'iconsax-react-nativejs';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { colors } from '../constants/colors';
import CartNavigator from './CartNavigator';
import HomeNavigator from './HomeNavigator';
import NotificationNavigator from './NotificationNavigator';
import ProfileNavigator from './ProfileNavigator';
import { RowComponent, TextComponent } from '../components';
import SpaceConponent from '../components/SpaceComponent';
import { fontFamilies } from '../constants/fontFamilies';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

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
          paddingTop: 10,
        },
        tabBarIcon: ({ focused, size, color }: any) => {
          color = focused ? colors.white : colors.dark;
          size = focused ? 14 : 22;
          let icon = <Entypo size={size} color={color} name="home" />;
          let name = 'Home';
          switch (route.name) {
            case 'Cart':
              icon = (
                <ShoppingCart variant="TwoTone" color={color} size={size} />
              );
              name = 'Cart';
              break;
            case 'Notification':
              icon = (
                <Notification variant="TwoTone" color={color} size={size} />
              );
              name = 'Notification';
              break;
            case 'Profile':
              icon = <User variant="TwoTone" color={color} size={size} />;
              name = 'Profile';
              break;

            default:
              icon = <Entypo size={size} color={color} name='home' />;
              name = 'Home';
              break;
          }
          return (
            <RowComponent
              styles={
                focused
                  ? {
                      backgroundColor: colors.gray,
                      height: 30,
                      borderRadius: 100,
                      width: 90,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }
                  : undefined
              }
            >
              <View style={focused ? localStyle.iconContainer : undefined}>
                {icon}
              </View>
              {focused && (
                <TextComponent
                  text={name}
                  styles={{
                    paddingHorizontal: 6,
                    fontSize: 11,
                    fontFamily: fontFamilies.poppinsMedium,
                  }}
                />
              )}
            </RowComponent>
          );
        },
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
  iconContainer: {
    width: 30,
    height: 30,
    backgroundColor: colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});
