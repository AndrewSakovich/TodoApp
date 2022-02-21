import {TodoItemType} from '../../../models';
import {TodoActionTypes} from './index';

export const addItemAction = (payload: AddItemPayload) => {
  return {
    type: TodoActionTypes.ADD_ITEM,
    payload,
  };
};

export type AddItemPayload = {
  newItem: TodoItemType;
};

export type addItemAction = {
  type: TodoActionTypes.ADD_ITEM;
  payload: AddItemPayload;
};
