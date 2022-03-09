import { TodoSagaActions } from './index';
import { TodoItemType } from '../../../models';
import { SignInPayload } from '../authActions/successSignInAction';

export type AddItemSagaAction = {
  type: TodoSagaActions.ADD_ITEM_SAGA;
  payload: AddItemSagaActionPayload;
};

export type AddItemSagaActionPayload = {
  newItem: TodoItemType;
  userToken: SignInPayload['userToken'];
};

export const addItemSagaAction = (payload: AddItemSagaActionPayload) => {
  return {
    type: TodoSagaActions.ADD_ITEM_SAGA,
    payload,
  };
};
