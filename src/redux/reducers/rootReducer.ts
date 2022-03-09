import { combineReducers } from 'redux';
import {} from './TodoReducer';
import { todoReducer } from './TodoReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
  todo: todoReducer,
  auth: authReducer,
});
