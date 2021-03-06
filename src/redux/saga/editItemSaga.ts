import { EditItemSagaAction } from '../actions/todoSagaActions/editItemSagaAction';
import { createReferenceHelper } from '../../helpers/createReferenceHelper';
import { call, put, select } from 'redux-saga/effects';
import { createAlertMessageHelper } from '../../helpers/createAlertMessageHelper';
import { SuccessSignInPayload } from '../actions/authActions/successSignInAction';
import { userTokenSelector } from '../selectors/userTokenSelector';
import { editItemAction } from '../actions/todoActions/editItemAction';

export function* editItemSaga(action: EditItemSagaAction) {
  const { newItem, callback } = action.payload;
  const { id, text } = newItem;

  const userToken: SuccessSignInPayload['userToken'] = yield select(
    userTokenSelector,
  );
  try {
    yield createReferenceHelper
      .ref(`Users/${userToken}/Todo/${id}/`)
      .update({ text });
    yield put(editItemAction({ newItem }));
    yield call(callback, true);
  } catch (error: any) {
    yield call(callback, false);
    createAlertMessageHelper({
      message: `${error.message}`,
      title: 'Edit error',
      cancelButtonTitle: 'Cancel',
    });
  }
}
