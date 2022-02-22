import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '222403238077-0v19c0s4j3gtehel6m40u0c90hjjn2gu.apps.googleusercontent.com',
});

const App = () => {
  const googleSignIn = async () => {
    const { idToken } = await GoogleSignin.signIn();
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
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <TouchableOpacity style={styles.btn} onPress={googleSignIn}>
        <Text style={styles.font}>{'Google Sign In'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={googleSignOut}>
        <Text style={styles.font}>{'Google Sign out'}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'blue',
  },
  font: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'blue',
  },
});

export default App;
