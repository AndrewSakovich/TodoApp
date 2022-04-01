import { Text, TextInput, TouchableOpacity } from 'react-native';
import { style } from '../../screens/AddNewItemScreen/style';
import React, { FC, MutableRefObject, useRef } from 'react';

export type CustomInputPropsType = {
  onChangeText?: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  value: string;
  selectionColor: string;
  title: string;
  onPress?: () => void;
  editable: boolean;
  inputRef?: MutableRefObject<TextInput | null>;
};

export const CustomInput: FC<CustomInputPropsType> = props => {
  const { onChangeText, placeholder, selectionColor, value, title, onPress } =
    props;
  const inputRef = useRef<TextInput>(null);
  const openInput = () => {
    return inputRef.current?.focus();
  };

  const disabled = !!onPress;
  const touchEffect = disabled ? onPress : openInput;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={style.input}
      onPress={touchEffect}>
      <Text>{`${title}`}</Text>
      <TextInput
        editable={!disabled}
        ref={inputRef}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        selectionColor={selectionColor}
      />
    </TouchableOpacity>
  );
};
