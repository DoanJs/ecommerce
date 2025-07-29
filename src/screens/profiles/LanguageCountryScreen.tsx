import { ArrowLeft2, SearchNormal1 } from 'iconsax-react-nativejs';
import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import Feather from 'react-native-vector-icons/Feather';
import Bengali from '../../assests/images/Bengali.png';
import Britannica from '../../assests/images/Britannica.png';
import English from '../../assests/images/English.png';
import German from '../../assests/images/German.png';
import Portuguese from '../../assests/images/Portuguese.png';
import Canada from '../../assests/images/Canada.png';
import {
  CircleComponent,
  Container,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import { colors } from '../../constants/colors';
import { fontFamilies } from '../../constants/fontFamilies';

const LanguageCountryScreen = ({ navigation, route }: any) => {
  const { type } = route.params;
  const [languge, setLanguge] = useState('');
  const [selected, setSelected] = useState('English');
  const data = [
    {
      name: 'English',
      flag: English,
    },
    {
      name: 'Britannica',
      flag: Britannica,
    },
    {
      name: 'Bengali',
      flag: Bengali,
    },
    {
      name: 'German',
      flag: German,
    },
    {
      name: 'Portuguese',
      flag: Portuguese,
    },
  ];
  const data2 = [
    {
      name: 'Canada',
      flag: Canada,
    },
  ];
  const data3 = type === 'Language' ? data : data2.concat(data);
  return (
    <Container bg={colors.white}>
      <SectionComponent styles={{ paddingTop: 40 }}>
        <RowComponent justify="space-between">
          <CircleComponent onPress={() => navigation.goBack()}>
            <ArrowLeft2 variant="Bold" color={colors.white} size={26} />
            <View style={localStyle.swDash} />
            <SpaceComponent width={10} />
          </CircleComponent>
        </RowComponent>

        <SpaceComponent height={40} />

        <InputComponent
          placeholder={`Select ${type}`}
          placeholderTextColor={colors.gray2}
          textStyles={{ color: colors.dark }}
          color={colors.white}
          value={languge}
          onChange={val => setLanguge(val)}
          prefix={<SearchNormal1 />}
          styles={{
            borderWidth: 1,
            borderColor: colors.gray2,
            borderRadius: 100,
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        />
      </SectionComponent>

      <SectionComponent>
        <TextComponent
          text={type === 'Language' ? 'Select Language' : 'Country or Region'}
          type="bigTitle"
          font={fontFamilies.poppinsBold}
        />

        <SpaceComponent height={10} />

        <View>
          {data3.map((_, index) => (
            <Shadow
              key={index}
              distance={10}
              startColor={colors.gray4}
              endColor={colors.white}
              offset={[10, 10]}
              style={{
                borderRadius: 12,
                width: '100%',
                marginBottom: 20,
              }}
            >
              <RowComponent
                onPress={() => setSelected(_.name)}
                styles={{
                  padding: 16,
                  backgroundColor:
                    selected === _.name ? colors.dark : colors.white,
                  borderRadius: 16,
                }}
              >
                <RowComponent styles={{ flex: 1 }}>
                  <Image
                    source={_.flag}
                    style={{ height: 36, width: 36, borderRadius: 100 }}
                  />
                  <SpaceComponent width={16} />
                  <TextComponent
                    text={_.name}
                    color={selected === _.name ? colors.white : colors.dark}
                    type="title"
                  />
                </RowComponent>
                <View
                  style={{
                    height: 16,
                    width: 16,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 2,
                    borderColor:
                      selected === _.name ? colors.white : colors.gray2,
                  }}
                >
                  {selected === _.name ? (
                    <Feather name="check" color={colors.white} />
                  ) : (
                    ''
                  )}
                </View>
              </RowComponent>
            </Shadow>
          ))}
        </View>
      </SectionComponent>
    </Container>
  );
};

export default LanguageCountryScreen;
const localStyle = StyleSheet.create({
  swDash: {
    height: 4,
    width: 8,
    backgroundColor: colors.white,
    position: 'absolute',
    right: 12,
  },
});
