import { put, select } from 'redux-saga/effects';
import { doneItemAction } from '../actions/todoActions/doneItemAction';
import { firebase } from '@react-native-firebase/database';
import { userTokenSelector } from '../selectors/userTokenSelector';
import { SuccessSignInPayload } from '../actions/authActions/successSignInAction';
import { DoneItemSagaAction } from '../actions/todoSagaActions/doneItemSagaAction';
import { createErrorAlertMessageHelper } from '../../helpers/createErrorAlertMessageHelper';

export function* doneItemSaga(action: DoneItemSagaAction) {
  const { id, isDone } = action.payload;
  try {
    const userToken: SuccessSignInPayload['userToken'] = yield select(
      userTokenSelector,
    );
    yield firebase
      .app()
      .database(
        'https://fir-2f0d3-default-rtdb.europe-west1.firebasedatabase.app/',
      )
      .ref(`Users/${userToken}/Todo/${id}`)
      .update({ isDone: !isDone });
    yield put(doneItemAction({ id }));
  } catch (error) {
    createErrorAlertMessageHelper('failed update your task');
  }
}
