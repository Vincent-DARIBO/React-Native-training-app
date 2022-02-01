import React from 'react';

import '../../shared/i18n/config';
import { render, fireEvent } from '../../tests/testUtil';
import { CARD } from '../../tests/testIDs';
import Card from '../Card';

const item = {
  id: 123,
  title: 'test',
  user: 'Tania Bezancon',
  description: 'Testing this nice component',
  createdOn: "'Sep 13, 2021, 12:00 AM'",
  amount: 1900,
};

describe('Card component tests', () => {
  it('Should match the details card description', () => {
    const { queryByText } = render(<Card item={item} onClick={() => null} />);

    // Should display the card Id
    expect(queryByText(`#${item.id}`)).not.toBeNull();

    // Should display the card title
    expect(queryByText(item.title)).not.toBeNull();

    // Should display the card description
    expect(queryByText(item.description)).not.toBeNull();
  });

  it('Should call the onClick function one time', () => {
    const clickMock = jest.fn();
    const { queryByTestId } = render(<Card item={item} onClick={clickMock} />);

    fireEvent.press(queryByTestId(CARD));
    expect(clickMock).toHaveBeenCalledTimes(1);
  });
});
