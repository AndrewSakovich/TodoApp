import { takeEvery, takeLatest } from 'redux-saga/effects';
import { AuthSagaActions } from '../actions/authSagaActions';
import { signInSaga } from './signInSaga';
import { signOutSaga } from './signOutSaga';
import { TodoSagaActions } from '../actions/todoSagaActions';
import { addItemSaga } from './adItemSaga';
import { doneItemSaga } from './doneItemSaga';
import { deleteItemSaga } from './deleteItemSaga';
import { getDataTodoItemsSaga } from './getDataTodoItemsSaga';

export function* rootWatcher() {
  yield takeLatest(AuthSagaActions.SIGN_IN_SAGA, signInSaga);
  yield takeLatest(AuthSagaActions.SIGN_OUT_SAGA, signOutSaga);
  yield takeLatest(TodoSagaActions.ADD_ITEM_SAGA, addItemSaga);
  yield takeLatest(TodoSagaActions.DONE_ITEM_SAGA, doneItemSaga);
  yield takeLatest(TodoSagaActions.DELETE_ITEM_SAGA, deleteItemSaga);
  yield takeEvery(TodoSagaActions.GET_DATA_ITEMS_SAGA, getDataTodoItemsSaga);
}
