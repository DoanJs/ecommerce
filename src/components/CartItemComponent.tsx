import { Trash } from 'iconsax-react-nativejs';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { RowComponent, SpaceComponent, TextComponent } from '.';
import clothes from '../assests/images/clothes.png';
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fontFamilies';

const CartItemComponent = () => {
  return (
    <RowComponent
      justify="flex-start"
      styles={{ flexDirection: 'column', width: '100%', marginBottom: 20 }}
    >
      <View
        style={{
          height: 150,
          width: '100%',
          backgroundColor: colors.gray3,
          marginBottom: 10,
          borderRadius: 10,
        }}
      >
        <Image
          source={clothes}
          resizeMode="cover"
          style={{
            height: 150,
            width: '100%',
            borderRadius: 10,
          }}
        />

        <View
          style={{
            backgroundColor: colors.dark,
            padding: 6,
            position: 'absolute',
            borderRadius: 100,
            right: 10,
            top: 10,
          }}
        >
          <Trash variant="Bold" size={10} color={colors.white} />
        </View>

        <RowComponent
          styles={{
            backgroundColor: colors.white,
            position: 'absolute',
            paddingHorizontal: 16,
            paddingVertical: 2,
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center',
            left: 20,
            bottom: 16,
          }}
        >
          <TouchableOpacity>
            <TextComponent text="-" type="title" />
          </TouchableOpacity>
          <SpaceComponent width={8} />
          <TextComponent text="1" type="title" />
          <SpaceComponent width={8} />
          <TouchableOpacity>
            <TextComponent text="+" type="title" />
          </TouchableOpacity>
        </RowComponent>
      </View>
      
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
