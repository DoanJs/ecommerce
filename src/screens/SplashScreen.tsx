import React from 'react';
import { ActivityIndicator, ImageBackground, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { globalStyles } from '../styles/globalStyles';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../assests/images/splash-image.png')}
      style={[globalStyles.container, globalStyles.center]}
      imageStyle={[localStyle.imageStyle]}
    >
      <ActivityIndicator color={colors.white} size={20} />
    </ImageBackground>
  );
};

export default SplashScreen;

const localStyle = StyleSheet.create({
  imageStyle: { flex: 1, resizeMode: 'cover' },
});
