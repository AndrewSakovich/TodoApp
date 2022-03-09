import { put, select } from 'redux-saga/effects';
import { deleteItemAction } from '../actions/todoActions/deleteItemAction';
import { createReferenceHelper } from '../../helpers/createReferenceHelper';
import { userTokenSelector } from '../selectors/userTokenSelector';
import { DeleteItemSagaAction } from '../actions/todoSagaActions/deleteItemSagaAction';
import { SignInPayload } from '../actions/authActions/signInAction';

export function* deleteItemSaga(action: DeleteItemSagaAction) {
  const userToken: SignInPayload['userToken'] = yield select(userTokenSelector);

  const { id } = action.payload;
  try {
    yield createReferenceHelper.ref(`Users/${userToken}/Todo/${id}`).remove();
  } catch (error) {
    console.error(error);
  }

  yield put(deleteItemAction({ id }));
}