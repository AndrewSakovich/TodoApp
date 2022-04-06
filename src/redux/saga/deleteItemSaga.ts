import { put, select } from 'redux-saga/effects';
import { deleteItemAction } from '../actions/todoActions/deleteItemAction';
import { createReferenceHelper } from '../../helpers/createReferenceHelper';
import { userTokenSelector } from '../selectors/userTokenSelector';
import { DeleteItemSagaAction } from '../actions/todoSagaActions/deleteItemSagaAction';
import { SuccessSignInPayload } from '../actions/authActions/successSignInAction';
import { createAlertMessageHelper } from '../../helpers/createAlertMessageHelper';

export function* deleteItemSaga(action: DeleteItemSagaAction) {
  const userToken: SuccessSignInPayload['userToken'] = yield select(
    userTokenSelector,
  );

  const { id } = action.payload;
  try {
    yield createReferenceHelper.ref(`Users/${userToken}/Todo/${id}`).remove();
    yield put(deleteItemAction({ id }));
  } catch (error: any) {
    createAlertMessageHelper({
      message: `${error.message}`,
      title: 'Something went wrong',
      cancelButtonTitle: 'Cancel',
    });
  }
}
