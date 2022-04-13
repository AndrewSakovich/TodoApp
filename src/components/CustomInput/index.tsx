import { Text, TextInput, TouchableOpacity } from 'react-native';
import { style } from './style';
import React, { FC, useRef } from 'react';
import { CustomInputPropsType } from './type';
import { COLORS } from '../../COLORS';

export const CustomInput: FC<CustomInputPropsType> = props => {
  const { onChangeText, placeholder, value, title, onPress, disable } = props;
  const inputRef = useRef<TextInput>(null);
  const openInput = () => {
    return inputRef.current?.focus();
  };

  const disabledInput = !!onPress || disable;
  const touchEffect = disabledInput ? onPress : openInput;

  return (
    <TouchableOpacity
      disabled={disable}
      activeOpacity={0.7}
      style={style.input}
      onPress={touchEffect}>
      <Text>{`${title}`}</Text>
      <TextInput
        editable={!disabledInput}
        ref={inputRef}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        selectionColor={COLORS.black}
      />
    </TouchableOpacity>
  );
};
