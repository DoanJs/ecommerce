import React, { ReactNode, useState } from 'react';
import {
  StyleProp,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { globalStyles } from '../styles/globalStyles';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import { colors } from '../constants/colors';

interface Props {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  title?: string;
  prefix?: ReactNode;
  affix?: ReactNode;
  allowClear?: boolean;
  multible?: boolean;
  numberOfLine?: number;
  isPassword?: boolean;
  styles?: StyleProp<ViewStyle>;
  titleStyles?: StyleProp<TextStyle>;
  textStyles?: StyleProp<TextStyle>;
  color?: string;
  placeholderTextColor?: string;
}

const InputComponent = (props: Props) => {
  const {
    value,
    onChange,
    placeholder,
    title,
    prefix,
    affix,
    allowClear,
    multible,
    numberOfLine,
    isPassword,
    styles,
    titleStyles,
    textStyles,
    color,
    placeholderTextColor,
  } = props;
  const [showPass, setShowPass] = useState(false);

  return (
    <View style={[{ marginBottom: 16 }, styles]}>
      {title && <TextComponent text={title} flex={0} styles={titleStyles} />}
      <RowComponent
        styles={[
          globalStyles.inputContainer,
          {
            minHeight: multible && numberOfLine ? 32 * numberOfLine : 32,
            alignItems: multible ? 'flex-start' : 'center',
            backgroundColor: color ?? colors.gray,
          },
        ]}
      >
        {prefix && prefix}
        <View
          style={{
            flex: 1,
            paddingLeft: prefix ? 8 : 0,
            paddingRight: affix ? 8 : 0,
          }}
        >
          <TextInput
            style={[
              globalStyles.text,
              { margin: 0, padding: 0, paddingVertical: 0 },
              textStyles,
            ]}
            placeholder={placeholder ?? ''}
            placeholderTextColor={placeholderTextColor ?? '#676767'}
            value={value}
            onChangeText={val => onChange(val)}
            multiline={multible}
            numberOfLines={numberOfLine}
            secureTextEntry={isPassword ? !showPass : false}
            autoCapitalize="none"
          />
        </View>
        {affix && affix}
        {allowClear && value && (
          <TouchableOpacity onPress={() => onChange('')}>
            <AntDesign name="close" size={20} color={colors.white} />
          </TouchableOpacity>
        )}
        {isPassword && (
          <TouchableOpacity onPress={() => setShowPass(!showPass)}>
            {showPass ? (
              <Ionicons name="eye" size={20} color={colors.dark} />
            ) : (
              <Ionicons name="eye-off" size={20} color={colors.dark} />
            )}
          </TouchableOpacity>
        )}
      </RowComponent>
    </View>
  );
};

export default InputComponent;
