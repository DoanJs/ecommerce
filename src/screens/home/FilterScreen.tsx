import {
  ArrowLeft2,
  SearchNormal1,
  Star1,
  TickCircle,
  Ticket2,
} from 'iconsax-react-nativejs';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ButtonComponent,
  CircleComponent,
  Container,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import { colors } from '../../constants/colors';
import { fontFamilies } from '../../constants/fontFamilies';

import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { sizes } from '../../constants/sizes';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const FilterScreen = ({ navigation }: any) => {
  const data = [
    'Dresses',
    'Jackets',
    'Jeans',
    'Shoese',
    'Bags',
    'Clothes',
    'Jeanthes',
    'Shorts',
    'Tops',
    'Sneakers',
    'Cots',
    'Lingenies',
  ];
  const data2 = ['New Today', 'New This Week', 'Top Sellers'];
  const data3 = [5, 4, 3, 2, 1];
  const [categoried, setCategoried] = useState('Dresses');
  const [sortBy, setSortBy] = useState('New Today');
  const [range, setRange] = useState([0, 750]);
  const [star, setStar] = useState(5);

  const { width } = Dimensions.get('window');
  const SLIDER_WIDTH = width - 60;
  const MAX_VALUE = 1750;

  const [minValue, maxValue] = range;
  const leftPercent = minValue / MAX_VALUE;
  const rightPercent = maxValue / MAX_VALUE;
  const imageLeft = leftPercent * SLIDER_WIDTH;
  const imageWidth = (rightPercent - leftPercent) * SLIDER_WIDTH;

  return (
    <Container bg={colors.white}>
      <SectionComponent styles={{ paddingTop: 40 }}>
        <RowComponent justify="space-between">
          <CircleComponent onPress={() => navigation.goBack()}>
            <ArrowLeft2 variant="Bold" color={colors.white} size={26} />
            <View style={localStyle.swDash} />
            <SpaceComponent width={10} />
          </CircleComponent>
          <TouchableOpacity
            onPress={() => navigation.navigate('Main', {
                screen: 'Home',
                params: {
                    screen: 'SearchCategoryScreen'
                }
                
            })}
          >
            <SearchNormal1 color={colors.dark} />
          </TouchableOpacity>
        </RowComponent>
      </SectionComponent>

      <SectionComponent>
        <TextComponent
          text="Categories"
          type="bigTitle"
          font={fontFamilies.poppinsBold}
        />
        <RowComponent styles={{ flexWrap: 'wrap' }}>
          {data.map((_, index) => (
            <CircleComponent
              onPress={() => setCategoried(_)}
              key={index}
              height={36}
              color={_ === categoried ? colors.dark : colors.white}
              styles={{
                borderWidth: 1,
                borderColor: colors.gray2,
                marginRight: 10,
                marginBottom: 10,
                paddingHorizontal: 16,
                width: 'auto',
              }}
            >
              <TextComponent
                text={_}
                font={
                  _ === categoried
                    ? fontFamilies.poppinsRegular
                    : fontFamilies.poppinsBold
                }
                color={_ === categoried ? colors.white : colors.dark}
              />
            </CircleComponent>
          ))}
        </RowComponent>
      </SectionComponent>

      <SectionComponent>
        <TextComponent
          text="Price Range"
          type="bigTitle"
          font={fontFamilies.poppinsBold}
        />

        <View style={[localStyle.sliderWrapper]}>
          <Image
            source={require('../../assests/images/cloud.png')}
            style={[
              localStyle.waveBackground,
              {
                width: sizes.with - 60,
              },
            ]}
            resizeMode="stretch"
          />

          {/* Lớp phủ bên trái */}
          <View
            style={[localStyle.sideOverlay, { left: 0, width: imageLeft }]}
          />
          {/* Lớp phủ bên phải */}
          <View
            style={[
              localStyle.sideOverlay,
              {
                left: imageLeft + imageWidth,
                width: SLIDER_WIDTH - (imageLeft + imageWidth),
              },
            ]}
          />

          <MultiSlider
            values={range}
            sliderLength={sizes.with - 60}
            onValuesChange={setRange}
            min={0}
            max={1750}
            step={10}
            selectedStyle={{ backgroundColor: colors.dark, height: 2 }}
            unselectedStyle={{ backgroundColor: colors.gray2, height: 2 }}
            markerStyle={localStyle.marker}
            containerStyle={{ zIndex: 2 }}
            customMarker={e => (
              <RowComponent
                styles={{
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  bottom: -12,
                  right: -8,
                }}
              >
                <View
                  style={{
                    height: 16,
                    width: 16,
                    borderRadius: 100,
                    borderWidth: 2,
                    backgroundColor: colors.white,
                  }}
                />
                <TextComponent
                  text={`$${e.currentValue}`}
                  font={fontFamilies.poppinsBold}
                />
              </RowComponent>
            )}
          />
        </View>

        <RowComponent
          justify="space-between"
          styles={{
            width: sizes.with - 60,
          }}
        >
          <TextComponent
            text={`$0`}
            font={fontFamilies.poppinsBold}
            color={colors.gray2}
          />
          <TextComponent
            text={`$1750`}
            font={fontFamilies.poppinsBold}
            color={colors.gray2}
          />
        </RowComponent>
      </SectionComponent>

      <SectionComponent>
        <TextComponent
          text="Sort by"
          font={fontFamilies.poppinsBold}
          type="bigTitle"
        />
        <SpaceComponent height={10} />
        <RowComponent>
          {data2.map((_, index) => (
            <CircleComponent
              onPress={() => setSortBy(_)}
              height={36}
              key={index}
              color={sortBy === _ ? colors.dark : colors.white}
              styles={{
                width: 'auto',
                paddingHorizontal: 16,
                marginRight: 10,
                borderWidth: 1,
                borderColor: sortBy === _ ? colors.dark : colors.gray2,
              }}
            >
              <TextComponent
                color={sortBy === _ ? colors.white : colors.dark}
                text={_}
                font={
                  sortBy === _
                    ? fontFamilies.poppinsRegular
                    : fontFamilies.poppinsBold
                }
              />
            </CircleComponent>
          ))}
        </RowComponent>
      </SectionComponent>

      <SectionComponent>
        <TextComponent
          text="Ratting"
          type="bigTitle"
          font={fontFamilies.poppinsBold}
        />
        {data3.map((numberStar, ind) => (
          <RowComponent
            justify="space-between"
            key={ind}
            styles={{ marginBottom: 16 }}
          >
            <RowComponent>
              {Array.from({ length: numberStar }).map((_, index) => (
                <FontAwesome
                  key={index}
                  name="star"
                  size={16}
                  color={colors.star}
                  style={{ marginRight: 10 }}
                />
              ))}
            </RowComponent>
            <TouchableOpacity
              onPress={() => setStar(numberStar)}
              style={{
                height: 16,
                width: 16,
                borderRadius: 100,
                backgroundColor:
                  star === numberStar ? colors.dark : colors.gray3,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {star === numberStar && (
                <Feather name="check" color={colors.white} size={10} />
              )}
            </TouchableOpacity>
          </RowComponent>
        ))}
      </SectionComponent>

      <View style={{ position: 'absolute', right: 0, left: 0, bottom: 10 }}>
        <SectionComponent>
          <ButtonComponent
            text="Apply Now"
            onPress={() => {}}
            textStyles={{ color: colors.white }}
          />
        </SectionComponent>
      </View>
    </Container>
  );
};

export default FilterScreen;
const localStyle = StyleSheet.create({
  swDash: {
    height: 4,
    width: 8,
    backgroundColor: colors.white,
    position: 'absolute',
    right: 12,
  },
  marker: {
    height: 16,
    width: 16,
    borderRadius: 100,
    backgroundColor: colors.white,
    borderColor: colors.dark,
    borderWidth: 2,
  },
  sliderWrapper: {
    width: sizes.with - 60,
    height: 80,
    justifyContent: 'center',
  },
  sideOverlay: {
    position: 'absolute',
    top: 10,
    height: 80,
    backgroundColor: 'white',
  },
  waveBackground: {
    position: 'absolute',
    top: 10,
    height: 30,
    width: sizes.with - 60,
    opacity: 0.3,
  },
});
