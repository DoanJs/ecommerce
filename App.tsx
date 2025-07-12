import React from 'react';
import { View } from 'react-native';
import { TextComponent } from './src/components/index';
import { colors } from './src/constants/colors';
import { globalStyles } from './src/styles/globalStyles';

const App = () => {
  return (
    <View
      style={[
        globalStyles.container,
        globalStyles.center,
        {
          backgroundColor: colors.gray,
        },
      ]}
    >
      <TextComponent text="hung" />
    </View>
  );
};

export default App;
