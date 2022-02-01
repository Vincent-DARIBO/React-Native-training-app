//create a wrapper for the test and then make a custom renderer
/*create a stack wrappeer too */
import '../shared/i18n/config';
import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Themes from '../constants/Themes';
import ThemeProvider from '../providers/ThemeProvider';
import URLProvider from '../providers/URLProvider';
import fakeThemeProps from '../utils/fakeThemeProps';

function wrapper({ children }: { children: React.ReactNode }) {
  const { lightTheme, themeMode, setThemeMode } = fakeThemeProps();
  return (
    <NavigationContainer theme={Themes[0]}>
      <ThemeProvider
        lightTheme={lightTheme}
        themeMode={themeMode}
        setThemeMode={setThemeMode}
      >
        <URLProvider url="https://localhost:3000/users">{children}</URLProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

function customrender(component: React.ReactElement<any>) {
  return render(component, { wrapper: wrapper });
}
export * from '@testing-library/react-native';
export { customrender as render };
