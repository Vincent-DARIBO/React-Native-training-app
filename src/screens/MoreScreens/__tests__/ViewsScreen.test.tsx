import '../../../shared/i18n/config';
import React from 'react';
import { render, fireEvent } from '../../../tests/testUtil';
import ViewsScreen from '../ViewsSreen';
import { CARD, VIEWS_LIST, VIEWS_SCREEN } from '../../../tests/testIDs';

describe('ViewsScreen test', () => {
  it('Should display the views screen properly', () => {
    const { queryAllByTestId, queryByTestId, queryByText } = render(
      <ViewsScreen />
    );

    const viewsScreen = queryByTestId(VIEWS_SCREEN);
    const viewsScreenList = queryByTestId(VIEWS_LIST);
    const listItems = queryAllByTestId(CARD);
    const leftButton = queryByText('All');
    const centerButton = queryByText('Open');
    const rightButton = queryByText('Closed');

    //Testing that the list is sorted when the buttons are pressed
    expect(viewsScreen).not.toBeNull();
    expect(viewsScreenList).not.toBeNull();
    expect(listItems).not.toBeNull();
    expect(leftButton).not.toBeNull();
    expect(centerButton).not.toBeNull();
    expect(rightButton).not.toBeNull();
  });

  it('Should displayed the list sorted when the all open and closed buttons are pressed', () => {
    const { queryAllByTestId, queryByTestId, queryByText } = render(
      <ViewsScreen />
    );
    const leftButton = queryByText('All');
    const centerButton = queryByText('Open');
    const rightButton = queryByText('Closed');

    expect(leftButton).not.toBeNull();
    fireEvent.press(leftButton);

    const allCards = queryAllByTestId(CARD);
    expect(allCards).not.toBeNull();
    expect(allCards.length).toBe(10);

    expect(centerButton).not.toBeNull();
    fireEvent.press(centerButton);

    const openCards = queryAllByTestId(CARD);
    expect(openCards).not.toBeNull();
    expect(openCards.length).toBe(4);

    expect(rightButton).not.toBeNull();
    fireEvent.press(rightButton);

    const closedCards = queryAllByTestId(CARD);
    expect(closedCards).not.toBeNull();
    expect(closedCards.length).toBe(7);
  });
});
