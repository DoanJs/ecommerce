import { ArrowLeft2, Bag2, Heart } from 'iconsax-react-nativejs';
import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import Swiper from 'react-native-swiper';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import shoe02 from '../../assests/images/shoe02.png';
import {
  ButtonComponent,
  CircleComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import Container from '../../components/Container';
import { colors } from '../../constants/colors';
import { fontFamilies } from '../../constants/fontFamilies';

const data = {
  clothes: {
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [colors.white, colors.dark, colors.green, colors.star],
  },
  bag: {
    sizes: ['S', 'M', 'L'],
    colors: [colors.gray2, colors.gray5, colors.dark, colors.white],
  },
  shoe: {
    sizes: ['39', '39.5', '40', '40.5', '41', '41.5', '42', '42.5', '43'],
    colors: [colors.white, colors.gray5, colors.dark, colors.blue],
  },
};

const ProductDetailScreen = ({ navigation, route }: any) => {
  const { type } = route.params;
  const [index, setIndex] = useState(0);
  const [size, setSize] = useState('S');
  const [color, setColor] = useState('white');
  const options =
    type && type === 'shoe'
      ? data.shoe
      : type === 'bag'
      ? data.bag
      : data.clothes;

  const colorOptions = [
    { color: 'white', value: colors.white },
    { color: 'dark', value: colors.dark },
    { color: 'green', value: colors.green },
    { color: 'star', value: colors.star },
  ];
  return (
    <Container bg={colors.gray4}>
      <SectionComponent
        styles={{
          paddingTop: 40,
          marginBottom: 0,
        }}
      >
        <RowComponent justify="space-between">
          <CircleComponent onPress={() => navigation.goBack()}>
            <ArrowLeft2 variant="Bold" color={colors.white} size={26} />
            <View style={localStyle.swDash} />
            <SpaceComponent width={10} />
          </CircleComponent>
          <TouchableOpacity>
            <View
              style={{
                padding: 10,
                backgroundColor: colors.white,
                borderRadius: 100,
              }}
            >
              <Bag2 color={colors.dark} />
              <View
                style={{
                  position: 'absolute',
                  right: 0,
                  top: -8,
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
            </View>
          </TouchableOpacity>
        </RowComponent>
      </SectionComponent>

      <View style={{ width: '100%', height: '40%', paddingVertical: 32 }}>
        <Swiper
          loop={false}
          onIndexChanged={num => setIndex(num)}
          showsPagination={false}
          index={index}
        >
          <Image style={localStyle.image} source={shoe02} />
          <Image style={localStyle.image} source={shoe02} />
          <Image style={localStyle.image} source={shoe02} />
        </Swiper>

        <RowComponent justify="center">
          {Array.from({ length: 3 }).map((_, i) => {
            return (
              <View
                key={i}
                style={[
                  {
                    marginHorizontal: 4,
                  },
                  i === index ? localStyle.swActiveDot : undefined,
                ]}
              >
                <View style={localStyle.swDot} />
              </View>
            );
          })}
        </RowComponent>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 32,
            right: 16,
            padding: 6,
            borderRadius: 100,
            backgroundColor: colors.white,
          }}
        >
          <Heart color={colors.dark} size={16} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: colors.white,
          flex: 1,
          borderTopLeftRadius: 26,
          borderTopRightRadius: 26,
          paddingVertical: 32,
        }}
      >
        <SectionComponent>
          <RowComponent justify="space-between">
            <RowComponent
              styles={{ flexDirection: 'column', alignItems: 'flex-start' }}
            >
              <TextComponent
                text="Roller Rabbit"
                type="title"
                font={fontFamilies.poppinsBold}
              />
              <TextComponent
                text="Vando Odelle Dress"
                type="description"
                font={fontFamilies.poppinsRegular}
                color={colors.description}
              />
              <RowComponent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <FontAwesome
                    key={index}
                    name="star"
                    size={14}
                    color={colors.star}
                    style={{ marginRight: 4 }}
                  />
                ))}
                <TextComponent
                  text="(320 Review)"
                  type="description"
                  font={fontFamilies.poppinsBold}
                />
              </RowComponent>
            </RowComponent>
            <RowComponent
              styles={{ flexDirection: 'column', alignItems: 'flex-end' }}
            >
              <CircleComponent
                borderRadius={20}
                width={80}
                height={36}
                color={colors.gray4}
              >
                <TouchableOpacity onPress={() => {}}>
                  <TextComponent
                    text="-"
                    font={fontFamilies.poppinsBold}
                    type="description"
                  />
                </TouchableOpacity>
                <TextComponent
                  text="1"
                  styles={{ marginHorizontal: 12 }}
                  font={fontFamilies.poppinsBold}
                  type="description"
                />
                <TouchableOpacity>
                  <TextComponent
                    text="+"
                    font={fontFamilies.poppinsBold}
                    type="description"
                  />
                </TouchableOpacity>
              </CircleComponent>
              <TextComponent
                text="Avaliable in stok"
                type="description"
                font={fontFamilies.poppinsBold}
              />
            </RowComponent>
          </RowComponent>
        </SectionComponent>

        <SectionComponent>
          <RowComponent justify="space-between">
            <RowComponent
              styles={{ flexDirection: 'column', alignItems: 'flex-start' }}
            >
              <TextComponent
                text="Size"
                type="title"
                font={fontFamilies.poppinsBold}
              />
              <SpaceComponent height={10} />
              <RowComponent>
                {options.sizes.map((key, index) => (
                  <CircleComponent
                    onPress={() => setSize(key)}
                    styles={{
                      backgroundColor:
                        key === size ? colors.dark : colors.white,
                      borderWidth: 1,
                      borderColor: colors.gray2,
                      marginRight: 16,
                    }}
                  >
                    <TextComponent
                      text={key}
                      type="title"
                      color={size === key ? colors.white : colors.gray2}
                      font={fontFamilies.poppinsBold}
                    />
                  </CircleComponent>
                ))}
              </RowComponent>
            </RowComponent>

            <Shadow
              distance={25}
              startColor={colors.gray}
              endColor={colors.white}
              style={{ borderRadius: 100 }}
            >
              <RowComponent
                styles={{
                  flexDirection: 'column',
                  padding: 10,
                }}
              >
                {colorOptions.map((_, index) => (
                  <TouchableOpacity
                    onPress={() => setColor(_.color)}
                    key={index}
                    style={{
                      backgroundColor:
                        _.color === 'white' ? colors.white : _.value,
                      borderWidth: 1,
                      borderColor: _.color === 'white' ? colors.gray2 : _.value,
                      height: 20,
                      width: 20,
                      borderRadius: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: 8,
                    }}
                  >
                    {color === _.color ? (
                      <Entypo
                        name="check"
                        color={_.color === 'white' ? colors.dark : colors.white}
                      />
                    ) : (
                      ''
                    )}
                  </TouchableOpacity>
                ))}
              </RowComponent>
            </Shadow>
          </RowComponent>
        </SectionComponent>

        <SectionComponent>
          <TextComponent
            text="Description"
            type="title"
            font={fontFamilies.poppinsBold}
          />
          <SpaceComponent height={10} />
          <TextComponent
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repudiandae rerum odit autem, hic amet iure! Repellendus qui labore enim animi, expedita suscipit maiores molestias a perferendis praesentium odit illum."
            type="description"
            font={fontFamilies.poppinsRegular}
            color={colors.description}
          />
        </SectionComponent>

        <SectionComponent>
          <RowComponent justify="space-between">
            <RowComponent
              styles={{ alignItems: 'flex-start', flexDirection: 'column' }}
            >
              <TextComponent
                text="Total Price"
                type="description"
                font={fontFamilies.poppinsBold}
                color={colors.gray3}
                size={12}
              />
              <TextComponent
                text="$198.00"
                type="title"
                font={fontFamilies.poppinsBold}
              />
            </RowComponent>
            <ButtonComponent
              styles={{ paddingHorizontal: 42 }}
              textStyles={{ color: colors.white }}
              onPress={() => {}}
              text="Add to cart"
              prefix={<Bag2 color={colors.white} style={{ marginRight: 16 }} />}
            />
          </RowComponent>
        </SectionComponent>
      </View>
    </Container>
  );
};

export default ProductDetailScreen;
const localStyle = StyleSheet.create({
  swDash: {
    height: 4,
    width: 8,
    backgroundColor: colors.white,
    position: 'absolute',
    right: 12,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '40%',
    resizeMode: 'contain',
  },
  swDot: {
    height: 8,
    width: 8,
    borderRadius: 100,
    backgroundColor: colors.gray2,
    marginHorizontal: 2,
  },
  swActiveDot: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.gray2,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
});
