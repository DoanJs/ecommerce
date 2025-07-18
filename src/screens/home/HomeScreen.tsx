import {
  ArrowRight2,
  Candle2,
  SearchNormal1,
  TextalignCenter,
} from 'iconsax-react-nativejs';
import React, { useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import avatarIcon from '../../assests/images/avatarIcon.png';
import shoe from '../../assests/images/shoe.png';
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

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [focusCategory, setFocusCategory] = useState(0);
  return (
    <Container isScroll bg={colors.white}>
      <SectionComponent styles={{ paddingTop: 40 }}>
        <RowComponent justify="space-between">
          <CircleComponent width={36} height={36}>
            <TextalignCenter size={20} color={colors.white} />
          </CircleComponent>
          <View
            style={{
              width: 36,
              height: 36,
              backgroundColor: colors.gray3,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
            }}
          >
            <Image
              style={{ height: 30, width: 30 }}
              source={avatarIcon}
              resizeMode="contain"
            />
          </View>
        </RowComponent>
      </SectionComponent>

      <SectionComponent>
        <TextComponent
          text="Welcome,"
          font={fontFamilies.poppinsBold}
          size={26}
        />
        <TextComponent
          text="Our Fashions App"
          font={fontFamilies.RobotoRegular}
          size={20}
        />
      </SectionComponent>

      <SpaceComponent height={20} />

      <SectionComponent>
        <InputComponent
          textStyles={{ color: colors.dark }}
          color={colors.white}
          value={search}
          onChange={val => setSearch(val)}
          placeholder="Search..."
          styles={{ paddingLeft: 30 }}
          prefix={
            <SearchNormal1 style={{ marginRight: 10 }} color={colors.dark} />
          }
          affix={
            <CircleComponent>
              <Candle2 size={20} color={colors.white} variant="Bold" />
            </CircleComponent>
          }
        />
      </SectionComponent>

      <SpaceComponent height={20} />

      <SectionComponent>
        <RowComponent
          justify="center"
          styles={{ borderBottomWidth: 1, borderColor: colors.gray }}
        >
          <Image
            source={shoe}
            resizeMode="contain"
            style={{ height: 80, width: 80 }}
          />
          <SpaceComponent width={20} />
          <View>
            <TextComponent
              text="Axel Arigato"
              type="title"
              font={fontFamilies.poppinsBold}
            />
            <TextComponent
              text="Clean 90 Triple Sneakers"
              type="title"
              font={fontFamilies.poppinsRegular}
              color={colors.description}
            />
            <TextComponent
              text="$245.00"
              type="title"
              font={fontFamilies.poppinsBold}
            />
          </View>

          <SpaceComponent width={20} />
          <CircleComponent borderRadius={10} height={36} width={36}>
            <ArrowRight2 color={colors.white} />
          </CircleComponent>
        </RowComponent>
      </SectionComponent>

      <SpaceComponent height={20} />

      <SectionComponent>
        <TextComponent
          text="Categories"
          type="bigTitle"
          font={fontFamilies.poppinsBold}
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['Dresses', 'Jackets', 'Jeans', 'Shoese'].map((category, index) => (
            <TouchableOpacity
              key={index}
              style={{ marginRight: 10 }}
              onPress={() => setFocusCategory(index)}
            >
              <CircleComponent
                color={focusCategory === index ? colors.dark : colors.white}
                width={100}
                styles={
                  focusCategory === index
                    ? {
                        borderWidth: 1,
                        borderColor: colors.gray2,
                      }
                    : undefined
                }
              >
                <TextComponent
                  text={category}
                  color={focusCategory === index ? colors.white : colors.dark}
                  font={
                    focusCategory === index
                      ? fontFamilies.poppinsRegular
                      : fontFamilies.poppinsBold
                  }
                />
              </CircleComponent>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SectionComponent>
    </Container>
  );
};

export default HomeScreen;
