import { RootStateType } from '../store';

export const todoItemsSelector = (state: RootStateType) => {
  return state.todo.todoItems;
};
