import { EditItemSagaAction } from '../actions/todoSagaActions/editItemSagaAction';
import { createReferenceHelper } from '../../helpers/createReferenceHelper';
import { put, select } from 'redux-saga/effects';
import { createAlertMessageHelper } from '../../helpers/createAlertMessageHelper';
import { SuccessSignInPayload } from '../actions/authActions/successSignInAction';
import { userTokenSelector } from '../selectors/userTokenSelector';
import { editItemAction } from '../actions/todoActions/editItemAction';

export function* editItemSaga(action: EditItemSagaAction) {
  const { id, text } = action.payload;
  console.log('text', text);
  const userToken: SuccessSignInPayload['userToken'] = yield select(
    userTokenSelector,
  );
  try {
    yield createReferenceHelper
      .ref(`Users/${userToken}/Todo/${id}/text`)
      .set(text);
    put(editItemAction({ id, text }));
  } catch (error: any) {
    createAlertMessageHelper({
      message: `${error.message}`,
      title: 'Edit error',
      cancelButtonTitle: 'Cancel',
    });
  }
}
