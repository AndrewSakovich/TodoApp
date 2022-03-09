import { applyMiddleware, createStore } from 'redux';
import { todoReducer, TodoReducerState } from './reducers/TodoReducer';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from './saga';
import { rootReducer } from './reducers/rootReducer';
import { AuthReducerState } from './reducers/authReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export type ReduxStoreType = {
  todo: TodoReducerState;
  auth: AuthReducerState;
};
const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);
export const persistor = persistStore(store);

sagaMiddleware.run(rootWatcher);
