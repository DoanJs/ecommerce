import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../constants/colors';
import RowComponent from './RowComponent';

interface Props {
  children: ReactNode;
  color?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  styles?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const CircleComponent = (props: Props) => {
  const { children, color, width, height, borderRadius, onPress, styles } =
    props;
  const localStyle = StyleSheet.create({
    container: {
      backgroundColor: color ?? colors.dark,
      justifyContent: 'center',
      alignItems: 'center',
      width: width ?? 46,
      height: height ?? 46,
      borderRadius: borderRadius ?? 100,
    },
  });
  return (
    <RowComponent
      styles={[localStyle.container, styles]}
      onPress={onPress ?? undefined}
    >
      {children}
    </RowComponent>
  );
};

export default CircleComponent;
