import React from 'react';

import DetailsCardIcons from '../Details/DetailsCardIcons';
import {
  CHAT_ICON,
  CIRCLE_ICON,
  DETAIL_CARD_ICONS,
  GIT_ICON,
  HELP_ICON,
} from '../../tests/testIDs';
import { render } from '../../tests/testUtil';

jest.mock('@expo/vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-paper/src/styles/colors');

describe('DetailsCardIcons component tests', () => {
  it('should match with the details card icons', () => {
    const { queryByTestId, queryByText } = render(
      <DetailsCardIcons testID={DETAIL_CARD_ICONS} />
    );

    // Should display cards info
    expect(queryByTestId(DETAIL_CARD_ICONS)).not.toBeNull();
    expect(queryByText('Actions')).not.toBeNull();
    expect(queryByText('Workflow')).not.toBeNull();
    expect(queryByText('Comments')).not.toBeNull();
    expect(queryByText('Help')).not.toBeNull();

    // Should display icons
    expect(queryByTestId(CIRCLE_ICON)).not.toBeNull();
    expect(queryByTestId(GIT_ICON)).not.toBeNull();
    expect(queryByTestId(CHAT_ICON)).not.toBeNull();
    expect(queryByTestId(HELP_ICON)).not.toBeNull();
  });
});
