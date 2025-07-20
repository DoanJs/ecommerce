import { Heart, Ontology } from 'iconsax-react-nativejs';
import React from 'react';
import { Image, StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { SpaceComponent, TextComponent } from '.';
import shoe02 from '../assests/images/shoe02.png';
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fontFamilies';
import RowComponent from './RowComponent';
import { useNavigation } from '@react-navigation/native';

interface Props {
  styles?: StyleProp<ViewStyle>;
  onPress?: () => void
}

const ProductItemComponent = (props: Props) => {
  const { styles, onPress } = props;
  const navigation = useNavigation();
  return (
    <RowComponent
      styles={[{ flexDirection: 'column', width: '48%' }, styles]}
      onPress={onPress}
    >
      <Image
        source={shoe02}
        style={{
          width: '100%',
          height: 200,
          borderRadius: 16,
          backgroundColor: colors.gray2,
          marginBottom: 10,
        }}
      />
      <TextComponent
        text="Gia Borghini"
        type="title"
        font={fontFamilies.poppinsBold}
      />
      <TextComponent
        text="Gia Borghini"
        type="description"
        font={fontFamilies.poppinsRegular}
        color={colors.description}
      />
      <TextComponent
        text="$740.00"
        type="title"
        font={fontFamilies.poppinsBold}
      />
      <SpaceComponent height={36} />

      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
          padding: 6,
          borderRadius: 100,
          backgroundColor: colors.dark,
        }}
      >
        <Heart color={colors.white} size={12} />
      </TouchableOpacity>
    </RowComponent>
  );
};

export default ProductItemComponent;
