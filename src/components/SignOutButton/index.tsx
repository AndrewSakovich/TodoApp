import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { style } from './style';
import { SignOutButtonType } from './type';

export const SignOutButton: FC<SignOutButtonType> = props => {
  const { googleSignOut } = props;

  return (
    <TouchableOpacity style={style.btn} onPress={googleSignOut}>
      <Text style={style.font}>{'Sign out'}</Text>
    </TouchableOpacity>
  );
};
