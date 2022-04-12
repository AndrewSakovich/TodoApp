import { NavigatorScreenParams } from '@react-navigation/native';
import { MainBottomTabParamList } from '../MainBottomTabNavigator/type';
import { NAMESCREEN } from '../nameScreen';
import { TodoItemType } from '../../models';

export type RootStackNavigationParamList = {
  [NAMESCREEN.MAIN_BOTTOM_TAB_NAVIGATOR]: NavigatorScreenParams<MainBottomTabParamList>;
  [NAMESCREEN.ADD_NEW_ITEM_SCREEN]?: {
    isEdit: boolean;
    editItem: TodoItemType;
  };
  [NAMESCREEN.LOGIN_SCREEN]: undefined;
};
