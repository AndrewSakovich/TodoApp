import {createStore} from 'redux';
import {todoReducer, TodoReducerState} from './reducers/todoReducer';

export type ReduxStoreType = TodoReducerState;

export const store = createStore(todoReducer);
