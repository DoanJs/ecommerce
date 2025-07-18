import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import slider_1 from '../../assests/images/sliders/slider-1.png';
import slider_2 from '../../assests/images/sliders/slider-2.png';
import slider_3 from '../../assests/images/sliders/slider-3.png';
import { CircleComponent, Container, RowComponent } from '../../components';
import SpaceConponent from '../../components/SpaceComponent';
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/sizes';

const SwiperScreen = ({ navigation, route }: any) => {
  const { screen } = route.params;
  const [index, setIndex] = useState(0);

  return (
    <Container>
      <Swiper
        loop={false}
        onIndexChanged={num => setIndex(num)}
        showsPagination={false}
        index={index}
      >
        <Image style={localStyle.image} source={slider_1} />
        <Image style={localStyle.image} source={slider_2} />
        <Image style={localStyle.image} source={slider_3} />
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

        <CircleComponent
          onPress={() => {
            index < 2
              ? setIndex(index + 1)
              : screen && screen === 'Login'
              ? navigation.navigate('Login')
              : navigation.navigate('Register');
          }}
        >
          <View style={localStyle.swDash} />
          <SpaceConponent width={4} />
          <FontAwesome6 name="play" color={colors.white} size={18} />
        </CircleComponent>
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
  swDash: {
    height: 4,
    width: 8,
    backgroundColor: colors.white,
  },
});
