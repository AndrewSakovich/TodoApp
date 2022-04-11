import { RootStackNavigationParamList } from '../../navigators/RootStackNavigator/type';
import { NAMESCREEN } from '../../navigators/NAMESCREEN';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
//
// export type AddNewItemScreenNavigationProps = StackNavigationProp<RootStackNavigationParamList,
//   NAMESCREEN.ADD_NEW_ITEM_SCREEN>;

export type AddNewItemScreenProps = NativeStackScreenProps<
  RootStackNavigationParamList,
  NAMESCREEN.ADD_NEW_ITEM_SCREEN
>;

export type AddNewItemScreenNavigationProps =
  AddNewItemScreenProps['navigation'];

export type AddNewItemScreenRouteProps = AddNewItemScreenProps['route'];
