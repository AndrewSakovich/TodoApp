import {TodoItemType} from '../models';
import {v4 as uuid} from 'uuid';

export const createNewItemHelper = (
  text: TodoItemType['text'],
): TodoItemType => {
  return {
    id: uuid(),
    text,
    done: false,
  };
};
