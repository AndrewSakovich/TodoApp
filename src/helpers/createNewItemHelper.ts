import { TodoItemType } from '../models';
import { v4 as uuid } from 'uuid';
import { createNotificationIdHelper } from './createNotificationIdHelper';

export const createNewItemHelper = (
  text: TodoItemType['text'],
): TodoItemType => {
  return {
    id: uuid(),
    text,
    isDone: false,
    notificationId: createNotificationIdHelper(),
  };
};
