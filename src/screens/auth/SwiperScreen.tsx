import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { Container, RowComponent, TextComponent } from '../../components';
import { colors } from '../../constants/colors';
import { fontFamilies } from '../../constants/fontFamilies';
import { sizes } from '../../constants/sizes';

const SwiperScreen = ({ navigation }: any) => {
  const [index, setIndex] = useState(0);

  return (
    <Container>
      <Swiper
        loop={false}
        onIndexChanged={num => setIndex(num)}
        showsPagination={false}
        index={index}
      >
        <Image
          style={localStyle.image}
          source={require('../../assests/images/sliders/slider-1.png')}
        />
        <Image
          style={localStyle.image}
          source={require('../../assests/images/sliders/slider-2.png')}
        />
        <Image
          style={localStyle.image}
          source={require('../../assests/images/sliders/slider-3.png')}
        />
      </Swiper>
      <View style={localStyle.swNext}>
        <RowComponent>
          {Array.from({ length: 3 }).map((_, i) => {
            return (
              <View
                key={i}
                style={i === index ? localStyle.swActiveDot : localStyle.swDot}
              />
            );
          })}
        </RowComponent>
        <TouchableOpacity
          onPress={() => {
            index < 2
              ? setIndex(index + 1)
              : navigation.navigate('LoginScreen');
          }}
        >
          <TextComponent
            text="Next"
            color={colors.dark}
            font={fontFamilies.poppinsMedium}
          />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default SwiperScreen;

const localStyle = StyleSheet.create({
  image: {
    flex: 1,
    width: sizes.with,
    height: sizes.height,
    resizeMode: 'cover',
  },
  swNext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  swDot: {
    height: 6,
    width: 6,
    borderRadius: 100,
    backgroundColor: colors.gray2,
    marginHorizontal: 2,
  },
  swActiveDot: {
    height: 6,
    width: 20,
    borderRadius: 100,
    backgroundColor: colors.dark,
    marginHorizontal: 2,
  },
});
