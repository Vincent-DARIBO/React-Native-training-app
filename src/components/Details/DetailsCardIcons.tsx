import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import {
  CHAT_ICON,
  CIRCLE_ICON,
  GIT_ICON,
  HELP_ICON,
} from '../../tests/testIDs';

type Props = {
  testID: string;
};

export default function DetailsCardIcons({ testID }: Props) {
  const { colors, icon } = useTheme();
  return (
    <View testID={testID}>
      <View style={styles.row}>
        <View style={styles.ioniconsPositions}>
          <View
            style={{
              ...styles.ioniconsContainer,
              backgroundColor: icon.background,
            }}
            testID={CIRCLE_ICON}
          >
            <Ionicons
              name="sync-circle-outline"
              color={icon.drawings}
              size={35}
            />
          </View>
          <Text style={{ color: colors.accent }}>Actions</Text>
        </View>
        {/* git */}
        <View style={styles.ioniconsPositions}>
          <View
            style={{
              ...styles.ioniconsContainer,
              backgroundColor: icon.background,
            }}
            testID={GIT_ICON}
          >
            <Ionicons
              name="git-network-sharp"
              color={icon.drawings}
              size={35}
            />
          </View>
          <Text style={{ color: colors.accent }}>Workflow</Text>
        </View>
        {/* chat */}
        <View style={styles.ioniconsPositions}>
          <View
            style={{
              ...styles.ioniconsContainer,
              backgroundColor: icon.background,
            }}
            testID={CHAT_ICON}
          >
            <Ionicons
              name="chatbubble-ellipses-outline"
              color={icon.drawings}
              size={35}
            />
          </View>
          <Text style={{ color: colors.accent }}>Comments</Text>
        </View>

        {/* help */}
        <View style={styles.ioniconsPositions}>
          <View
            style={{
              ...styles.ioniconsContainer,
              backgroundColor: icon.background,
            }}
            testID={HELP_ICON}
          >
            <Ionicons
              name="help-circle-outline"
              color={icon.drawings}
              size={35}
            />
          </View>
          <Text style={{ color: colors.accent }}>Help</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  ioniconsPositions: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  ioniconsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 55,
    height: 55,
    borderRadius: 50,
  },
});
