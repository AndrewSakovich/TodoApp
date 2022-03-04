import { TodoItemType } from '../../models';
import { AddItemPayload } from '../actions/todoActions/addItemAction';
import { ItemDeletePayload } from '../actions/todoActions/deleteItemAction';
import { TodoActionTypes } from '../actions/todoActions';
import { DoneItemPayload } from '../actions/todoActions/doneItemAction';
import { AuthActionsTypes } from '../actions/authActions';
import { SignInPayload } from '../actions/authActions/signInAction';

export type TodoReducerState = {
  todoItems: TodoItemType[];
  userToken: SignInPayload['userToken'] | null;
  user: SignInPayload['user'] | null;
};

const initialState: TodoReducerState = {
  todoItems: [],
  userToken: null,
  user: null,
};

export const todoReducer = (
  state = initialState,
  action: any,
): TodoReducerState => {
  switch (action.type) {
    case TodoActionTypes.ADD_ITEM: {
      const { newItem }: AddItemPayload = action.payload;

      return {
        ...state,
        todoItems: [...state.todoItems, newItem],
      };
    }
    case TodoActionTypes.DELETE_ITEM: {
      const { id }: ItemDeletePayload = action.payload;

      const newTodoItems = state.todoItems.filter(item => {
        return item.id !== id;
      });
      return {
        ...state,
        todoItems: newTodoItems,
      };
    }
    case TodoActionTypes.DONE_ITEM: {
      const { id }: DoneItemPayload = action.payload;

      const newTodoItems = state.todoItems.map(item => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      });

      return {
        ...state,
        todoItems: newTodoItems,
      };
    }
    case AuthActionsTypes.SIGN_IN: {
      const { user, userToken, todoItems }: SignInPayload = action.payload;
      return {
        ...state,
        todoItems,
        userToken,
        user,
      };
    }
    case AuthActionsTypes.SIGN_OUT: {
      return {
        ...state,
        userToken: null,
      };
    }
  }
  return state;
};
