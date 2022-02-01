import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import { render } from '../../tests/testUtil';
import {
  DOUBLE_BUTTONBAR,
  DOUBLE_BUTTONBAR_RIGHT,
  DOUBLE_BUTTONBAR_LEFT,
} from '../../tests/testIDs';

import DoubleButtonBar from '../Buttons/DoubleButtonBar';

it('DoubleButtonBar test', () => {
  let buttonNumber = 0;
  const mockOnPressLeft = jest.fn();
  const mockOnPressRight = jest.fn();

  const { queryByTestId } = render(
    <DoubleButtonBar
      titleLeft="left"
      titleRight="right"
      onPressLeft={mockOnPressLeft}
      onPressRight={mockOnPressRight}
      buttonNumber={buttonNumber}
    />
  );

  // Should display DoubleButtonBar
  const DoubleButtonBarComponent = queryByTestId(DOUBLE_BUTTONBAR);
  expect(DoubleButtonBarComponent).not.toBeNull();

  // Should display DoubleButtonBarRight
  const DoubleButtonBarRight = queryByTestId(DOUBLE_BUTTONBAR_RIGHT);
  expect(DoubleButtonBarRight).not.toBeNull();

  // Should display DoubleButtonBarLeft
  const DoubleButtonBarLeft = queryByTestId(DOUBLE_BUTTONBAR_LEFT);
  expect(DoubleButtonBarLeft).not.toBeNull();

  // Should call the callback on button right bar
  fireEvent.press(DoubleButtonBarRight);
  expect(mockOnPressRight).toHaveBeenCalledTimes(1);

  // Should call the callback on button left bar
  fireEvent.press(DoubleButtonBarLeft);
  expect(mockOnPressLeft).toHaveBeenCalledTimes(1);
});
