import { TodoSagaActions } from './index';
import { TodoItemType } from '../../../models';
import { AuthReducerState } from '../../reducers/authReducer';

export type AddItemSagaAction = {
  type: TodoSagaActions.ADD_ITEM_SAGA;
  payload: AddItemSagaActionPayload;
};

export type AddItemSagaActionPayload = {
  newItem: TodoItemType;
  userToken: AuthReducerState['userToken'];
  callback: (isSuccess: boolean) => void;
};

export const addItemSagaAction = (payload: AddItemSagaActionPayload) => {
  return {
    type: TodoSagaActions.ADD_ITEM_SAGA,
    payload,
  };
};
