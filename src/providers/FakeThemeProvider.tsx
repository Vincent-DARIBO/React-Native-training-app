import React from 'react';

import fakeThemeProps from '../utils/fakeThemeProps';
import ThemeProvider from './ThemeProvider';

type Props = {
  children: React.ReactNode;
};

export default function FakeThemeProvider({ children }: Props) {
  const { lightTheme, themeMode, setThemeMode } = fakeThemeProps();
  return (
    <ThemeProvider
      theme={lightTheme}
      themeMode={themeMode}
      setThemeMode={setThemeMode}
    >
      {children}
    </ThemeProvider>
  );
}
