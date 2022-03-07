import { put } from 'redux-saga/effects';
import { addItemAction } from '../actions/todoActions/addItemAction';
import { createReferenceHelper } from '../../helpers/createReferenceHelper';
import { AddItemSagaActionPayload } from '../actions/todoSagaActions/addItemSagaAction';

export function* addItemSaga(props: AddItemSagaActionPayload) {
  const { newItem, userToken } = props;
  console.log('hello');
  console.log(newItem);

  yield createReferenceHelper
    .ref(`Users/${userToken}/Todo/`)
    .child(`${newItem.id}`)
    .set(newItem);

  yield put(addItemAction({ newItem }));
}
