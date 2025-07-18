import { TickCircle } from 'iconsax-react-nativejs';
import React from 'react';
import { View } from 'react-native';
import {
  ButtonComponent,
  Container,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import { colors } from '../../constants/colors';
import { fontFamilies } from '../../constants/fontFamilies';

const SuccessfulScreen = ({ navigation }: any) => {
  return (
    <Container bg={colors.white}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TickCircle color={colors.green} variant="Linear" size={50} />
        <SpaceComponent height={40} />
        <TextComponent
          text="Successful!"
          type="bigTitle"
          size={30}
          font={fontFamilies.RobotoBold}
        />
        <TextComponent
          styles={{ maxWidth: 300, textAlign: 'center' }}
          text="You have successfully registered in our app and start working in it."
        />
      </View>
      <SectionComponent>
        <ButtonComponent
          text="Start Shopping"
          onPress={() => navigation.navigate('Main')}
          textStyles={{ color: colors.white }}
        />
      </SectionComponent>
      <SpaceComponent height={100} />
    </Container>
  );
};

export default SuccessfulScreen;
