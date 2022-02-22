import { TodoActionTypes } from './index';
import { TodoItemType } from '../../../models';

export const doneItemAction = (payload: DoneItemPayload) => {
  return {
    type: TodoActionTypes.DONE_ITEM,
    payload,
  };
};

export type DoneItemPayload = {
  id: TodoItemType['id'];
};

export type DoneItemAction = {
  type: TodoActionTypes.DONE_ITEM;
  payload: DoneItemPayload;
};
