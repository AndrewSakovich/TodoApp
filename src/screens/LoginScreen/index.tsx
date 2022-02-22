import React, { FC } from 'react';
import { View } from 'react-native';
import { style } from './style';
import { SignInButton } from '../../components/SignInButton';

export const LoginScreen: FC = () => {
  return (
    <View style={style.container}>
      <SignInButton />
    </View>
  );
};
