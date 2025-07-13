import React, { ReactNode } from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { RowComponent, TextComponent } from '.';
import { fontFamilies } from '../constants/fontFamilies';
import { globalStyles } from '../styles/globalStyles';

type Props = {
  children: ReactNode;
  title?: string;
  back?: boolean;
  left?: ReactNode;
  right?: ReactNode;
  isScroll?: boolean;
};

const Container = (props: Props) => {
  const { children, title, back, left, right, isScroll } = props;
  const localStyle = StyleSheet.create({
    header: {
      paddingHorizontal: 16,
      paddingVertical: 16,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 42,
    },
    title: { paddingHorizontal: 16, flex: 1 },
  });

  return (
    <SafeAreaView style={[globalStyles.container]}>
      {(back || left || right || title) && (
        <RowComponent styles={[localStyle.header]}>
          {back && <TextComponent text="Back" />}
          {left && !back && <TextComponent text="Left" />}
          <View style={localStyle.title}>
            {title && (
              <TextComponent
                type="bigTitle"
                font={fontFamilies.poppinsBold}
                text={title}
              />
            )}
          </View>
          {right && right}
        </RowComponent>
      )}
      {!isScroll ? (
        <View style={[globalStyles.container]}>{children}</View>
      ) : (
        <ScrollView style={[globalStyles.container]}>{children}</ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Container;
