import React, { ReactNode } from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fontFamilies';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
interface Props {
  color?: string;
  onPress: () => void;
  prefix?: ReactNode;
  suffix?: ReactNode;
  text: string;
  isLoading?: boolean;
  styles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
}

const ButtonComponent = (props: Props) => {
  const {
    text,
    isLoading,
    onPress,
    color,
    styles,
    textStyles,
    prefix,
    suffix,
  } = props;
  const localStyle = StyleSheet.create({
    btnContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color ? color : isLoading ? colors.gray : colors.dark,
      padding: 14,
      borderRadius: 100,
    }
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
        <RowComponent>
          {
            prefix ?? prefix
          }
          <TextComponent
            text={text}
            flex={0}
            styles={textStyles}
            size={16}
            font={fontFamilies.poppinsBold}
          />
          {suffix ?? suffix}
        </RowComponent>
      )}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
