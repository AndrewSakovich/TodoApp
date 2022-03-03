import React, { FC } from 'react';
import { View } from 'react-native';
import { style } from './style';
import { SignInButton } from '../../components/SignInButton';
import { useDispatch } from 'react-redux';
import { TodoActionTypes } from '../../redux/actions/todoActions';

export const LoginScreen: FC = () => {
  const dispatch = useDispatch();

  const googleSignIn = dispatch({ type: TodoActionTypes.SIGN_IN_SAGA });

  return (
    <View style={style.container}>
      <SignInButton googleSignIn={googleSignIn} />
    </View>
  );
};
