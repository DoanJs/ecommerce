import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { CircleComponent, TextComponent } from '.';
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fontFamilies';

const CategoryComponent = ({ category, index }:any) => {
  const [focus, setFocus] = useState(false);
  return (
    <TouchableOpacity key={index} style={{ marginRight: 10 }}>
      <CircleComponent
        color={focus ? colors.dark : colors.white}
        width={100}
        styles={
          focus
            ? {
                borderWidth: 1,
                borderColor: colors.gray2,
              }
            : undefined
        }
      >
        <TextComponent
          text={category}
          color={focus ? colors.white : colors.dark}
          font={focus ? fontFamilies.poppinsRegular : fontFamilies.poppinsBold}
        />
      </CircleComponent>
    </TouchableOpacity>
  );
};

export default CategoryComponent;
