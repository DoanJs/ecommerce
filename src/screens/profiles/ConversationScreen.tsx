import {
  ArrowLeft2,
  Camera,
  Microphone2,
  Notification,
  Send2,
} from 'iconsax-react-nativejs';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {
  CircleComponent,
  Container,
  InputComponent,
  MessageDetailComponent,
  MessageItemComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import { colors } from '../../constants/colors';
import { fontFamilies } from '../../constants/fontFamilies';

const ConversationScreen = ({ navigation }: any) => {
  const [value, setValue] = useState('');
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

        <RowComponent styles={{ paddingHorizontal: 20 }}>
          <MessageItemComponent type="none" onPress={() => {}} name="" />
          <SpaceComponent width={10} />
          <RowComponent
            styles={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              flex: 1,
            }}
          >
            <TextComponent
              text="Js"
              type="title"
              font={fontFamilies.poppinsBold}
            />
            <TextComponent
              text="Online"
              type="title"
              font={fontFamilies.poppinsRegular}
              color={colors.green2}
            />
          </RowComponent>
          <RowComponent>
            <Feather name="video" size={30} />
            <SpaceComponent width={20} />
            <Feather name="phone" size={30} />
          </RowComponent>
        </RowComponent>
      </SectionComponent>

      <SectionComponent styles={{ maxHeight: 660 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MessageDetailComponent position="right" />
          <MessageDetailComponent position="right" />
          <MessageDetailComponent position="right" />
          <MessageDetailComponent position="left" />
          <MessageDetailComponent position="left" />
          <MessageDetailComponent position="right" />
          <MessageDetailComponent position="left" />
          <MessageDetailComponent position="right" />
          <MessageDetailComponent position="left" />
          <MessageDetailComponent position="right" />
          <MessageDetailComponent position="left" />
          <TextComponent text="JS" styles={{ backgroundColor: 'coral' }} />
        </ScrollView>
      </SectionComponent>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: colors.white,
        }}
      >
        <SectionComponent>
          <RowComponent
            styles={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 10
            }}
          >
            <InputComponent
              styles={{
                paddingVertical: 10,
                borderWidth: 1,
                borderColor: colors.gray2,
                borderRadius: 100,
                paddingHorizontal: 20,
                flex: 1,
                marginBottom: 0
              }}
              placeholder="Type message..."
              placeholderTextColor={colors.dark}
              textStyles={{ color: colors.dark }}
              color={colors.white}
              prefix={<Camera color={colors.gray2} />}
              affix={
                <RowComponent>
                  <TouchableOpacity>
                    <Microphone2 color={colors.gray2} />
                  </TouchableOpacity>
                  <SpaceComponent width={16} />
                  <TouchableOpacity>
                    <Fontisto name="link2" size={20} color={colors.gray2} />
                  </TouchableOpacity>
                </RowComponent>
              }
              value={value}
              onChange={val => setValue(val)}
            />

            <SpaceComponent width={16}/>

            <TouchableOpacity
              style={{
                backgroundColor: colors.dark,
                borderRadius: 100,
                padding: 10,
              }}
            >
              <Send2 size={36} variant="Bold" color={colors.white} />
            </TouchableOpacity>
          </RowComponent>
        </SectionComponent>
      </View>
    </Container>
  );
};

export default ConversationScreen;
const localStyle = StyleSheet.create({
  swDash: {
    height: 4,
    width: 8,
    backgroundColor: colors.white,
    position: 'absolute',
    right: 12,
  },
});
