import { createStore, applyMiddleware } from 'redux';
import { todoReducer, TodoReducerState } from './reducers/TodoReducer';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import { helloSaga } from './saga/SignInSaga';
import { takeEvery } from 'redux-saga/effects';
import { AuthSagaActions } from './actions/authSagaActions';

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

function* rootWatcher() {
  yield takeEvery(AuthSagaActions.SIGN_IN_SAGA, helloSaga);
}
