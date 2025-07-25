import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { RowComponent, TextComponent } from '.';
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fontFamilies';
import clothes from '../assests/images/clothes.png';

interface Props {
  type: 'active' | 'message' |'none';
  name: string;
  onPress: () => void;
}

const MessageItemComponent = (props: Props) => {
  const { type, name, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginRight: type === 'active' ? 20 : undefined,
        marginBottom: type === 'message' ? 20 : undefined,
      }}
    >
      <RowComponent
        styles={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            borderWidth: 2,
            borderRadius: 100,
            padding: 2,
            borderColor: colors.green,
          }}
        >
          <Image
            source={clothes}
            style={{ height: 80, width: 80, borderRadius: 100 }}
          />
        </View>
        {type === 'active' && (
          <TextComponent text={name} font={fontFamilies.poppinsBold} />
        )}
      </RowComponent>

      {type === 'message' && (
        <RowComponent
          styles={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            flex: 1,
            marginHorizontal: 10,
          }}
        >
          <TextComponent
            text={name}
            type="title"
            font={fontFamilies.poppinsBold}
          />

          <TextComponent
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui sed nihil maiores, sequi, corrupti architecto maxime nemo sint libero beatae! Inventore, rerum saepe! Nostrum obcaecati ipsam repudiandae minima aut!"
            type="title"
            numberOfLine={2}
            font={fontFamilies.poppinsRegular}
          />
        </RowComponent>
      )}

      {type === 'message' && (
        <RowComponent styles={{ flexDirection: 'column' }}>
          <TextComponent
            text="23 min"
            type="title"
            font={fontFamilies.poppinsBold}
          />
          <View
            style={{
              borderRadius: 100,
              backgroundColor: colors.dark,
              height: 40,
              width: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TextComponent
              text="2"
              color={colors.white}
              size={20}
              font={fontFamilies.poppinsRegular}
            />
          </View>
        </RowComponent>
      )}
    </TouchableOpacity>
  );
};

export default MessageItemComponent;
