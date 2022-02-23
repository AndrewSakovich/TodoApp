import React, { FC } from 'react';
import { style } from './style';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SignInButtonPropsType } from './type';

export const SignInButton: FC<SignInButtonPropsType> = props => {
  const { googleSignIn } = props;

  return (
    <View style={style.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <TouchableOpacity style={style.btn} onPress={googleSignIn}>
        <Text style={style.font}>{'Google Sign In'}</Text>
      </TouchableOpacity>
    </View>
  );
};
