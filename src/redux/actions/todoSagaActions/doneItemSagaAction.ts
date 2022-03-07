import { TodoSagaActions } from './index';
import { TodoItemType } from '../../../models';

export type DoneItemSagaAction = {
  type: TodoSagaActions.DONE_ITEM_SAGA;
  payload: DoneItemSagaActionPayload;
};

export type DoneItemSagaActionPayload = {
  id: TodoItemType['id'];
  isDone: TodoItemType['isDone'];
};

export const doneItemSagaAction = (payload: DoneItemSagaActionPayload) => {
  return {
    type: TodoSagaActions.DONE_ITEM_SAGA,
    payload,
  };
};
