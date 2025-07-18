import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  ButtonComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '.';
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fontFamilies';

const SocialLogin = () => {
  return (
    <SectionComponent styles={{ alignItems: 'center', marginBottom: 40 }}>
      <TextComponent
        text="OR"
        color={colors.gray2}
        size={16}
        font={fontFamilies.poppinsRegular}
        styles={{
          textAlign: 'center',
        }}
      />

      <SpaceComponent height={10} />

      <RowComponent>
        <ButtonComponent
          text="Continue with Facebook"
          onPress={() => {}}
          color={colors.blue}
          styles={{ flex: 1 }}
          textStyles={{ color: colors.white }}
          prefix={
            <Entypo
              name="facebook-with-circle"
              size={20}
              color={colors.white}
              style={{ marginRight: 10 }}
            />
          }
        />
      </RowComponent>
      <SpaceComponent height={10} />

      <RowComponent>
        <ButtonComponent
          text="Continue with Google"
          onPress={() => {}}
          color={colors.white}
          styles={{ flex: 1 }}
          textStyles={{ color: colors.gray2 }}
          prefix={
            <AntDesign
              name="google"
              size={20}
              color={colors.dark}
              style={{ marginRight: 10 }}
            />
          }
        />
        <SpaceComponent width={20} />
      </RowComponent>
      <SpaceComponent height={10} />

      <RowComponent>
        <ButtonComponent
          text="Continue with Apple"
          onPress={() => {}}
          color={colors.white}
          styles={{ flex: 1 }}
          textStyles={{ color: colors.gray2 }}
          prefix={
            <Entypo
              name="app-store"
              size={20}
              color={colors.dark}
              style={{ marginRight: 10 }}
            />
          }
        />
        <SpaceComponent width={30} />
      </RowComponent>
    </SectionComponent>
  );
};

export default SocialLogin;
