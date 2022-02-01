import React from 'react';
import { useTranslation } from 'react-i18next';
import { StackScreenProps } from '@react-navigation/stack';

import CommonScreen from '../../components/CommonScreen';
import { ActionsStackParamList } from '../../navigation/types/index';
import ListData from '../../constants/List';
import filterList from '../../utils/filterList';
import useDisplayedItems from '../../hooks/useDisplayedItems';
import { ListItem } from '../../types/types';

type Props = StackScreenProps<ActionsStackParamList, 'ActionScreen'>;

export default function ActionsScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const list = ListData.map((item: ListItem) =>
    item.id % 3 === 0
      ? {
          ...item,
          status: 'to do',
        }
      : {
          ...item,
          status: 'closed',
        }
  );
  const { displayedItems, setDisplayedItems } = useDisplayedItems(
    list,
    'to do'
  );
  function onItemClick(item: ListItem) {
    console.log(`you clicked on card ${item.id}`);
    navigation.navigate('ActionDetails', item);
  }

  return (
    <CommonScreen
      titleLeft={t('filters.actions.toDo')}
      titleRight={t('filters.actions.closed')}
      onPressLeft={() => {
        setDisplayedItems(filterList(list, 'to do'));
        console.log(Date.now(), displayedItems);
      }}
      onPressRight={() => {
        setDisplayedItems(filterList(list, 'closed'));
        console.log(Date.now(), displayedItems);
      }}
      listData={displayedItems}
      onItemClick={onItemClick}
      testID={'ACTIONS_SCREEN'}
    />
  );
}
