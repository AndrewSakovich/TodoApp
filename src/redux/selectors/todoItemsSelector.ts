import { ReduxStoreType } from '../store';

export const todoItemsSelector = (state: ReduxStoreType) => {
  return state.todo.todoItems;
};
