import { put, select } from 'redux-saga/effects';
import { deleteItemAction } from '../actions/todoActions/deleteItemAction';
import { createReferenceHelper } from '../../helpers/createReferenceHelper';
import { userTokenSelector } from '../selectors/userTokenSelector';
import { DeleteItemSagaActionPayload } from '../actions/todoSagaActions/deleteItemSagaAction';
import { SignInPayload } from '../actions/authActions/signInAction';

export function* deleteItemSaga(props: DeleteItemSagaActionPayload) {
  console.log('hello');
  const userToken: SignInPayload['userToken'] = yield select(userTokenSelector);

  const { id } = props;
  console.log(id);

  yield createReferenceHelper.ref(`Users/${userToken}/Todo/${id}`).remove();

  yield put(deleteItemAction({ id }));
}
