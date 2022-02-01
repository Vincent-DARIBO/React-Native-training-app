import { renderHook, act } from '@testing-library/react-hooks';
import { useThemeState } from '../useThemeState';
import Themes from '../../constants/Themes';

it('The theme mode should match with the theme object', () => {
  const { result } = renderHook(() => useThemeState());
  const [DefaultTheme, DarkTheme] = Themes;

  // Should set the state of setThemeMode to Light
  act(() => {
    result.current.setThemeMode('Light');
  });
  expect(result.current.themeMode).toEqual('Light');
  expect(result.current.theme).toEqual(DefaultTheme);

  // Should set the state of setThemeMode to Dark
  act(() => {
    result.current.setThemeMode('Dark');
  });
  expect(result.current.themeMode).toEqual('Dark');
  expect(result.current.theme).toEqual(DarkTheme);
});
