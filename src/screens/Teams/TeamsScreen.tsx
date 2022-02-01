import React from 'react';
import { useTranslation } from 'react-i18next';
import { StackScreenProps } from '@react-navigation/stack';

import { TeamsStackParamList } from '../../navigation/types';
import { ListItem } from '../../types/types';
import ListData from '../../constants/List';
import CommonScreen from '../../components/CommonScreen';
import filterList from '../../utils/filterList';
import useDisplayedItems from '../../hooks/useDisplayedItems';
import { TEAMS_LIST } from '../../tests/testIDs';

type Props = StackScreenProps<TeamsStackParamList, 'TeamsScreen'>;

export default function TeamsScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const list = ListData.map((item: ListItem, index: number) =>
    item.id > ListData.length / 2
      ? { ...item, id: item.id * index + index, status: 'to do' }
      : {
          ...item,
          id: item.id * index - index,
          status: 'closed',
        }
  );
  const { displayedItems, setDisplayedItems } = useDisplayedItems(
    list,
    'to do'
  );
  function onItemClick(item: ListItem) {
    navigation.navigate('TeamDetails', item);
  }
  return (
    <CommonScreen
      titleLeft={t('filters.actions.toDo')}
      titleRight={t('filters.actions.closed')}
      onPressLeft={() => {
        setDisplayedItems(filterList(list, 'to do'));
      }}
      onPressRight={() => {
        setDisplayedItems(filterList(list, 'closed'));
      }}
      listData={displayedItems}
      onItemClick={onItemClick}
      testID={TEAMS_LIST}
    />
  );
}
