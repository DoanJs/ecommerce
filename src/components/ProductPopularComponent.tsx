import React from 'react';
import { Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { RowComponent, SpaceComponent, TextComponent } from '.';
import shoe02 from '../assests/images/shoe02.png';
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fontFamilies';
const ProductPopularComponent = () => {
  return (
    <RowComponent justify="space-between" styles={{marginBottom: 30}}>
      <RowComponent>
        <Image
          source={shoe02}
          resizeMode="contain"
          style={{
            height: 80,
            width: 80,
            backgroundColor: colors.gray2,
            borderRadius: 16,
            marginHorizontal: 14,
          }}
        />
        <RowComponent
          styles={{ flexDirection: 'column', alignItems: 'flex-start' }}
        >
          <TextComponent
            text="Gia Borghini"
            type="title"
            font={fontFamilies.poppinsBold}
          />
          <TextComponent
            text="RWH Rosie 1 Sandals"
            type="description"
            color={colors.description}
            font={fontFamilies.poppinsRegular}
          />
          <RowComponent>
            <FontAwesome name="star" size={18} color={colors.star} />
            <SpaceComponent width={10} />
            <TextComponent
              text="(4.5)"
              type="title"
              font={fontFamilies.poppinsBold}
            />
          </RowComponent>
        </RowComponent>
      </RowComponent>
      <TextComponent
        text="$740.00"
        type="title"
        font={fontFamilies.poppinsBold}
      />
    </RowComponent>
  );
};

export default ProductPopularComponent;
