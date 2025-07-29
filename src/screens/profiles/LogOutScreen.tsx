import {
  ArrowLeft2,
  Edit2,
  GlobalSearch,
  MessageQuestion,
  Moon,
  Notification1,
} from 'iconsax-react-nativejs';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import clothes from '../../assests/images/clothes.png';
import {
  ButtonComponent,
  CircleComponent,
  Container,
  ProfileItemComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import { colors } from '../../constants/colors';
import { fontFamilies } from '../../constants/fontFamilies';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LogOutScreen = ({ navigation }: any) => {
  const data = [
    {
      title: 'Name',
      value: 'FsCreation',
    },
    {
      title: 'Gender',
      value: '',
    },
    {
      title: 'Age',
      value: '22 Year',
    },
    {
      title: 'Email',
      value: 'FsCreation441@gmail.com',
    },
  ];

  const data2 = [
    {
      icon: <GlobalSearch variant="Bold" />,
      text: 'Language',
      value: 'English',
    },
    {
      icon: <GlobalSearch variant="Bold" />,
      text: 'Country or Region',
      value: 'Canada',
    },
    {
      icon: <Notification1 variant="Bold" />,
      text: 'Notification',
    },
    {
      icon: <Moon variant="Bold" />,
      text: 'Dark Mood',
      value: 'off',
    },
    {
      icon: <MessageQuestion variant="Bold" />,
      text: 'Help Center',
    },
  ];

  const [gender, setGender] = useState('male');
  return (
    <Container bg={colors.white}>
      <SectionComponent styles={{ paddingTop: 40 }}>
        <CircleComponent onPress={() => navigation.goBack()}>
          <ArrowLeft2 variant="Bold" color={colors.white} size={26} />
          <View style={localStyle.swDash} />
          <SpaceComponent width={10} />
        </CircleComponent>
      </SectionComponent>

      <RowComponent
        styles={{
          flexDirection: 'column',
          justifyContent: 'center',
          height: '20%',
        }}
      >
        <View style={{ borderRadius: 16, width: 100, height: 100 }}>
          <Image
            source={clothes}
            style={{ borderRadius: 16, height: 100, width: 100 }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: colors.white,
              position: 'absolute',
              padding: 6,
              borderRadius: 4,
              right: -6,
              bottom: -6,
            }}
          >
            <Edit2 size={12} variant="Bold" />
          </TouchableOpacity>
        </View>
        <TextComponent
          text="Upload image"
          type="title"
          font={fontFamilies.poppinsBold}
        />
      </RowComponent>

      <SectionComponent>
        <RowComponent>
          <RowComponent
            styles={{ flexDirection: 'column', alignItems: 'flex-start' }}
          >
            {data.map((_, index) => (
              <TextComponent
                key={index}
                text={_.title}
                type="description"
                font={fontFamilies.poppinsBold}
                color={colors.gray2}
                styles={{ marginBottom: 20 }}
              />
            ))}
          </RowComponent>

          <View style={{ width: 50 }} />

          <RowComponent
            styles={{
              flexDirection: 'column',
              flex: 1,
              alignItems: 'flex-start',
            }}
          >
            {data.map((_, index) =>
              _.title === 'Gender' ? (
                <RowComponent key={index} styles={{ marginBottom: 10 }}>
                  <CircleComponent
                    onPress={() => setGender('male')}
                    borderRadius={10}
                    styles={{ width: 100 }}
                    color={gender === 'male' ? colors.dark : colors.white}
                  >
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor:
                          gender === 'male' ? colors.white : colors.gray2,
                        padding: 2,
                        borderRadius: 100,
                      }}
                    >
                      <View
                        style={{
                          width: 6,
                          height: 6,
                          backgroundColor: colors.white,
                          borderRadius: 100,
                        }}
                      />
                    </View>

                    <SpaceComponent width={4} />

                    <TextComponent
                      text="Male"
                      color={gender === 'male' ? colors.white : colors.gray2}
                    />
                  </CircleComponent>
                  <SpaceComponent width={10} />
                  <CircleComponent
                    onPress={() => setGender('Female')}
                    borderRadius={10}
                    styles={{
                      width: 100,
                      borderWidth: 1,
                      borderColor:
                        gender === 'Female' ? colors.dark : colors.gray2,
                    }}
                    color={gender === 'Female' ? colors.dark : colors.white}
                  >
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor:
                          gender === 'Female' ? colors.white : colors.gray2,
                        padding: 2,
                        borderRadius: 100,
                      }}
                    >
                      <View
                        style={{
                          width: 6,
                          height: 6,
                          backgroundColor: colors.white,
                          borderRadius: 100,
                        }}
                      />
                    </View>

                    <SpaceComponent width={4} />

                    <TextComponent
                      text="Female"
                      color={gender === 'Female' ? colors.white : colors.gray2}
                      font={
                        gender === 'Female'
                          ? fontFamilies.poppinsRegular
                          : fontFamilies.poppinsBold
                      }
                    />
                  </CircleComponent>
                </RowComponent>
              ) : (
                <TextComponent
                  key={index}
                  text={_.value}
                  type="description"
                  font={fontFamilies.poppinsBold}
                  color={colors.dark}
                  styles={{
                    flex: 1,
                    borderBottomWidth: 1,
                    borderColor: colors.gray2,
                    paddingLeft: 20,
                    width: '100%',
                    marginBottom: 20,
                  }}
                />
              ),
            )}
          </RowComponent>
        </RowComponent>
      </SectionComponent>

      <SpaceComponent height={20} />

      <SectionComponent>
        <TextComponent
          text="Settings"
          type="bigTitle"
          font={fontFamilies.poppinsBold}
        />

        <RowComponent
          styles={{
            borderWidth: 1,
            borderColor: colors.gray2,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 16,
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <ScrollView>
            {data2.map((_, index) => (
              <ProfileItemComponent
                key={index}
                text={_.text}
                icon={_.icon}
                onPress={() =>
                  navigation.navigate(
                    _.text === 'Language' || _.text === 'Country or Region'
                      ? 'LanguageCountryScreen'
                      : `${_.text}CountryScreen`,
                    {
                      type: _.text,
                    },
                  )
                }
                arrowRight={_.text !== 'Notification' && _.text !== 'Dark Mood'}
                checkRadio={_.text === 'Notification' || _.text === 'Dark Mood'}
                title={
                  _.text === 'Language' ||
                  _.text === 'Country or Region' ||
                  _.text === 'Dark Mood' ? (
                    <TextComponent
                      text={_.value ?? ''}
                      flex={1}
                      styles={{ textAlign: 'right', marginRight: 16 }}
                      size={10}
                      font={fontFamilies.poppinsBold}
                      color={colors.gray2}
                    />
                  ) : undefined
                }
              />
            ))}
          </ScrollView>
        </RowComponent>
      </SectionComponent>

      <SectionComponent>
        <ButtonComponent
          text="Log Out"
          onPress={() => {}}
          textStyles={{
            color: colors.white,
            fontFamily: fontFamilies.poppinsRegular,
          }}
          styles={{ borderRadius: 10 }}
          prefix={
            <Ionicons
              name="log-out"
              color={colors.white}
              size={26}
              style={{ marginRight: 16 }}
            />
          }
        />
      </SectionComponent>
    </Container>
  );
};

export default LogOutScreen;
const localStyle = StyleSheet.create({
  swDash: {
    height: 4,
    width: 8,
    backgroundColor: colors.white,
    position: 'absolute',
    right: 12,
  },
});
