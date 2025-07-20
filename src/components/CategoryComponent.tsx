import React, { ReactNode } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import {
  ButtonComponent,
  CircleComponent,
  RowComponent,
  SpaceComponent,
  TextComponent,
} from '.';
import shoe02 from '../assests/images/shoe02.png';
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fontFamilies';

interface Props {
  name: string;
  index: number;
  type?: 'small' | 'big' | 'image';
  value?: number;
  quantity?: number;
  onPress: (val: number) => void;
  prefix?: ReactNode;
  suffix?: ReactNode;
}

const CategoryComponent = (props: Props) => {
  const { type, name, index, value, onPress, prefix, suffix, quantity } = props;

  return type === 'small' ? (
    <TouchableOpacity
      style={{ marginRight: 10 }}
      onPress={() => onPress(index as number)}
    >
      <CircleComponent
        color={value === index ? colors.dark : colors.white}
        width={100}
        styles={{
          borderWidth: 1,
          borderColor: colors.gray2,
        }}
      >
        <TextComponent
          text={name}
          color={value === index ? colors.white : colors.dark}
          font={
            value === index
              ? fontFamilies.poppinsRegular
              : fontFamilies.poppinsBold
          }
        />
      </CircleComponent>
    </TouchableOpacity>
  ) : type === 'big' ? (
    <>
      <ButtonComponent
        text={name}
        styles={{ paddingHorizontal: 24, paddingVertical: 30 }}
        onPress={() => onPress(index)}
        color={colors.dark}
        textStyles={{ color: colors.white }}
        prefix={prefix}
        suffix={suffix}
      />
      <SpaceComponent height={20} />
    </>
  ) : (
    <ImageBackground
      source={shoe02}
      style={{ height: 250, width: 190, marginBottom: 10 }}
    >
      <View style={{ flex: 1 }} />
      <RowComponent
        styles={{
          flexDirection: 'column',
          backgroundColor: '#ddddddcc',
          padding: 10,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      >
        <TextComponent
          text={name}
          type="title"
          font={fontFamilies.poppinsBold}
        />
        <TextComponent
          text={`${quantity} Product`}
          type="description"
          font={fontFamilies.poppinsBold}
        />
      </RowComponent>
    </ImageBackground>
  );
};

export default CategoryComponent;
