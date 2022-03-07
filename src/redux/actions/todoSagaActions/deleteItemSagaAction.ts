import { TodoSagaActions } from './index';
import { TodoItemType } from '../../../models';

export type DeleteItemSagaAction = {
  type: TodoSagaActions.DELETE_ITEM_SAGA;
  payload: DeleteItemSagaActionPayload;
};

export type DeleteItemSagaActionPayload = {
  id: TodoItemType['id'];
};

export const deleteItemSagaAction = (payload: DeleteItemSagaActionPayload) => {
  return {
    type: TodoSagaActions.DELETE_ITEM_SAGA,
    payload,
  };
};
