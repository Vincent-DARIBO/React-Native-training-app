import React from 'react';

import { render, fireEvent } from '../../tests/testUtil';
import OfflineNotice from '../Network/OfflineNotice';
import FakeThemeProvider from '../../providers/FakeThemeProvider';
import * as networkStatus from '../../hooks/useNetworkStatus';

describe('OfflineNotice component tests', () => {
  it('Should not display the banner when online ', () => {
    const spyUseNetworkStatus = jest
      .spyOn(networkStatus, 'default')
      .mockImplementation(() => {
        return true;
      });

    const { queryByA11yLabel } = render(
      <FakeThemeProvider>
        <OfflineNotice />
      </FakeThemeProvider>
    );

    expect(queryByA11yLabel('hidden')).not.toBeNull();
  });

  it('Should display the banner when offline ', () => {
    const spyUseNetworkStatus = jest
      .spyOn(networkStatus, 'default')
      .mockImplementation(() => {
        return false;
      });

    const { queryByA11yLabel, queryByText } = render(
      <FakeThemeProvider>
        <OfflineNotice />
      </FakeThemeProvider>
    );

    // Should display the banner when offline
    expect(queryByA11yLabel('visible')).not.toBeNull();

    // Should hide the banner when the user press ok
    fireEvent.press(queryByText('Ok'));
    expect(queryByA11yLabel('hidden')).not.toBeNull();
  });
});
