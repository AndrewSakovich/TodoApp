import { takeEvery } from 'redux-saga/effects';
import { AuthSagaActions } from '../actions/authSagaActions';
import { signInSaga } from './signInSaga';
import { signOutSaga } from './signOutSaga';
import { TodoSagaActions } from '../actions/todoSagaActions';
import { addItemSaga } from './adItemSaga';
import { doneItemSaga } from './doneItemSaga';
import { deleteItemSaga } from './deleteItemSaga';

export function* rootWatcher() {
  yield takeEvery(AuthSagaActions.SIGN_IN_SAGA, signInSaga);
  yield takeEvery(AuthSagaActions.SIGN_OUT_SAGA, signOutSaga);
  yield takeEvery(TodoSagaActions.ADD_ITEM_SAGA, addItemSaga);
  yield takeEvery(TodoSagaActions.DONE_ITEM_SAGA, doneItemSaga);
  yield takeEvery(TodoSagaActions.DELETE_ITEM_SAGA, deleteItemSaga);
}
