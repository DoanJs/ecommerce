import CheckBox from '@react-native-community/checkbox';
import { TickCircle } from 'iconsax-react-nativejs';
import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import fashions from '../../assests/images/fashions.png';
import {
  ButtonComponent,
  Container,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import { colors } from '../../constants/colors';
import { fontFamilies } from '../../constants/fontFamilies';

const Register = ({ navigation }: any) => {
  const [user, setUser] = useState('user');
  const [email, setEmail] = useState('vidu1@gmail.com');
  const [password, setPassword] = useState('123456');
  const [confirmPassword, setConfirmPassword] = useState('123456');
  const [checked, setChecked] = useState(false);

  return (
    <Container bg={colors.white}>
      <SectionComponent
        styles={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
      >
        <Image source={fashions} />
      </SectionComponent>

      <SectionComponent>
        <TextComponent
          text="Sign Up!"
          font={fontFamilies.RobotoBold}
          type="bigTitle"
        />
        <TextComponent
          text="Create an new account"
          font={fontFamilies.RobotoBold}
          type="description"
          color={colors.gray2}
        />
      </SectionComponent>

      <SpaceComponent height={60} />

      <SectionComponent>
        <InputComponent
          title="User Name"
          titleStyles={{ fontFamily: fontFamilies.poppinsBold }}
          textStyles={{ color: colors.dark }}
          color={colors.white}
          affix={<TickCircle variant="Bold" size={20} />}
          value={user}
          onChange={val => setUser(val)}
        />
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
        <InputComponent
          title="Confirm Password"
          isPassword
          titleStyles={{ fontFamily: fontFamilies.poppinsBold }}
          textStyles={{ color: colors.dark }}
          color={colors.white}
          value={confirmPassword}
          onChange={val => setConfirmPassword(val)}
        />
      </SectionComponent>
      <SpaceComponent height={26} />

      <SectionComponent>
        <RowComponent
          styles={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <CheckBox
            value={checked}
            onValueChange={setChecked}
            tintColors={{ true: colors.gray2, false: colors.gray2 }}
          />
          <SpaceComponent width={10} />
          <TouchableOpacity onPress={() => setChecked(!checked)}>
            <TextComponent
              styles={{ maxWidth: 380 }}
              color={colors.gray2}
              text="By creating an account you have to agree with our them & condication"
            />
          </TouchableOpacity>
        </RowComponent>
      </SectionComponent>

      <SectionComponent>
        <ButtonComponent
          onPress={() => navigation.navigate('SuccessfulScreen')}
          text="Register"
          textStyles={{ color: colors.white }}
        />
      </SectionComponent>
      <SpaceComponent height={26} />
    </Container>
  );
};

export default Register;
