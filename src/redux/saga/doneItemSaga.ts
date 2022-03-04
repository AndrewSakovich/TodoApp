import { put, select } from 'redux-saga/effects';
import { doneItemAction } from '../actions/todoActions/doneItemAction';
import { firebase } from '@react-native-firebase/database';
import { userTokenSelector } from '../selectors/userTokenSelector';

export function* doneItemSaga(props) {
  const userToken = yield select(userTokenSelector);
  console.log(userToken);
  const { id, isDone } = props;

  yield firebase
    .app()
    .database(
      'https://fir-2f0d3-default-rtdb.europe-west1.firebasedatabase.app/',
    )
    .ref(`Users/${userToken}/Todo/${id}`)
    .update({ isDone: !isDone });

  yield put(doneItemAction({ id }));
}
