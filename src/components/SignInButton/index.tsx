import React, { FC } from 'react';
import { style } from './style';
import { Text, TouchableOpacity, View } from 'react-native';
import { SignInButtonPropsType } from './type';

export const SignInButton: FC<SignInButtonPropsType> = props => {
  const { signIn } = props;

  return (
    <View style={style.container}>
      <TouchableOpacity style={style.btn} onPress={signIn.signInMethod}>
        <Text style={style.font}>{signIn.title}</Text>
      </TouchableOpacity>
    </View>
  );
};
