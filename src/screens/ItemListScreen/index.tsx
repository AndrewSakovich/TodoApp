import React, {FC} from 'react';
import {View, FlatList, ListRenderItem, FlatListProps} from 'react-native';
import {useSelector} from 'react-redux';
import {TodoItem} from '../../components/TodoItem';
import {style} from './style';
import {TodoListEmptyComponent} from '../../components/TodoListEmptyComponent';
import {doneItemsSelectors} from '../../redux/selectors/todoSelector';
import {ReduxStoreType} from '../../redux/store';
import {TodoItemType} from '../../models';
import {useRoute} from '@react-navigation/native';
import {TodoListTopNavigationRouteProp} from '../../navigators/TodoListTopNavigator/type';

export const ItemListScreen: FC = () => {
  const route = useRoute<TodoListTopNavigationRouteProp>();
  const flagDone = route.params.done;

  const data = useSelector<ReduxStoreType, TodoItemType[]>(
    doneItemsSelectors(flagDone),
  );

  const renderItem: ListRenderItem<TodoItemType> = ({item}) => {
    return <TodoItem todoItem={item} />;
  };

  return (
    <View style={style.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={<TodoListEmptyComponent />}
      />
    </View>
  );
};
