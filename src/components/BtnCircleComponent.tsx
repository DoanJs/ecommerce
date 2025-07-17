import React, { ReactNode } from 'react';
import { colors } from '../constants/colors';
import RowComponent from './RowComponent';

interface Props {
  children: ReactNode;
  width?: number;
  height?: number;
  onPress?: () => void;
}

const BtnCircleComponent = (props: Props) => {
  const { children, width, height, onPress } = props;
  return (
    <RowComponent
      styles={{
        backgroundColor: colors.dark,
        justifyContent: 'center',
        alignItems: 'center',
        width: width ?? 46,
        height: height ?? 46,
        borderRadius: 100,
      }}
      onPress={onPress ?? undefined}
    >
      {children}
    </RowComponent>
  );
};

export default BtnCircleComponent;
