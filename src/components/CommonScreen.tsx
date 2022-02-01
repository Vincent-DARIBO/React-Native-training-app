import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { ListItem } from '../types/types';
import useButtonNumber from '../hooks/useButtonNumber';
import DoubleButtonBar from './Buttons/DoubleButtonBar';
import Card from './Card';
import Footer from './Footer';

type Props = {
  titleLeft: string;
  titleRight: string;
  onPressLeft: () => void;
  onPressRight: () => void;
  listData: ListItem[];
  onItemClick: (item: ListItem) => void;
  testID?: string;
};

export default function CommonScreen({
  titleLeft,
  titleRight,
  onPressLeft,
  onPressRight,
  listData,
  onItemClick,
  testID,
}: Props) {
  const { colors } = useTheme();
  const { buttonNumber, setButtonNumber } = useButtonNumber();
  const displayCard = ({ item }: { item: ListItem }) => {
    return (
      <Card
        item={item}
        onClick={() => {
          onItemClick(item);
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: colors.background }}>
      <DoubleButtonBar
        titleLeft={titleLeft}
        titleRight={titleRight}
        onPressLeft={() => {
          onPressLeft();
          setButtonNumber(1);
        }}
        onPressRight={() => {
          onPressRight();
          setButtonNumber(2);
        }}
        buttonNumber={buttonNumber}
      />
      <FlatList
        keyExtractor={(item, index) => {
          return (item.id + index).toString();
        }}
        data={listData}
        renderItem={displayCard}
        contentInset={{ bottom: 50 }}
        testID={testID}
        ListFooterComponent={() => <Footer />}
      />
    </SafeAreaView>
  );
}
