import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SignInButtonPropsType } from './type';
import { style } from './style';

export const SignInButton: FC<SignInButtonPropsType> = props => {
  const { signIn } = props;

  const textStyle = signIn.typeStyle ? style.fontGoogle : style.fontFb;
  return (
    <TouchableOpacity onPress={signIn.signInMethod}>
      <Text style={textStyle}>{signIn.title}</Text>
    </TouchableOpacity>
  );
};
