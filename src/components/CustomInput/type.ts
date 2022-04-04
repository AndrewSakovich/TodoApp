import React, { MutableRefObject } from 'react';
import { TextInput } from 'react-native';

export type CustomInputPropsType = {
  onChangeText?: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  value: string;
  title: string;
  onPress?: () => void;
  inputRef?: MutableRefObject<TextInput | null>;
};
