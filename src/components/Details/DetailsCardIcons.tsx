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
        <View
          style={{
            ...styles.ioniconsContainer,
            backgroundColor: icon.background,
          }}
          testID={GIT_ICON}
        >
          <Ionicons name="git-network-sharp" color={icon.drawings} size={35} />
        </View>
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
        <View
          style={{
            ...styles.ioniconsContainer,
            backgroundColor: icon.background,
          }}
          testID={HELP_ICON}
        >
          <View>
            <Ionicons
              name="help-circle-outline"
              color={icon.drawings}
              size={35}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonTitlesContainer}>
        <View style={styles.margin}>
          <Text style={{ color: colors.accent }}>Actions</Text>
        </View>
        <View style={styles.margin}>
          <Text style={{ color: colors.accent }}>Workflow</Text>
        </View>
        <View style={styles.margin}>
          <Text style={{ color: colors.accent }}>Comments</Text>
        </View>
        <View style={styles.margin}>
          <Text style={{ color: colors.accent }}>Help</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  ioniconsPositions: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonTitlesContainer: {
    flexDirection: 'row',
  },
  ioniconsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 36,
    width: '15%',
    height: '88%',
    borderRadius: 50,
  },
  margin: {
    marginTop: 85,
    marginLeft: 45,
  },
});
