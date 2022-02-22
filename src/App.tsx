import React from 'react';
import 'react-native-get-random-values';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import {RootStackNavigator} from './navigators/RootStackNavigator';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {PersistGate} from 'redux-persist/integration/react';

GoogleSignin.configure({
  webClientId:
    '222403238077-0v19c0s4j3gtehel6m40u0c90hjjn2gu.apps.googleusercontent.com',
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootStackNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
