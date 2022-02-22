import {TodoActionTypes} from './index';
import {TodoItemType} from '../../../models';

export const deleteItemAction = (payload: ItemDeletePayload) => {
  return {
    type: TodoActionTypes.DELETE_ITEM,
    payload,
  };
};

export type ItemDeletePayload = {
  id: TodoItemType['id'];
  isDone: TodoItemType['isDone'];
};

export type ItemDeleteAction = {
  type: TodoActionTypes.DELETE_ITEM;
  payload: ItemDeletePayload;
};
