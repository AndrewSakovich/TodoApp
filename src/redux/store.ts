import { applyMiddleware, createStore } from 'redux';
import { TodoReducerState } from './reducers/TodoReducer';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from './saga';
import { rootReducer } from './reducers/rootReducer';
import { AuthReducerState } from './reducers/authReducer';

export type ReduxStoreType = {
  todo: TodoReducerState;
  auth: AuthReducerState;
};
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);

sagaMiddleware.run(rootWatcher);
