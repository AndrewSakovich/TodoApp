import React, { FC } from 'react';
import { View } from 'react-native';
import { style } from './style';
import { SignInButton } from '../../components/SignInButton';
import { useDispatch } from 'react-redux';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { signInAction } from '../../redux/actions/todoActions/signInAction';

export const LoginScreen: FC = () => {
  const dispatch = useDispatch();

  const googleSignIn = async () => {
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = await auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    const { user } = await auth().signInWithCredential(googleCredential);
    const userToken = user.uid;

    dispatch(signInAction({ userToken, user }));
  };

  return (
    <View style={style.container}>
      <SignInButton googleSignIn={googleSignIn} />
    </View>
  );
};
