import './src/shared/i18n/config';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import BottomBar from './src/navigation/BottomBar';
import URLProvider from './src/providers/URLProvider';
import { ThemeModeProvider } from './src/providers/ThemeModeProvider';
import { useThemeState } from './src/hooks/useThemeState';
import OfflineNotice from './src/components/Network/OfflineNotice';

export default function App() {
  const { theme, themeMode, setThemeMode } = useThemeState();


  return (
    <ThemeModeProvider
      theme={theme}
      themeMode={themeMode}
      setThemeMode={setThemeMode}
    >
      <PaperProvider theme={theme}>
        <React.Suspense fallback={() => {}}>
          <NavigationContainer theme={theme}>
            <OfflineNotice />
            <URLProvider url="https://my.api.mockaroo.com/request_information_section.json">
              <BottomBar />
            </URLProvider>
          </NavigationContainer>
        </React.Suspense>
      </PaperProvider>
    </ThemeModeProvider>
  );
}
