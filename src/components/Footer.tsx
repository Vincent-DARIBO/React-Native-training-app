import React from 'react';
import { View, StyleSheet } from 'react-native';

import { FOOTER } from '../tests/testIDs';

export default function Footer() {
  return <View style={styles.footer} testID={FOOTER} />;
}
const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 100,
  },
});
