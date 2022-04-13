import { TodoItemType } from '../models';
import { v4 as uuid } from 'uuid';
import { createNotificationIdHelper } from './createNotificationIdHelper';

export const createNewItemHelper = (
  text: TodoItemType['text'],
  date: Date,
  id?: string,
): TodoItemType => {
  return {
    id: id ?? uuid(),
    text,
    isDone: false,
    notificationDate: date.toString(),
    notificationId: createNotificationIdHelper(),
  };
};
