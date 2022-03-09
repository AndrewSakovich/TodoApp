import { put } from 'redux-saga/effects';
import { addItemAction } from '../actions/todoActions/addItemAction';
import { createReferenceHelper } from '../../helpers/createReferenceHelper';
import { AddItemSagaAction } from '../actions/todoSagaActions/addItemSagaAction';

export function* addItemSaga(action: AddItemSagaAction) {
  const { newItem, userToken } = action.payload;
  try {
    yield createReferenceHelper
      .ref(`Users/${userToken}/Todo/`)
      .child(`${newItem.id}`)
      .set(newItem);
    yield put(addItemAction({ newItem }));
  } catch (error) {
    console.error(error);
  }
}
