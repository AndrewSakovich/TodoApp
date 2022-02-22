import {createStore} from 'redux';
import {todoReducer, TodoReducerState} from './reducers/TodoReducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, todoReducer);

export type ReduxStoreType = TodoReducerState;

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
