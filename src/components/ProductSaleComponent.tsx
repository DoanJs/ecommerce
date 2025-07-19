import React from 'react';
import { ImageBackground } from 'react-native';
import {
  CircleComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '.';
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fontFamilies';
import bagImage from '../assests/images/bag.png';

const ProductSaleComponent = () => {
  return (
    <ImageBackground
      source={bagImage}
      resizeMode="cover"
      imageStyle={{
        borderRadius: 16,
      }}
      style={{
        marginRight: 20,
        height: 200,
        width: 300,
      }}
    >
      <SectionComponent styles={{ paddingVertical: 20 }}>
        <TextComponent
          text="50% Off"
          type="bigTitle"
          size={32}
          font={fontFamilies.poppinsBold}
        />
        <TextComponent
          text="On everything today"
          type="bigTitle"
          font={fontFamilies.poppinsBold}
        />
        <TextComponent
          text="With code: FSCREATION"
          type="description"
          color={colors.gray2}
          font={fontFamilies.poppinsBold}
        />
        <SpaceComponent height={10} />
        <CircleComponent height={40} width={100}>
          <TextComponent
            text="Get Now"
            color={colors.white}
            font={fontFamilies.poppinsBold}
          />
        </CircleComponent>
      </SectionComponent>
    </ImageBackground>
  );
};

export default ProductSaleComponent;
