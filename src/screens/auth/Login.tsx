import { TickCircle } from 'iconsax-react-nativejs';
import React, { useState } from 'react';
import { Image } from 'react-native';
import fashions from '../../assests/images/fashions.png';
import {
  ButtonComponent,
  Container,
  InputComponent,
  SectionComponent,
  SocialLogin,
  SpaceComponent,
  TextComponent,
} from '../../components';
import { colors } from '../../constants/colors';
import { fontFamilies } from '../../constants/fontFamilies';

const Login = () => {
  const [email, setEmail] = useState('vidu1@gmail.com');
  const [password, setPassword] = useState('123456');

  return (
    <Container bg={colors.white}>
      <SectionComponent
        styles={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
      >
        <Image source={fashions} />
      </SectionComponent>

      <SectionComponent>
        <TextComponent
          text="Welcome!"
          font={fontFamilies.RobotoBold}
          type="bigTitle"
        />
        <TextComponent
          text="please login or sign up to continue our app"
          font={fontFamilies.RobotoBold}
          type="description"
          color={colors.gray2}
        />
      </SectionComponent>

      <SpaceComponent height={60} />

      <SectionComponent>
        <InputComponent
          title="Email"
          titleStyles={{ fontFamily: fontFamilies.poppinsBold }}
          textStyles={{ color: colors.dark }}
          color={colors.white}
          affix={<TickCircle variant="Bold" size={20} />}
          value={email}
          onChange={val => setEmail(val)}
        />
        <InputComponent
          title="Password"
          isPassword
          titleStyles={{ fontFamily: fontFamilies.poppinsBold }}
          textStyles={{ color: colors.dark }}
          color={colors.white}
          value={password}
          onChange={val => setPassword(val)}
        />
      </SectionComponent>
      <SpaceComponent height={26} />

      <SectionComponent>
        <ButtonComponent
          onPress={() => {}}
          text="Login"
          textStyles={{ color: colors.white }}
        />
      </SectionComponent>

      <SocialLogin />
    </Container>
  );
};

export default Login;
