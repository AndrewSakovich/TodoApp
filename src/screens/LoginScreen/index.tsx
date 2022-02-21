import React from 'react';
import {View} from 'react-native';
import {style} from './style';
import {SignInButton} from '../../components/SignInBotton';

export const LoginScreen: React.FC = () => {
  return (
    <View style={style.container}>
      <SignInButton />
    </View>
  );
};
