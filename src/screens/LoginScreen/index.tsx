import React, { FC } from 'react';
import { View } from 'react-native';
import { style } from './style';
import { SignInButton } from '../../components/SignInButton';
import { useDispatch } from 'react-redux';
import { googleSignInSagaAction } from '../../redux/actions/authSagaActions/googleSignInSagaAction';
import { fbSignInSagaAction } from '../../redux/actions/authSagaActions/fbSignInSagaAction';

export const LoginScreen: FC = () => {
  const dispatch = useDispatch();

  const googleObject = {
    signInMethod: () => dispatch(googleSignInSagaAction()),
    title: 'Sign in with Google',
  };

  const fbObject = {
    signInMethod: () => dispatch(fbSignInSagaAction()),
    title: 'Sign in with Facebook',
  };

  return (
    <View style={style.container}>
      <SignInButton signIn={googleObject} />
      <SignInButton signIn={fbObject} />
    </View>
  );
};
