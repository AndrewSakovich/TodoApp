import React from 'react';
import 'react-native-get-random-values';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {RootStackNavigator} from './navigators/RootStackNavigator';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RootStackNavigator />
    </Provider>
  );
};

export default App;
