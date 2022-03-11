import { ReduxStoreType, RootStateType } from '../store';

export const doneItemsSelectors =
  (flagDone: boolean) => (state: RootStateType) => {
    if (flagDone) {
      return state.todo.todoItems.filter(item => {
        return item.isDone;
      });
    }

    return state.todo.todoItems.filter(item => {
      return !item.isDone;
    });
  };
