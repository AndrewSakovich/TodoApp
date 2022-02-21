import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {style} from './style';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';

export const SignInButton = () => {
  const googleSignIn = async () => {
    const {idToken} = await GoogleSignin.signIn();
    console.log(idToken);

    // Create a Google credential with the token
    const googleCredential = await auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const res = await auth().signInWithCredential(googleCredential);
    console.log(res);
  };

  const googleSignOut = async () => {
    auth()
      .signOut()
      .then(() => {
        console.log('user out');
      });
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
