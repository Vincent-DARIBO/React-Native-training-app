import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import { render } from '../../tests/testUtil';
import ThemeModeToggleButtons from '../Theme/ThemeModeToggleButtons';

describe('ThemeModeToggleButtons component tests', () => {
  it('Should change the theme mode from light to dark', () => {
    const setThemeModeMock = jest.fn();

    const { queryByA11yLabel } = render(
      <ThemeModeToggleButtons
        themeMode="Light"
        setThemeMode={setThemeModeMock}
      />
    );

    // Should display dark mode button
    const themeModeDarkButton = queryByA11yLabel('Set theme mode to dark');
    expect(themeModeDarkButton).not.toBeNull();

    // Press ThemeModeButtonAuto
    fireEvent.press(themeModeDarkButton);

    // Should call setThemeMode
    expect(setThemeModeMock).toHaveBeenCalledTimes(1);
    expect(setThemeModeMock).toHaveBeenCalledWith('Dark');
  });

  it('Should change the theme mode from dark to light', () => {
    const setThemeModeMock = jest.fn();

    const { queryByA11yLabel, debug } = render(
      <ThemeModeToggleButtons
        themeMode="Light"
        setThemeMode={setThemeModeMock}
      />
    );

    // Should display dark mode button
    const themeModeDarkButton = queryByA11yLabel('Set theme mode to dark');
    expect(themeModeDarkButton).not.toBeNull();

    // Press ThemeModeButtonAuto
    fireEvent.press(themeModeDarkButton);

    // Should call setThemeMode
    expect(setThemeModeMock).toHaveBeenCalledTimes(1);
    expect(setThemeModeMock).toHaveBeenCalledWith('Dark');

    // Should display light mode button
    const themeModeLightButton = queryByA11yLabel('Set theme mode to light');
    expect(themeModeLightButton).not.toBeNull();

    // Press ThemeModeButtonAuto
    setThemeModeMock.mockReset();
    fireEvent.press(themeModeLightButton);

    // Should call setThemeMode
    expect(setThemeModeMock).toHaveBeenCalledTimes(1);
    expect(setThemeModeMock).toHaveBeenCalledWith('Light');
  });

  it('Should change the theme mode from light to purple', () => {
    const setThemeModeMock = jest.fn();

    const { queryByA11yLabel } = render(
      <ThemeModeToggleButtons
        themeMode="Light"
        setThemeMode={setThemeModeMock}
      />
    );

    // Should display purple mode button
    const themeModePurpleButton = queryByA11yLabel('Set theme mode to purple');
    expect(themeModePurpleButton).not.toBeNull();

    // Press ThemeModeButtonAuto
    fireEvent.press(themeModePurpleButton);

    // Should call setThemeMode
    expect(setThemeModeMock).toHaveBeenCalledTimes(1);
    expect(setThemeModeMock).toHaveBeenCalledWith('Purple');
  });

  it('Should change the theme mode from light to auto', () => {
    const setThemeModeMock = jest.fn();

    const { queryByA11yLabel } = render(
      <ThemeModeToggleButtons
        themeMode="Light"
        setThemeMode={setThemeModeMock}
      />
    );

    // Should display auto mode button
    const themeModeAutoButton = queryByA11yLabel('Set theme mode to auto');
    expect(themeModeAutoButton).not.toBeNull();

    // Press ThemeModeButtonAuto
    fireEvent.press(themeModeAutoButton);

    // Should call setThemeMode
    expect(setThemeModeMock).toHaveBeenCalledTimes(1);
    expect(setThemeModeMock).toHaveBeenCalledWith('Auto');
  });
});
