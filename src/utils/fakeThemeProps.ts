import Themes from '../constants/Themes';

export default function fakeThemeProps() {
  const lightTheme = Themes[0];
  const themeMode = 'Light';
  const setThemeMode = () => {};

  return { lightTheme, themeMode, setThemeMode };
}
