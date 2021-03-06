import React, { MutableRefObject } from 'react';
import { TextInput } from 'react-native';

export type CustomInputPropsType = {
  value: string;
  title: string;

  disable?: boolean;
  onChangeText?: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  onPress?: () => void;
  inputRef?: MutableRefObject<TextInput | null>;
};
