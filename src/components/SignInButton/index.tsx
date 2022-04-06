import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SignInButtonPropsType } from './type';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export const SignInButton: FC<SignInButtonPropsType> = props => {
  const { options, disable } = props;

  return (
    <TouchableOpacity
      disabled={disable}
      style={options.styleContainer}
      onPress={options.signInMethod}>
      <FontAwesomeIcon
        icon={options.icon}
        size={30}
        color={options.iconColor}
      />
      <Text style={options.styleFont}>{options.title}</Text>
    </TouchableOpacity>
  );
};
