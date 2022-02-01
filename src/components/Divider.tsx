import React from 'react';
import { View, StyleSheet } from 'react-native';

import { DIVIDER } from '../tests/testIDs';

export default function Divider() {
  return <View style={styles.divider} testID={DIVIDER} />;
}

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
  },
});
