import React from 'react';
import { useTranslation } from 'react-i18next';
import { StackScreenProps } from '@react-navigation/stack';

import { AssignmentsStackParamList } from '../../navigation/types';
import { ListItem } from '../../types/types';
import ListData from '../../constants/List';
import CommonScreen from '../../components/CommonScreen';
import filterList from '../../utils/filterList';
import useDisplayedItems from '../../hooks/useDisplayedItems';

type Props = StackScreenProps<AssignmentsStackParamList, 'AssignementsScreen'>;
export default function AssignementsScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const list = ListData.map((item: ListItem, index: number) =>
    index < 1
      ? {
          ...item,
          status: 'to do',
        }
      : { ...item, id: item.id * index * index + 1, status: 'completed' }
  );
  const { displayedItems, setDisplayedItems } = useDisplayedItems(
    list,
    'to do'
  );
  function onItemClick(item: ListItem) {
    console.log(`you clicked on card ${item.id}`);
    navigation.navigate('AssignementsDetails', item);
  }
  return (
    <CommonScreen
      titleLeft={t('filters.actions.toDo')}
      titleRight={t('action.subStatus.completed')}
      onPressLeft={() => {
        setDisplayedItems(filterList(list, 'to do'));
      }}
      onPressRight={() => {
        setDisplayedItems(filterList(list, 'completed'));
      }}
      listData={displayedItems}
      onItemClick={onItemClick}
      testID={'ASSIGNEMENT_SCREEN'}
    />
  );
}
