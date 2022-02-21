import {TodoItemType} from '../../models';
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs/src/types';
import {TodoListTopNavigationParamList} from '../../navigators/TodoListTopNavigator/type';
import {nameScreen} from '../../navigators/nameScreen';

export type TodoItemPropsType = {
  todoItem: TodoItemType;
};

export type ItemsScreenNavigationProps = MaterialTopTabScreenProps<
  TodoListTopNavigationParamList,
  nameScreen.ITEMS_SCREEN
>;
export type DoneItemsScreenNavigationProps = MaterialTopTabScreenProps<
  TodoListTopNavigationParamList,
  nameScreen.DONE_ITEMS_SCREEN
>;
export type ItemListNavigationProps =
  | DoneItemsScreenNavigationProps
  | ItemsScreenNavigationProps;
