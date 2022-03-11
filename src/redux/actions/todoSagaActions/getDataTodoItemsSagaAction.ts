import { TodoSagaActions } from './index';

export type GetDataTodoItemsSagaAction = {
  type: TodoSagaActions.GET_DATA_ITEMS_SAGA;
  payload: GetDataTodoItemsSagaActionPayload;
};

export type GetDataTodoItemsSagaActionPayload = {
  callback: () => void;
};

export const getDataTodoItemsSagaAction = (
  payload: GetDataTodoItemsSagaActionPayload,
) => {
  return {
    type: TodoSagaActions.GET_DATA_ITEMS_SAGA,
    payload,
  };
};
