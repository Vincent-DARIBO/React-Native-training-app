import '../../../shared/i18n/config';
import React from 'react';
import { render } from '../../../tests/testUtil';
import SettingsScreen from '../SettingsScreen';

jest.mock('@expo/vector-icons/Ionicons', () => 'Ionicons');

it('Should render correctly', () => {
  const tree = render(<SettingsScreen />).toJSON;
  expect(tree).toMatchSnapshot();
});
