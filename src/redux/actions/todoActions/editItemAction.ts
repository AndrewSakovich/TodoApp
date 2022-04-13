import { TodoItemType } from '../../../models';
import { TodoActionTypes } from './index';

export type EditItemSagaAction = {
  type: TodoActionTypes.EDIT_ITEM;
  payload: EditItemPayload;
};

export type EditItemPayload = {
  newItem: TodoItemType;
};

export const editItemAction = (payload: EditItemPayload) => {
  return {
    type: TodoActionTypes.EDIT_ITEM,
    payload,
  };
};
