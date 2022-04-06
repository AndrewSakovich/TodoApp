import { put, select } from 'redux-saga/effects';
import { doneItemAction } from '../actions/todoActions/doneItemAction';
import { firebase } from '@react-native-firebase/database';
import { userTokenSelector } from '../selectors/userTokenSelector';
import { SuccessSignInPayload } from '../actions/authActions/successSignInAction';
import { DoneItemSagaAction } from '../actions/todoSagaActions/doneItemSagaAction';
import { createAlertMessageHelper } from '../../helpers/createAlertMessageHelper';

export function* doneItemSaga(action: DoneItemSagaAction) {
  const { id, isDone } = action.payload;
  try {
    const userToken: SuccessSignInPayload['userToken'] = yield select(
      userTokenSelector,
    );
    yield firebase
      .app()
      .database(
        'https://todolistfirebase-cb428-default-rtdb.europe-west1.firebasedatabase.app/',
      )
      .ref(`Users/${userToken}/Todo/${id}`)
      .update({ isDone: !isDone });
    yield put(doneItemAction({ id }));
  } catch (error: any) {
    createAlertMessageHelper({
      message: `${error.message}`,
      title: 'Login error',
      cancelButtonTitle: 'Cancel',
    });
  }
}
