import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

import { DETAIL_CARD_ICONS } from '../../tests/testIDs';
import DetailsCardText from './DetailsCardText';
import DetailsCardIcons from './DetailsCardIcons';
import InformationsSection from './DetailsInformationsSection';

type Props = {
  title: string;
  status: string;
  user: string;
  overdueOn: string;
  createdOn: string;
  formHtml: string;
  formData: string;
  formArchieve: string;
};

export default function DetailsCard({
  title,
  status,
  user,
  createdOn,
  overdueOn,
  formHtml,
  formData,
  formArchieve,
}: Props) {
  const { colors } = useTheme();
  return (
    <View>
      <View
        style={{
          ...styles.DetailsCard,
          backgroundColor: colors.lightBackground,
        }}
      >
        <DetailsCardText title={title} user={user} />
        <DetailsCardIcons testID={DETAIL_CARD_ICONS} />
      </View>
      <InformationsSection
        status={status}
        description="2 Level approval v2"
        createdOn={createdOn}
        overdueOn={overdueOn}
        formHtml={formHtml}
        formData={formData}
        formArchieve={formArchieve}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  DetailsCard: {
    height: '27%',
  },
});
