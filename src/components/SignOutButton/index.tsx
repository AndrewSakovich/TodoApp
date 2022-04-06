import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { style } from './style';
import { SignOutButtonType } from './type';
import { createAlertMessageHelper } from '../../helpers/createAlertMessageHelper';

export const SignOutButton: FC<SignOutButtonType> = props => {
  const { googleSignOut } = props;

  const alertParams = {
    title: 'Log out',
    message: 'Are you sure?',
    confirmButtonTitle: 'Yes',
    cancelButtonTitle: 'Come back',
    onPress: googleSignOut,
  };

  const onPress = () => {
    createAlertMessageHelper(alertParams);
  };

  return (
    <TouchableOpacity style={style.btn} onPress={onPress}>
      <Text style={style.font}>{'Sign out'}</Text>
    </TouchableOpacity>
  );
};
