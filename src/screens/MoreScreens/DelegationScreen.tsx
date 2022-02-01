import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { DELEGATION_SCREEN } from '../../tests/testIDs';

export default function DelegationScreen() {
  const { colors } = useTheme();

  return (
    <View style={styles.container} testID={DELEGATION_SCREEN}>
      <Text style={{ color: colors.text }}>Delegation Screen !</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
