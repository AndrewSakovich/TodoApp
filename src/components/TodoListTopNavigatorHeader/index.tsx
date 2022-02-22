import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { style } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { COLORS } from '../../COLORS';
import { useNavigation } from '@react-navigation/native';
import { TodoListTopNavigationProp } from '../../navigators/TodoListTopNavigator/type';
import { nameScreen } from '../../navigators/nameScreen';

export const TodoListTopNavigatorHeader: FC = () => {
  const navigation = useNavigation<TodoListTopNavigationProp>();

  const navigateAddNewItemScreen = () => {
    navigation.navigate(nameScreen.ADD_NEW_ITEM_SCREEN);
  };

  return (
    <TouchableOpacity style={style.header} onPress={navigateAddNewItemScreen}>
      <FontAwesomeIcon icon={faPlus} size={25} color={COLORS.white} />
    </TouchableOpacity>
  );
};
