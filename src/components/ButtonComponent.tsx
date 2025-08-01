import React from 'react';
import { ActivityIndicator, StyleProp, StyleSheet, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fontFamilies';
import TextComponent from './TextComponent';
interface Props {
  text: string;
  isLoading?: boolean;
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  onPress: () => void;
}

const ButtonComponent = (props: Props) => {
  const { text, isLoading, onPress, color, styles, textStyles } = props;
  const localStyle = StyleSheet.create({
    btnContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color ? color : isLoading ? colors.gray : colors.dark,
      padding: 14,
      borderRadius: 100,
    },
    btnText: {
      textTransform: 'uppercase',
    },
  });
  return (
    <TouchableOpacity
      disabled={isLoading}
      style={[localStyle.btnContainer, styles]}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <TextComponent
          text={text}
          flex={0}
          styles={[localStyle.btnText, textStyles]}
          size={16}
          font={fontFamilies.poppinsBold}
        />
      )}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
