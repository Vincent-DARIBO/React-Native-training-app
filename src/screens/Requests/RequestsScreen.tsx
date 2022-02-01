import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { StackScreenProps } from '@react-navigation/stack';
import axios from 'axios';

import CommonScreen from '../../components/CommonScreen';
import filterList from '../../utils/filterList';
import useDisplayedItems from '../../hooks/useDisplayedItems';
import { RequestsStackParamList } from '../../navigation/types/index';
import { ListItem } from '../../types/types';
import { REQUEST_LIST } from '../../tests/testIDs';
import useURL from '../../providers/hooks/useURL';

type Props = StackScreenProps<RequestsStackParamList, 'RequestScreen'>;

export default function RequestsScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([] as Array<ListItem>);
  const { displayedItems, setDisplayedItems } = useDisplayedItems(
    data,
    'opened'
  );
  const url = useURL();

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            'X-API-Key': '697d47a0',
          },
        });
        const items = response.data as ListItem[];
        setData(items);
        setDisplayedItems(filterList(items, 'opened'));
      } catch (error) {
        console.log(Date.now(), 'fetch', 'error', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text>Loading..</Text>
      </View>
    );
  }
  function onItemClick(item: ListItem): void {
    navigation.navigate('RequestDetails', item);
  }

  return (
    <CommonScreen
      titleLeft={t('filters.requests.myRequests')}
      titleRight={t('filters.requests.allRequests')}
      onPressLeft={() => {
        setDisplayedItems(filterList(data, 'opened'));
      }}
      onPressRight={() => {
        setDisplayedItems(filterList(data));
      }}
      listData={displayedItems}
      onItemClick={onItemClick}
      testID={REQUEST_LIST}
    />
  );
}
