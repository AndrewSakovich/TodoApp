import { put, select } from 'redux-saga/effects';
import { deleteItemAction } from '../actions/todoActions/deleteItemAction';
import { createReferenceHelper } from '../../helpers/createReferenceHelper';
import { userTokenSelector } from '../selectors/userTokenSelector';

export function* deleteItemSaga(props) {
  console.log('hello');
  const userToken = yield select(userTokenSelector);

  const { id } = props;
  console.log(id);

  yield createReferenceHelper.ref(`Users/${userToken}/Todo/${id}`).remove();

  yield put(deleteItemAction({ id }));
}
