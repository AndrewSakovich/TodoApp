import React, { FC, useEffect, useState } from 'react';
import { View } from 'react-native';
import { style } from './style';
import { SignInButton } from '../../components/SignInButton';
import { useDispatch } from 'react-redux';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {
  signInAction,
  SignInPayload,
} from '../../redux/actions/todoActions/signInAction';
import { firebase } from '@react-native-firebase/database';

export const LoginScreen: FC = () => {
  const [users, setUsers] = useState<SignInPayload['userToken'][]>([]);

  useEffect(() => {
    const userArr = firebase
      .app()
      .database(
        'https://fir-2f0d3-default-rtdb.europe-west1.firebasedatabase.app/',
      )
      .ref('Users')
      .on('value', snapshot => {
        const obj = snapshot.val() ?? {};
        const arr: SignInPayload['userToken'][] = Object.keys(obj);
        setUsers(arr);
      });
    return () =>
      firebase
        .app()
        .database(
          'https://fir-2f0d3-default-rtdb.europe-west1.firebasedatabase.app/',
        )
        .ref('Users')
        .off('child_added', userArr);
  }, []);

  const setData = async (userToken: SignInPayload['userToken']) => {
    const check = users.includes(userToken);
    if (!check) {
      return await firebase
        .app()
        .database(
          'https://fir-2f0d3-default-rtdb.europe-west1.firebasedatabase.app/',
        )
        .ref(`/Users/`)
        .child(`${userToken}`)
        .set(userToken);
    }
  };

  const dispatch = useDispatch();

  const googleSignIn = async () => {
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = await auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    const { user } = await auth().signInWithCredential(googleCredential);
    const userToken = user.uid;
    await setData(userToken);

    dispatch(signInAction({ userToken, user }));
  };

  return (
    <View style={style.container}>
      <SignInButton googleSignIn={googleSignIn} />
    </View>
  );
};
