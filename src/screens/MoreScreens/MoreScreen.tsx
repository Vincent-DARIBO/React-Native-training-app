import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { StackScreenProps } from '@react-navigation/stack';

import { MoreScreenNavigatorParamsList } from '../../navigation/types';
import {
  MORE_SCREEN,
  DELEGATION_ICON,
  VIEW_ICON,
  ON_BEHALF_ICON,
  SETTINGS_ICON,
} from '../../tests/testIDs';

type Props = StackScreenProps<MoreScreenNavigatorParamsList, 'MoreScreen'>;

export default function MoreScreen({ navigation }: Props) {
  const { colors, icon } = useTheme();
  const { t } = useTranslation();
  return (
    <View testID={MORE_SCREEN}>
      <View style={styles.iconContainer}>
        <View style={styles.textView}>
          <Entypo
            testID={VIEW_ICON}
            color={icon.color}
            name="bar-graph"
            size={60}
            onPress={() => {
              navigation.navigate('ViewsScreen');
            }}
          />
          <Text style={{ color: colors.text }}>{t('views.screenTitle')}</Text>
        </View>
        <View style={styles.textView}>
          <FontAwesome5
            testID={DELEGATION_ICON}
            color={icon.color}
            name="network-wired"
            size={60}
            onPress={() => {
              navigation.navigate('DelegationScreen');
            }}
          />
          <Text style={{ color: colors.text }}>
            {t('delegations.screenTitle')}
          </Text>
        </View>
        <View style={styles.textView} testID={ON_BEHALF_ICON}>
          <Ionicons
            color={icon.color}
            name="person-circle-outline"
            size={60}
            onPress={() => {
              navigation.navigate('OnBehalfScreen');
            }}
          />
          <Text style={{ color: colors.text }}>
            {t('more.onBehalfOf.screenTitleUnactive')}
          </Text>
        </View>
        <View style={styles.textView}>
          <Ionicons
            testID={SETTINGS_ICON}
            color={icon.color}
            name="settings-outline"
            size={60}
            onPress={() => {
              navigation.navigate('SettingsScreen');
            }}
          />
          <Text style={{ color: colors.text }}>
            {t('more.settings.screenTitle')}
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  iconContainer: {
    padding: 20,
    height: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textView: {
    alignItems: 'center',
  },
});
