import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { createReferenceHelper } from '../../helpers/createReferenceHelper';
import { TodoItemType } from '../../models';
import { SuccessSignInPayload } from '../actions/authActions/successSignInAction';
import { call, put, select } from 'redux-saga/effects';
import { userTokenSelector } from '../selectors/userTokenSelector';
import { setTodoItemsAction } from '../actions/todoActions/setTodoItemsAction';
import { GetDataTodoItemsSagaAction } from '../actions/todoSagaActions/getDataTodoItemsSagaAction';
import { createErrorAlertMessageHelper } from '../../helpers/createErrorAlertMessageHelper';

export function* getDataTodoItemsSaga(action: GetDataTodoItemsSagaAction) {
  const { callback } = action.payload;
  try {
    const userToken: SuccessSignInPayload['userToken'] = yield select(
      userTokenSelector,
    );

    const path = `Users/${userToken}/Todo`;

    const todoItemsData: FirebaseDatabaseTypes.DataSnapshot =
      yield createReferenceHelper.ref(path).once('value');
    const todoItems: TodoItemType[] = todoItemsData.val()
      ? Object.values(todoItemsData.val())
      : [];

    yield put(setTodoItemsAction({ todoItems }));
  } catch (error) {
    createErrorAlertMessageHelper('error while loading your Todo List');
  } finally {
    yield call(callback);
  }
}
