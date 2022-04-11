import { TodoItemType } from '../../../models';
import { TodoActionTypes } from './index';

export type EditItemSagaAction = {
  type: TodoActionTypes.EDIT_ITEM;
  payload: EditItemPayload;
};

export type EditItemPayload = {
  id: TodoItemType['id'];
  text: TodoItemType['text'];
};

export const editItemAction = (payload: EditItemPayload) => {
  return {
    type: TodoActionTypes.EDIT_ITEM,
    payload,
  };
};
