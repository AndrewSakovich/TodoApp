import { Text, TextInput, TouchableOpacity } from 'react-native';
import { style } from '../../screens/AddNewItemScreen/style';
import React, { FC, MutableRefObject } from 'react';

export type CustomInputPropsType = {
  onChangeText?: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  value: string;
  selectionColor: string;
  title: string;
  onPress: () => void;
  editable: boolean;
  inputRef?: MutableRefObject<TextInput | null>;
};

export const CustomInput: FC<CustomInputPropsType> = props => {
  const {
    onChangeText,
    placeholder,
    selectionColor,
    value,
    title,
    onPress,
    editable,
    inputRef,
  } = props;

  return (
    <TouchableOpacity style={style.input} onPress={() => onPress()}>
      <Text>{`${title}`}</Text>
      <TextInput
        editable={editable}
        ref={inputRef}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        selectionColor={selectionColor}
      />
    </TouchableOpacity>
  );
};
