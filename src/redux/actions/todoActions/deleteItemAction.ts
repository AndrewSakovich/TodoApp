import {TodoActionTypes} from './index';

export type ItemDeletePayload = {
  id: string;
  done: boolean;
};

export type ItemDeleteAction = {
  type: TodoActionTypes.DELETE_ITEM;
  payload: ItemDeletePayload;
};

export const deleteItemAction = (payload: ItemDeletePayload) => {
  return {
    type: TodoActionTypes.DELETE_ITEM,
    payload,
  };
};
