import { combineReducers } from 'redux';
import {} from './TodoReducer';
import { todoReducer } from './TodoReducer';
import { authReducer } from './authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const rootReducer = combineReducers({
  todo: todoReducer,
  auth: persistReducer(persistConfig, authReducer),
});
