import React, { FC, useEffect } from 'react';
import 'react-native-get-random-values';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { RootStackNavigator } from './navigators/RootStackNavigator';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';

GoogleSignin.configure({
  webClientId:
    '740273410229-9m3gobecp9lkem8at25cmohe0vnke464.apps.googleusercontent.com',
});

const App: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootStackNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
