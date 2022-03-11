import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { createReferenceHelper } from '../../helpers/createReferenceHelper';
import { TodoItemType } from '../../models';
import { SignInPayload } from '../actions/authActions/successSignInAction';
import { put, select } from 'redux-saga/effects';
import { userTokenSelector } from '../selectors/userTokenSelector';
import { dataTodoItemsAction } from '../actions/todoActions/dataTodoItemsAction';
import { GetDataTodoItemsSagaAction } from '../actions/todoSagaActions/getDataTodoItemsSagaAction';
import { createErrorAlertMessageHelper } from '../../helpers/createErrorAlertMessageHelper';

export function* getDataTodoItemsSaga(action: GetDataTodoItemsSagaAction) {
  const { callback } = action.payload;
  try {
    const userToken: SignInPayload['userToken'] = yield select(
      userTokenSelector,
    );

    const path = `Users/${userToken}/Todo`;

    const todoItemsData: FirebaseDatabaseTypes.DataSnapshot =
      yield createReferenceHelper.ref(path).once('value');
    const todoItems: TodoItemType[] = todoItemsData.val()
      ? Object.values(todoItemsData.val())
      : [];

    yield put(dataTodoItemsAction({ todoItems }));
    yield callback();
  } catch (error) {
    createErrorAlertMessageHelper('field download your Todo List');
  }
}
