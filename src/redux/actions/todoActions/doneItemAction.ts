import {TodoActionTypes} from './index';

export type DoneItemPayload = {
  id: string;
};

export type DoneItemAction = {
  type: TodoActionTypes.DONE_ITEM;
  payload: DoneItemPayload;
};

export const doneItemAction = (payload: DoneItemPayload) => {
  return {
    type: TodoActionTypes.DONE_ITEM,
    payload,
  };
};
