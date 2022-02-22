import React from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {signOutAction} from '../../redux/actions/todoActions/signOutAction';
import {useDispatch} from 'react-redux';
import {Text, TouchableOpacity} from 'react-native';
import {style} from '../SignInBotton/style';

export const SignOutButton = () => {
  const dispatch = useDispatch();

  const googleSignOut = async () => {
    auth()
      .signOut()
      .then(() => {
        console.log('user out');
      });
    await GoogleSignin.revokeAccess();
    dispatch(signOutAction());
  };
  return (
    <TouchableOpacity style={style.btn} onPress={googleSignOut}>
      <Text style={style.font}>{'Google Sign out'}</Text>
    </TouchableOpacity>
  );
};
