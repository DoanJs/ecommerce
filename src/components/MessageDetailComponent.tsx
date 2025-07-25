import React from 'react';
import { View } from 'react-native';
import { RowComponent, TextComponent } from '.';
import { colors } from '../constants/colors';

interface Props {
  position: 'left' | 'right';
}

const MessageDetailComponent = (props: Props) => {
  const { position } = props;
  return (
    <RowComponent
      styles={{
        flexDirection: 'column',
        alignItems: position === 'left' ? 'flex-start' : 'flex-end',
        marginVertical: 4,
      }}
    >
      <View style={{ paddingHorizontal: 4, width: '80%' }}>
        <View
          style={{
            padding: 16,
            borderTopRightRadius: 16,
            borderTopLeftRadius: 16,
            borderBottomRightRadius: position === 'left' ? 16 : 0,
            borderBottomLeftRadius: position === 'left' ? 0 : 16,
            backgroundColor: position === 'left' ? colors.dark : colors.gray4,
          }}
        >
          <TextComponent
            color={position === 'left' ? colors.white : colors.dark}
            text="Amet voluptatem uh uh u delectus omnis iure uh uh, odio."
          />
        </View>

        <TextComponent
          text="4:35 am"
          type="description"
          color={colors.description}
          styles={{
            textAlign: 'right',
          }}
        />
      </View>
    </RowComponent>
  );
};

export default MessageDetailComponent;
