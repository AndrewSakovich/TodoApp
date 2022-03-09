import { TodoItemType } from '../../../models';
import { TodoActionTypes } from './index';

export const dataTodoItemsAction = (payload: DataTodoItemsActionsPayload) => {
  return {
    type: TodoActionTypes.DATA_ITEMS,
    payload,
  };
};

export type DataTodoItemsActionsPayload = {
  todoItems: TodoItemType[];
};

export type DataTodoItemsAction = {
  type: TodoActionTypes.ADD_ITEM;
  payload: DataTodoItemsActionsPayload;
};
