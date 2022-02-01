import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { RequestsStackParamList } from '../../../navigation/types/index';
import useLocalDateFormat from '../../../hooks/useLocalDateFormat';
import DetailsCard from '../../../components/Details/DetailsCard';
import Footer from '../../../components/Footer';
import { DETAILS_SCREEN } from '../../../tests/testIDs';
type Props = StackScreenProps<RequestsStackParamList, 'RequestDetails'>;

export default function RequestDetailsScreen({ route }: Props) {
  const {
    status,
    user,
    title,
    createdOn,
    overdueOn,
    formHtml,
    formData,
    formArchieve,
  } = route.params;
  const formatedDateCreatedOn = useLocalDateFormat(
    createdOn,
    'datePicker.format'
  );
  const formatedDateOverdueOn = useLocalDateFormat(
    overdueOn,
    'datePicker.format'
  );
  return (
    <ScrollView style={styles.container} testID={DETAILS_SCREEN}>
      <DetailsCard
        title={title}
        user={user}
        status={status}
        createdOn={formatedDateCreatedOn}
        overdueOn={formatedDateOverdueOn}
        formHtml={formHtml}
        formData={formData}
        formArchieve={formArchieve}
      />
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
