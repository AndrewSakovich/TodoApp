import { EditItemSagaAction } from '../actions/todoSagaActions/editItemSagaAction';

export function* editItemSaga(action: EditItemSagaAction) {
  const { id, text } = action.payload;
}
