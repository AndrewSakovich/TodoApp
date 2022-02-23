import { NavigatorScreenParams } from '@react-navigation/native';
import { MainBottomTabParamList } from '../MainBottomTabNavigator/type';
import { NAMESCREEN } from '../nameScreen';

export type RootStackNavigationParamList = {
  [NAMESCREEN.MAIN_BOTTOM_TAB_NAVIGATOR]: NavigatorScreenParams<MainBottomTabParamList>;
  [NAMESCREEN.ADD_NEW_ITEM_SCREEN]: undefined;
  [NAMESCREEN.LOGIN_SCREEN]: undefined;
};
