import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

import { CARD } from '../tests/testIDs';
import Colors from '../constants/Colors';
import useLocalDateFormat from '../hooks/useLocalDateFormat';
import formatAmount from '../utils/formatAmount';

type Props = {
  item: {
    id: number;
    title: string;
    user: string;
    description: string;
    status: string;
    createdOn: string;
    overdueOn: string;
    formHtml: string;
    formData: string;
    formArchieve: string;
    amount: number;
  };
  onClick: () => void;
};

export default function Card({ item, onClick }: Props) {
  const { colors } = useTheme();
  const dateFormat = useLocalDateFormat(item.createdOn, 'date.format');
  const { t } = useTranslation();
  const formatedAmount = formatAmount(item.amount);

  return (
    <TouchableOpacity onPress={onClick} testID={CARD} style={styles.container}>
      <View style={styles.row}>
        <View>
          <View
            style={{
              ...styles.idContainer,
              backgroundColor: colors.containerIdText,
            }}
          >
            <Text style={{ ...styles.idText, color: colors.idText }}>
              #{item.id}
            </Text>
          </View>
          <Text style={{ ...styles.titleText, color: colors.text }}>
            {item.title}
          </Text>
          <View style={styles.description}>
            <Text style={{ color: colors.text }} numberOfLines={2}>
              {item.description}
            </Text>
          </View>
        </View>
        <View>
          <Text style={{ color: colors.text }}>{dateFormat}</Text>
          <Text style={{ color: colors.text }}>
            {t('amount')}
            {formatedAmount}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  idContainer: {
    borderRadius: 10,
    padding: 5,
    width: 75,
  },
  row: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  idText: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 15,
  },
  titleText: {
    fontWeight: 'bold',
  },
  description: {
    width: 250,
  },
});
