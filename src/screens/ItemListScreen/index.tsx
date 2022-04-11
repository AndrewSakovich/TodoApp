import React, { FC, useEffect, useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TodoItem } from '../../components/TodoItem';
import { style } from './style';
import { TodoListEmptyComponent } from '../../components/TodoListEmptyComponent';
import { RootStateType } from '../../redux/store';
import { TodoItemType } from '../../models';
import { useRoute } from '@react-navigation/native';
import { TodoListTopNavigationRouteProp } from '../../navigators/TodoListTopNavigator/type';
import { doneItemsSelectors } from '../../redux/selectors/doneItemsSelector';
import { getDataTodoItemsSagaAction } from '../../redux/actions/todoSagaActions/getDataTodoItemsSagaAction';
import { COLORS } from '../../COLORS';
import { SkypeIndicator } from 'react-native-indicators';
import { todoItemsSelector } from '../../redux/selectors/todoItemsSelector';

export const ItemListScreen: FC = () => {
  const [isLoading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const route = useRoute<TodoListTopNavigationRouteProp>();

  const flagDone = route.params.isDone;

  const data = useSelector<RootStateType, TodoItemType[]>(
    doneItemsSelectors(flagDone),
  );
  useEffect(() => {
    const callback = () => {
      setLoading(false);
    };
    dispatch(getDataTodoItemsSagaAction({ callback }));
  }, []);

  const renderItem: ListRenderItem<TodoItemType> = ({ item }) => {
    return <TodoItem todoItem={item} />;
  };

  if (isLoading) {
    return (
      <SkypeIndicator size={70} color={COLORS.sapphire} style={style.loader} />
    );
  }

  return (
    <FlatList
      style={style.container}
      data={data}
      renderItem={renderItem}
      ListEmptyComponent={<TodoListEmptyComponent />}
    />
  );
};
