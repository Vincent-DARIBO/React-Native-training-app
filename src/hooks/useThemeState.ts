import React from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Themes from '../constants/Themes';

const THEME_MODE_KEY = 'THEME_MODE_KEY';

function useThemeFromStorage(setThemeMode: (themeMode: string) => void): void {
  React.useLayoutEffect(() => {
    console.log('Load theme mode from storage');
    const getThemeFromStorage = async () => {
      try {
        const themeModeFromStorage = await AsyncStorage.getItem(THEME_MODE_KEY);
        if (themeModeFromStorage) {
          setThemeMode(themeModeFromStorage);
        }
      } catch (error) {
        console.log('Get theme mode from storage failed', error);
      }
    };
    getThemeFromStorage();
  }, [setThemeMode]);
}

export function useThemeState() {
  const colorScheme = useColorScheme();
  const [themeMode, setThemeMode] = React.useState('Auto');
  useThemeFromStorage(setThemeMode);
  const [DefaultTheme, DarkTheme, PurpleDarkTheme] = Themes;

  console.log(Date.now(), 'themeMode', themeMode);
  let theme = DefaultTheme;
  if (themeMode === 'Auto') {
    theme = colorScheme === 'light' ? DefaultTheme : DarkTheme;
  } else if (themeMode === 'Light') {
    theme = themeMode === 'Light' ? DefaultTheme : DarkTheme;
  } else if (themeMode === 'Dark') {
    theme = themeMode === 'Dark' ? DarkTheme : DefaultTheme;
  } else {
    theme = themeMode === 'Purple' ? PurpleDarkTheme : DefaultTheme;
  }
  React.useEffect(() => {
    console.log('Saving ' + themeMode + ' theme mode in storage');
    const saveTheme = async () => {
      await AsyncStorage.setItem(THEME_MODE_KEY, themeMode);
    };
    saveTheme();
  }, [themeMode]);
  return { theme, themeMode, setThemeMode };
}
