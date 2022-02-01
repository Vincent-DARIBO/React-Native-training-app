import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeModeProvider } from './ThemeModeProvider';

type Props = {
  // J'ai un doute
  lightTheme: any;
  themeMode: string;
  setThemeMode: (themeMode: string) => void;
  children: React.ReactNode;
};

export default function ThemeProvider({
  lightTheme,
  themeMode,
  setThemeMode,
  children,
}: Props) {
  return (
    <ThemeModeProvider
      theme={lightTheme}
      setThemeMode={setThemeMode}
      themeMode={themeMode}
    >
      <PaperProvider theme={lightTheme}>{children}</PaperProvider>
    </ThemeModeProvider>
  );
}
