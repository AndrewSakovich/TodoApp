import { TodoItemType } from '../../../models';
import { TodoActionTypes } from './index';

export const setTodoItemsAction = (payload: SetTodoItemsActionsPayload) => {
  return {
    type: TodoActionTypes.DATA_ITEMS,
    payload,
  };
};

export type SetTodoItemsActionsPayload = {
  todoItems: TodoItemType[];
};

export type SetTodoItemsActions = {
  type: TodoActionTypes.ADD_ITEM;
  payload: SetTodoItemsActionsPayload;
};
