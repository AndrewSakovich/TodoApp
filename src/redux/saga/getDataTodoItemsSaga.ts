import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { createReferenceHelper } from '../../helpers/createReferenceHelper';
import { TodoItemType } from '../../models';
import { SignInPayload } from '../actions/authActions/successSignInAction';
import { put, select } from 'redux-saga/effects';
import { userTokenSelector } from '../selectors/userTokenSelector';
import { dataTodoItemsAction } from '../actions/todoActions/dataTodoItemsAction';

export function* getDataTodoItemsSaga() {
  const userToken: SignInPayload['userToken'] = yield select(userTokenSelector);

  const path = `Users/${userToken}/Todo`;

  const todoItemsData: FirebaseDatabaseTypes.DataSnapshot =
    yield createReferenceHelper.ref(path).once('value');
  const todoItems: TodoItemType[] = Object.values(todoItemsData.val() ?? {});

  put(dataTodoItemsAction({ todoItems }));
}
