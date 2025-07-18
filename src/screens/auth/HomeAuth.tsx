import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { ButtonComponent, SectionComponent } from '../../components';
import SpaceConponent from '../../components/SpaceComponent';
import { colors } from '../../constants/colors';
import { globalStyles } from '../../styles/globalStyles';

const HomeAuth = ({ navigation }: any) => {
  return (
    <ImageBackground
      style={[globalStyles.container]}
      source={require('../../assests/images/bg-login.png')}
      imageStyle={[localStyle.imageStyle]}
    >
      <View style={[localStyle.viewBlank]} />
      <SectionComponent styles={[localStyle.haSection]}>
        <ButtonComponent
          text="Login"
          onPress={() =>
            navigation.navigate('SwiperScreen', { screen: 'Login' })
          }
          color={colors.white}
        />
        <SpaceConponent height={16} />
        <ButtonComponent
          text="Sign Up"
          onPress={() =>
            navigation.navigate('SwiperScreen', { screen: 'Sign Up' })
          }
          color="transparent"
          styles={[localStyle.haBtn]}
          textStyles={{ color: colors.white }}
        />
      </SectionComponent>
    </ImageBackground>
  );
};

export default HomeAuth;
const localStyle = StyleSheet.create({
  imageStyle: { flex: 1, resizeMode: 'cover' },
  viewBlank: {
    flex: 1,
  },
  haSection: { paddingVertical: 50 },
  haBtn: { borderWidth: 1, borderColor: colors.white },
});
