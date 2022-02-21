import React, {FC} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {style} from './style';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {signInAction} from '../../redux/actions/todoActions/signInAction';
import {signOutAction} from '../../redux/actions/todoActions/signOutAction';

export const SignInButton: FC = () => {
  const dispath = useDispatch();

  const googleSignIn = async () => {
    const {idToken} = await GoogleSignin.signIn();
    console.log(idToken);

    // Create a Google credential with the token
    const googleCredential = await auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    const token = await auth().signInWithCredential(googleCredential);
    console.log(token);
    dispath(signInAction({token}));
  };

  const googleSignOut = async () => {
    auth()
      .signOut()
      .then(() => {
        console.log('user out');
      });
    await GoogleSignin.revokeAccess();
    dispath(signOutAction());
  };

  return (
    <View style={style.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <TouchableOpacity style={style.btn} onPress={googleSignIn}>
        <Text style={style.font}>{'Google Sign In'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.btn} onPress={googleSignOut}>
        <Text style={style.font}>{'Google Sign out'}</Text>
      </TouchableOpacity>
    </View>
  );
};
