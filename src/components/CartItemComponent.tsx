import React from 'react';
import { Image } from 'react-native';
import { RowComponent, TextComponent } from '.';
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fontFamilies';
import shoe02 from '../assests/images/shoe02.png';

const CartItemComponent = () => {
  return (
    <RowComponent
      justify="flex-start"
      styles={{ flexDirection: 'column', width: '100%', marginBottom: 20 }}
    >
      <Image
        source={shoe02}
        resizeMode="contain"
        style={{
          height: 150,
          width: '100%',
          borderRadius: 10,
          backgroundColor: colors.gray3,
          marginBottom: 10,
        }}
      />
      <RowComponent justify="space-between" styles={{ width: '100%' }}>
        <RowComponent
          justify="flex-start"
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
            color={colors.description}
          />
        </RowComponent>
        <TextComponent
          type="title"
          text="$198.00"
          font={fontFamilies.poppinsBold}
        />
      </RowComponent>
    </RowComponent>
  );
};

export default CartItemComponent;
