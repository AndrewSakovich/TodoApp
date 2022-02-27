import React, { FC, useEffect, useState } from 'react';
import { View } from 'react-native';
import { style } from './style';
import { SignInButton } from '../../components/SignInButton';
import { useDispatch } from 'react-redux';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { signInAction } from '../../redux/actions/todoActions/signInAction';
import { firebase } from '@react-native-firebase/database';

export const LoginScreen: FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userArr = firebase
      .app()
      .database(
        'https://fir-2f0d3-default-rtdb.europe-west1.firebasedatabase.app/',
      )
      .ref('Users')
      .on('value', snapshot => {
        const obj = snapshot.val() ? snapshot.val() : {};
        const arr = Object.keys(obj);
        console.log('ARR', arr);
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

  const setData = async userToken => {
    console.log('USERS  ', users);
    const check = users.includes(`User${userToken}`);
    console.log('CHECK  ', check);
    if (!check) {
      return await firebase
        .app()
        .database(
          'https://fir-2f0d3-default-rtdb.europe-west1.firebasedatabase.app/',
        )
        .ref(`/Users/User${userToken}`)
        .push(userToken);
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
