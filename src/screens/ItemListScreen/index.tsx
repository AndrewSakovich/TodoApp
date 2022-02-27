import React, { FC, useEffect, useState } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';
import { useSelector } from 'react-redux';
import { TodoItem } from '../../components/TodoItem';
import { style } from './style';
import { TodoListEmptyComponent } from '../../components/TodoListEmptyComponent';
import { doneItemsSelectors } from '../../redux/selectors/todoSelector';
import { ReduxStoreType } from '../../redux/store';
import { TodoItemType } from '../../models';
import { useRoute } from '@react-navigation/native';
import { TodoListTopNavigationRouteProp } from '../../navigators/TodoListTopNavigator/type';
import { firebase } from '@react-native-firebase/database';

export const ItemListScreen: FC = () => {
  const [data, setData] = useState([]);
  const route = useRoute<TodoListTopNavigationRouteProp>();
  const userToken = useSelector(state => {
    return state.userToken;
  });
  const flagDone = route.params.isDone;
  const path = userToken => {
    return `Users/User${userToken}/Todo`;
  };

  useEffect(() => {
    const data = firebase
      .app()
      .database(
        'https://fir-2f0d3-default-rtdb.europe-west1.firebasedatabase.app/',
      )
      .ref(path(userToken))
      .on('value', snapshot => {
        const obj = snapshot.val() ? snapshot.val() : {};
        const arrData = Object.values(obj);
        setData(arrData);
      });

    // Stop listening for updates when no longer required
    return () =>
      firebase
        .app()
        .database(
          'https://fir-2f0d3-default-rtdb.europe-west1.firebasedatabase.app/',
        )
        .ref(path(userToken))
        .off('child_added', data);
  }, []);

  // const data = useSelector<ReduxStoreType, TodoItemType[]>(
  //   doneItemsSelectors(flagDone),
  // );
  const renderItem: ListRenderItem<TodoItemType> = ({ item }) => {
    return <TodoItem todoItem={item} />;
  };

  return (
    <FlatList
      style={style.container}
      data={data}
      renderItem={renderItem}
      ListEmptyComponent={<TodoListEmptyComponent />}
    />
  );
};
