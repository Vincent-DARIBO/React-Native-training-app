import React from 'react';
import ThemeModeContext from '../contexts/ThemeModeContext';

export function useThemeMode() {
  const { themeMode, setThemeMode, theme } = React.useContext(ThemeModeContext);
  return { themeMode, setThemeMode, theme };
}
