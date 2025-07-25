import {
  ArrowLeft2,
  Notification,
  SearchNormal1,
} from 'iconsax-react-nativejs';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  CircleComponent,
  Container,
  InputComponent,
  MessageItemComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import { colors } from '../../constants/colors';
import { fontFamilies } from '../../constants/fontFamilies';

const MessageScreen = ({ navigation }: any) => {
  const data = [
    'Kristine',
    'Kay',
    'Cheryl',
    'Jeen',
    'Js',
    'Catture',
    'ManTosage',
  ];
  return (
    <Container bg={colors.white}>
      <SectionComponent styles={{ paddingTop: 40 }}>
        <RowComponent justify="space-between">
          <CircleComponent onPress={() => navigation.goBack()}>
            <ArrowLeft2 variant="Bold" color={colors.white} size={26} />
            <View style={localStyle.swDash} />
            <SpaceComponent width={10} />
          </CircleComponent>
          <RowComponent>
            <TouchableOpacity style={{ borderRadius: 100, padding: 10 }}>
              <Notification color={colors.dark} />
              <View
                style={{
                  position: 'absolute',
                  right: 4,
                  top: 0,
                  height: 18,
                  width: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 100,
                  backgroundColor: colors.dark,
                }}
              >
                <TextComponent
                  text="3"
                  size={10}
                  color={colors.white}
                  type="description"
                  font={fontFamilies.poppinsBold}
                />
              </View>
            </TouchableOpacity>
            <SpaceComponent width={6} />
            <TouchableOpacity>
              <Entypo
                name="dots-three-vertical"
                color={colors.dark}
                size={20}
              />
            </TouchableOpacity>
          </RowComponent>
        </RowComponent>

        <SpaceComponent height={40} />

        <InputComponent
          styles={{
            borderWidth: 1,
            borderColor: colors.gray2,
            borderRadius: 100,
            paddingVertical: 16,
            paddingHorizontal: 24,
          }}
          textStyles={{ color: colors.dark }}
          color={colors.white}
          placeholder="Search..."
          placeholderTextColor={colors.description}
          prefix={
            <SearchNormal1 color={colors.dark} style={{ marginRight: 10 }} />
          }
          value={''}
          onChange={val => val}
        />
      </SectionComponent>

      <ScrollView showsVerticalScrollIndicator={false}>
        <SectionComponent>
          <TextComponent
            text="Activities"
            font={fontFamilies.poppinsBold}
            type="title"
          />
          <SpaceComponent height={10} />

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <RowComponent>
              {data.map((_, index) => (
                <MessageItemComponent
                  onPress={() => navigation.navigate('ConversationScreen')}
                  name={_}
                  type="active"
                  key={index}
                />
              ))}
            </RowComponent>
          </ScrollView>
        </SectionComponent>

        <SectionComponent>
          <TextComponent
            text="Messages"
            font={fontFamilies.poppinsBold}
            type="title"
          />
          <SpaceComponent height={10} />
          <RowComponent styles={{ flexDirection: 'column' }}>
            {data.map((_, index) => (
              <MessageItemComponent
                onPress={() => navigation.navigate('ConversationScreen')}
                name={_}
                type="message"
                key={index}
              />
            ))}
          </RowComponent>
        </SectionComponent>
      </ScrollView>
    </Container>
  );
};

export default MessageScreen;
const localStyle = StyleSheet.create({
  swDash: {
    height: 4,
    width: 8,
    backgroundColor: colors.white,
    position: 'absolute',
    right: 12,
  },
});
