import React from 'react';
import { StyleSheet, View } from 'react-native';

import SettingsSectionList from '../../components/SectionList';
import { SETTING_SCREEN } from '../../tests/testIDs';

export default function SettingsScreen() {
  return (
    <View style={styles.container} testID={SETTING_SCREEN}>
      <SettingsSectionList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
