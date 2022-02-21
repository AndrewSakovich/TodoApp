import {createStore} from 'redux';
import {todoReducer, TodoReducerState} from './reducers/TodoReducer';

export type ReduxStoreType = TodoReducerState;

export const store = createStore(todoReducer);
