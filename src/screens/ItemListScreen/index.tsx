import React, { FC, useEffect, useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useSelector } from 'react-redux';
import { TodoItem } from '../../components/TodoItem';
import { style } from './style';
import { TodoListEmptyComponent } from '../../components/TodoListEmptyComponent';
import { ReduxStoreType } from '../../redux/store';
import { TodoItemType } from '../../models';
import { useRoute } from '@react-navigation/native';
import { TodoListTopNavigationRouteProp } from '../../navigators/TodoListTopNavigator/type';
import { firebase } from '@react-native-firebase/database';
import { userTokenSelector } from '../../redux/selectors/userTokenSelector';
import { createReferenceHelper } from '../../helpers/createReferenceHelper';
import { SignInPayload } from '../../redux/actions/authActions/signInAction';

export const ItemListScreen: FC = () => {
  const [data, setData] = useState<TodoItemType[]>([]);
  const route = useRoute<TodoListTopNavigationRouteProp>();
  const userToken = useSelector<ReduxStoreType, SignInPayload['userToken']>(
    userTokenSelector,
  );

  const flagDone = route.params.isDone;
  const path = () => {
    return `Users/${userToken}/Todo`;
  };

  useEffect(() => {
    const data = createReferenceHelper.ref(path()).on('value', snapshot => {
      const obj = snapshot.val() ?? {};
      const arrData: TodoItemType[] = Object.values(obj);
      setData(arrData);
    });

    // Stop listening for updates when no longer required
    return () => createReferenceHelper.ref(path()).off('child_added', data);
  }, []);

  // const data = useSelector<ReduxStoreType, TodoItemType[]>(
  //   doneItemsSelectors(flagDone),
  // );

  const filter = (
    data: TodoItemType[],
    flagDone: TodoItemType['isDone'],
  ): TodoItemType[] => {
    if (flagDone) {
      return data.filter(item => {
        return item.isDone;
      });
    }

    return data.filter(item => {
      return !item.isDone;
    });
  };
  const newData = filter(data, flagDone);

  const renderItem: ListRenderItem<TodoItemType> = ({ item }) => {
    return <TodoItem todoItem={item} />;
  };

  return (
    <FlatList
      style={style.container}
      data={newData}
      renderItem={renderItem}
      ListEmptyComponent={<TodoListEmptyComponent />}
    />
  );
};
