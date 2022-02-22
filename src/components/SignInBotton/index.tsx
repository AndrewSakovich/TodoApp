import React, { FC } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { style } from './style';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { signInAction } from '../../redux/actions/todoActions/signInAction';

export const SignInButton: FC = () => {
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
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <TouchableOpacity style={style.btn} onPress={googleSignIn}>
        <Text style={style.font}>{'Google Sign In'}</Text>
      </TouchableOpacity>
    </View>
  );
};
