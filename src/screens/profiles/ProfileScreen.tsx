import {
  Bag,
  BrifecaseTick,
  Car,
  Card,
  Heart,
  Message2,
  Setting2,
  User,
  Warning2,
} from 'iconsax-react-nativejs';
import React from 'react';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import clothes from '../../assests/images/clothes.png';
import {
  Container,
  ProfileItemComponent,
  RowComponent,
  SectionComponent,
  TextComponent,
} from '../../components';
import { colors } from '../../constants/colors';
import { fontFamilies } from '../../constants/fontFamilies';

const ProfileScreen = ({ navigation }: any) => {
  const data = [
    {
      icon: <User variant="Bold" size={20} />,
      text: 'Personal Details',
      screen: 'ProfileScreen',
    },
    {
      icon: <Message2 variant="Bold" size={20} />,
      text: 'Message',
      screen: 'MessageScreen',
    },
    {
      icon: <Bag variant="Bold" size={20} />,
      text: 'My Order',
      screen: 'CartScreen',
    },
    {
      icon: <Heart variant="Bold" size={20} />,
      text: 'My Favourites',
      screen: 'Js',
    },
    {
      icon: <Car variant="Bold" size={20} />,
      text: 'Shipping Address',
      screen: 'Js',
    },
    {
      icon: <Card variant="Bold" size={20} />,
      text: 'My Card',
      screen: 'Js',
    },
    {
      icon: <Setting2 variant="Bold" size={20} />,
      text: 'Settings',
      screen: 'Js',
    },
  ];

  const data2 = [
    {
      icon: <Warning2 variant="Bold" size={20} />,
      text: 'FAQs',
      screen: 'Js',
    },
    {
      icon: <BrifecaseTick variant="Bold" size={20} />,
      text: 'Privacy Policy',
      screen: 'Js',
    },
  ];
  return (
    <Container bg={colors.white}>
      <SectionComponent styles={{ paddingTop: 40 }}>
        <RowComponent justify="flex-end">
          <TouchableOpacity
            onPress={() => navigation.navigate('LogOutScreen')}
            style={{
              width: 36,
              height: 36,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
            }}
          >
            <Setting2 />
          </TouchableOpacity>
        </RowComponent>
      </SectionComponent>

      <SectionComponent>
        <Shadow
          offset={[0, 12]}
          distance={10}
          startColor={colors.gray}
          endColor={colors.white}
          style={{
            backgroundColor: colors.white,
            width: '100%',
            borderRadius: 16,
            padding: 10,
          }}
        >
          <RowComponent>
            <Image
              source={clothes}
              style={{
                width: 80,
                height: 80,
                borderRadius: 16,
                marginRight: 16,
              }}
            />

            <RowComponent
              styles={{ flexDirection: 'column', alignItems: 'flex-start' }}
            >
              <TextComponent
                text="Fscreation"
                type="bigTitle"
                font={fontFamilies.poppinsBold}
              />
              <TextComponent
                text="Fscreation441@gmail.com"
                type="description"
                color={colors.gray2}
                font={fontFamilies.poppinsRegular}
              />
            </RowComponent>
          </RowComponent>
        </Shadow>
      </SectionComponent>

      <ScrollView showsVerticalScrollIndicator={false}>
        <SectionComponent>
          <RowComponent
            styles={{
              borderWidth: 1,
              borderColor: colors.gray2,
              paddingHorizontal: 20,
              paddingVertical: 30,
              borderRadius: 16,
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            {data.map((_, index) => (
              <ProfileItemComponent
                onPress={() => navigation.navigate(_.screen)}
                key={index}
                text={_.text}
                icon={_.icon}
                arrowRight
              />
            ))}
          </RowComponent>
        </SectionComponent>

        <SectionComponent>
          <RowComponent
            styles={{
              borderWidth: 1,
              borderColor: colors.gray2,
              paddingHorizontal: 20,
              paddingVertical: 30,
              borderRadius: 16,
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            {data2.map((_, index) => (
              <ProfileItemComponent
                onPress={() => {}}
                key={index}
                icon={_.icon}
                text={_.text}
              />
            ))}
          </RowComponent>
        </SectionComponent>
      </ScrollView>
    </Container>
  );
};

export default ProfileScreen;
// const localStyle = StyleSheet.create({
//   swDash: {
//     height: 4,
//     width: 8,
//     backgroundColor: colors.white,
//     position: 'absolute',
//     right: 12,
//   },
// });
