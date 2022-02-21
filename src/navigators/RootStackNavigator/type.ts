import {NavigatorScreenParams} from '@react-navigation/native';
import {MainBottomTabParamList} from '../MainBottomTabNavigator/type';
import {nameScreen} from '../nameScreen';

export type RootStackNavigationParamList = {
  [nameScreen.MAIN_BOTTOM_TAB_NAVIGATOR]: NavigatorScreenParams<MainBottomTabParamList>;
  [nameScreen.ADD_NEW_ITEM_SCREEN]: undefined;
};
