import React, { FC } from 'react';
import { View } from 'react-native';
import { style } from './style';
import { SignInButton } from '../../components/SignInButton';
import { useDispatch } from 'react-redux';
import { signInSagaAction } from '../../redux/actions/authSagaActions/signInSagaAction';

export const LoginScreen: FC = () => {
  const dispatch = useDispatch();

  const googleSignIn = () => {
    dispatch(signInSagaAction());
  };

  return (
    <View style={style.container}>
      <SignInButton googleSignIn={googleSignIn} />
    </View>
  );
};
