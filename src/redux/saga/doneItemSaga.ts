import { put, select } from 'redux-saga/effects';
import { doneItemAction } from '../actions/todoActions/doneItemAction';
import { firebase } from '@react-native-firebase/database';
import { userTokenSelector } from '../selectors/userTokenSelector';
import { SignInPayload } from '../actions/authActions/signInAction';
import { DoneItemSagaAction } from '../actions/todoSagaActions/doneItemSagaAction';

export function* doneItemSaga(action: DoneItemSagaAction) {
  const userToken: SignInPayload['userToken'] = yield select(userTokenSelector);
  const { id, isDone } = action.payload;
  try {
    yield firebase
      .app()
      .database(
        'https://fir-2f0d3-default-rtdb.europe-west1.firebasedatabase.app/',
      )
      .ref(`Users/${userToken}/Todo/${id}`)
      .update({ isDone: !isDone });
  } catch (error) {
    console.error(error);
  }

  yield put(doneItemAction({ id }));
}
