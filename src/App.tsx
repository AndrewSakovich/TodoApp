import React from 'react';
import 'react-native-get-random-values';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {RootStackNavigator} from './navigators/RootStackNavigator';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '222403238077-0v19c0s4j3gtehel6m40u0c90hjjn2gu.apps.googleusercontent.com',
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RootStackNavigator />
    </Provider>
  );
};

export default App;
