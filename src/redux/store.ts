import { applyMiddleware, createStore } from 'redux';
import { todoReducer, TodoReducerState } from './reducers/TodoReducer';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { AuthSagaActions } from './actions/authSagaActions';
import { signInSaga } from './saga/signInSaga';
import { signOutSaga } from './saga/signOutSaga';
import { TodoSagaActions } from './actions/todoSagaActions';
import { addItemSaga } from './saga/adItemSaga';
import { doneItemSaga } from './saga/doneItemSaga';
import { deleteItemSaga } from './saga/deleteItemSaga';
import { rootWatcher } from './saga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export type ReduxStoreType = TodoReducerState;
const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, todoReducer);
export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);
export const persistor = persistStore(store);

sagaMiddleware.run(rootWatcher);
