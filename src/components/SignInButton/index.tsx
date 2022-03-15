import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SignInButtonPropsType } from './type';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export const SignInButton: FC<SignInButtonPropsType> = props => {
  const { signIn } = props;

  return (
    <TouchableOpacity
      style={signIn.styleContainer}
      onPress={signIn.signInMethod}>
      <FontAwesomeIcon icon={signIn.icon} size={30} color={signIn.iconColor} />
      <Text style={signIn.styleFont}>{signIn.title}</Text>
    </TouchableOpacity>
  );
};
