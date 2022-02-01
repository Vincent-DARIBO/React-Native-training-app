import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';

import { ListItem } from '../../types/types';
import FilterOnStatusToggleButton from '../../components/Buttons/FilterOnStatusToggleButton';
import Card from '../../components/Card';
import ListData from '../../constants/List';
import useDisplayedItems from '../../hooks/useDisplayedItems';
import useButtonNumber from '../../hooks/useButtonNumber';
import filterList from '../../utils/filterList';
import { VIEWS_LIST, VIEWS_SCREEN } from '../../tests/testIDs';

export default function ViewsScreen() {
  const { t } = useTranslation();
  const { buttonNumber, setButtonNumber } = useButtonNumber();
  const { displayedItems, setDisplayedItems } = useDisplayedItems(ListData);
  const titles = [
    t('filters.actions.all'),
    t('filters.actions.open'),
    t('filters.actions.closed'),
  ];
  const displayCard = ({ item }: { item: ListItem }) => {
    return (
      <Card
        item={item}
        onClick={() => {
          console.log('you clicked on the card', item.id);
        }}
      />
    );
  };
  return (
    <View style={styles.container} testID={VIEWS_SCREEN}>
      <FilterOnStatusToggleButton
        titles={titles}
        onPressLeft={() => {
          setButtonNumber(1);
          setDisplayedItems(filterList(ListData));
        }}
        onPressCenter={() => {
          setButtonNumber(2);
          setDisplayedItems(filterList(ListData, 'opened'));
        }}
        onPressRight={() => {
          setButtonNumber(3);
          setDisplayedItems(filterList(ListData, 'closed'));
        }}
        buttonNumber={buttonNumber}
      />
      <FlatList
        style={styles.list}
        keyExtractor={(item, index) => {
          return (item.id + index).toString();
        }}
        data={displayedItems}
        renderItem={displayCard}
        contentInset={{ bottom: 50 }}
        testID={VIEWS_LIST}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '100%',
  },
});
