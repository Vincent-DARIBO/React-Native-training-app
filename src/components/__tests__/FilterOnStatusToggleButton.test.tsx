import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import { render } from '../../tests/testUtil';
import {
  FILTERONSTATUS,
  FILTERONSTATUS_CLOSED,
  FILTERONSTATUS_OPEN,
} from '../../tests/testIDs';
import FilterOnStatusToggleButton from '../Buttons/FilterOnStatusToggleButton';

it('Should render the right filters when we press in on of the button', () => {
  let buttonNumber = 0;
  const titles = ['title1', 'title2', 'title3'];
  const MockOnPressFilterOnStatus = jest.fn();
  const MockOnPressFilterOnStatusOpen = jest.fn();
  const MockOnPressFilterOnStatusClosed = jest.fn();

  const { queryByTestId } = render(
    <FilterOnStatusToggleButton
      titles={titles}
      onPressLeft={MockOnPressFilterOnStatus}
      onPressCenter={MockOnPressFilterOnStatusOpen}
      onPressRight={MockOnPressFilterOnStatusClosed}
      buttonNumber={buttonNumber}
    />
  );

  // Should display FilterOnStatusToggleButton
  const FilterOnStatus = queryByTestId(FILTERONSTATUS);
  expect(FilterOnStatus).not.toBeNull();

  // Should display FilterOnStatusClosedButton
  const FilterOnStatusClosed = queryByTestId(FILTERONSTATUS_CLOSED);
  expect(FilterOnStatusClosed).not.toBeNull();

  // Should display FilterOnStatusOpenButton
  const FilterOnStatusOpen = queryByTestId(FILTERONSTATUS_OPEN);
  expect(FilterOnStatusOpen).not.toBeNull();

  // Pressing on FilterOnStatus
  fireEvent.press(FilterOnStatus);
  expect(MockOnPressFilterOnStatus).toHaveBeenCalledTimes(1);

  // Pressing on FilterOnStatusClosed
  fireEvent.press(FilterOnStatusClosed);
  expect(MockOnPressFilterOnStatusClosed).toHaveBeenCalledTimes(1);

  // Pressing on FilterOnStatusOpen
  fireEvent.press(FilterOnStatusOpen);
  expect(MockOnPressFilterOnStatusOpen).toHaveBeenCalledTimes(1);
});
