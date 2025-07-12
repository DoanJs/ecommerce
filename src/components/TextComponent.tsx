import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fontFamilies';
import { sizes } from '../constants/sizes';

interface Props {
  text: string;
  size?: number;
  font?: string;
  flex?: number;
  numberOfLine?: number;
  color?: string;
  type?: 'bigTitle' | 'title' | 'description';
  styles?: StyleProp<TextStyle>;
}

const TextComponent = (props: Props) => {
  const { text, size, font, color, flex, styles, numberOfLine, type } = props;
  let fontSize: number = sizes.text;
  let fontFamily: string = fontFamilies.poppinsRegular;
  
  switch (type) {
    case 'bigTitle':
      fontSize = sizes.bigTitle;
      break;
    case 'title':
      fontSize = sizes.title;
      break;
    case 'description':
      fontSize = sizes.description;
      break;
    default:
      fontSize = sizes.text;
      fontFamily = fontFamilies.poppinsRegular;
      break;
  }
  const localStyles = StyleSheet.create({
    text: {
      flex: flex,
      fontFamily: font ?? fontFamily,
      fontSize: size ?? fontSize,
      color: color ?? colors.dark,
    },
  });
  return (
    <Text numberOfLines={numberOfLine} style={[localStyles.text, styles]}>
      {text}
    </Text>
  );
};

export default TextComponent;
