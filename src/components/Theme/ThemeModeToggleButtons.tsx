/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native-a11y/has-accessibility-hint */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ToggleButton } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

import Colors from '../../constants/Colors';
import {
  THEME_MODE_BUTTONS,
  THEME_MODE_BUTTON_DARK,
  THEME_MODE_BUTTON_LIGHT,
  THEME_MODE_BUTTON_AUTO,
  THEME_MODE_BUTTON_PURPLE,
} from '../../tests/testIDs';

type Props = {
  themeMode: string;
  setThemeMode: (themeMode: string) => void;
};
const ThemeModeToggleButtons = ({ themeMode, setThemeMode }: Props) => {
  const { colors, icon } = useTheme();

  return (
    <View
      style={{
        ...styles.toggleButtonsContainer,
        backgroundColor: colors.background,
      }}
      testID={THEME_MODE_BUTTONS}
    >
      <View
        style={{
          ...styles.toggleContainer,
          borderColor: colors.button,
        }}
      >
        <View
          style={{
            borderBottomLeftRadius: 8,
            borderTopLeftRadius: 8,
            backgroundColor:
              themeMode === 'Auto' ? Colors.primary : colors.background,
          }}
          testID={THEME_MODE_BUTTON_AUTO}
        >
          <ToggleButton
            icon="dip-switch"
            onPress={() => {
              setThemeMode('Auto');
              console.log('toggle Auto pressed !');
            }}
            accessibilityLabel="Set theme mode to auto"
          />
        </View>
        <View
          style={{
            backgroundColor:
              themeMode === 'Dark' ? Colors.primary : colors.background,
          }}
          testID={THEME_MODE_BUTTON_DARK}
        >
          <ToggleButton
            icon={icon.moon}
            onPress={() => {
              setThemeMode('Dark');
              console.log('toggle Dark pressed !');
            }}
            accessibilityLabel="Set theme mode to dark"
          />
        </View>
        <View
          style={{
            backgroundColor:
              themeMode === 'Light' ? Colors.primary : colors.background,
          }}
          testID={THEME_MODE_BUTTON_LIGHT}
        >
          <ToggleButton
            icon={icon.sun}
            onPress={() => {
              setThemeMode('Light');
              console.log('toggle Light pressed !');
            }}
            accessibilityLabel="Set theme mode to light"
          />
        </View>
        <View
          style={{
            borderBottomRightRadius: 8,
            borderTopRightRadius: 8,
            backgroundColor:
              themeMode === 'Purple' ? colors.button : colors.background,
          }}
          testID={THEME_MODE_BUTTON_PURPLE}
        >
          <ToggleButton
            icon={icon.pencil}
            onPress={() => {
              setThemeMode('Purple');
              console.log('toggle Purple pressed !');
            }}
            accessibilityLabel="Set theme mode to purple"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleButtonsContainer: {
    marginLeft: 50,
    paddingLeft: 26,
    paddingVertical: 16,
  },
  toggleContainer: {
    width: '90%',
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-between',
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 10,
  },
});

export default ThemeModeToggleButtons;
