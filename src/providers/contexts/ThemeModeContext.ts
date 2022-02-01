import React from 'react';

const ThemeModeContext = React.createContext({
  themeMode: 'Auto',
  setThemeMode: () => {},
  theme: undefined,
});

export default ThemeModeContext;
