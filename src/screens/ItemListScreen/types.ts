import { TodoItemType } from '../../models';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs/src/types';
import { TodoListTopNavigationParamList } from '../../navigators/TodoListTopNavigator/type';
import { NAMESCREEN } from '../../navigators/NAMESCREEN';

export type ItemsScreenNavigationProps = MaterialTopTabScreenProps<
  TodoListTopNavigationParamList,
  NAMESCREEN.ITEMS_SCREEN
>;
export type DoneItemsScreenNavigationProps = MaterialTopTabScreenProps<
  TodoListTopNavigationParamList,
  NAMESCREEN.DONE_ITEMS_SCREEN
>;
export type ItemListNavigationProps =
  | DoneItemsScreenNavigationProps
  | ItemsScreenNavigationProps;
