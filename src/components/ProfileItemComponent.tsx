import { ArrowRight2 } from 'iconsax-react-nativejs';
import React, { ReactNode } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { RowComponent, SpaceComponent, TextComponent } from '.';
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fontFamilies';

interface Props {
  text: string;
  icon: ReactNode;
  onPress: () => void;
  title?: ReactNode;
  arrowRight?: boolean;
  checkRadio?: boolean;
}

const ProfileItemComponent = (props: Props) => {
  const { icon, text, onPress, title, arrowRight, checkRadio } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ backgroundColor: colors.white, marginBottom: 16 }}
    >
      <RowComponent
        justify="space-between"
        styles={{ width: '100%', alignItems: 'center' }}
      >
        <RowComponent>
          <View
            style={{
              padding: 10,
              backgroundColor: colors.gray4,
              borderRadius: 6,
              marginRight: 20,
            }}
          >
            {icon}
          </View>
          <TextComponent
            text={text}
            type="title"
            font={fontFamilies.poppinsBold}
          />
        </RowComponent>
        {title && title}
        {arrowRight && <ArrowRight2 size={16} />}
        {checkRadio && (
          <View
            style={{
              backgroundColor: colors.dark,
              height: 16,
              width: 26,
              borderRadius: 8,
              paddingHorizontal: 4,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            <View
              style={{
                height: 8,
                width: 8,
                borderRadius: 100,
                backgroundColor: colors.white,
              }}
            />
          </View>
        )}
      </RowComponent>
    </TouchableOpacity>
  );
};

export default ProfileItemComponent;
