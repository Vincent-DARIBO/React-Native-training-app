import React from 'react';
import ThemeModeContext from './contexts/ThemeModeContext';

type Props = {
  theme: object;
  themeMode: string;
  setThemeMode: (themeMode: string) => void;
  children: React.ReactNode;
};

export function ThemeModeProvider({
  theme,
  themeMode,
  setThemeMode,
  children,
}: Props) {
  const themeModeState = {
    theme: theme,
    setThemeMode: setThemeMode,
    themeMode: themeMode,
  };

  return (
    <ThemeModeContext.Provider value={themeModeState}>
      {children}
    </ThemeModeContext.Provider>
  );
}
