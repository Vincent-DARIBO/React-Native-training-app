import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { render, fireEvent } from '../../tests/testUtil';
import RequestDetailsScreen from '../Requests/RequestDetailsScreen/RequestDetailsScreen';
import { TeamsStackParamList } from '../../navigation/types';
import {
  TEAMS_LIST,
  DOUBLE_BUTTONBAR_RIGHT,
  DOUBLE_BUTTONBAR_LEFT,
  CARD,
  DETAILS_SCREEN,
} from '../../tests/testIDs';
import TeamsScreen from '../Teams/TeamsScreen';
//Question : dois-je vérifier que le teams screen soit null une fois que je suis dans le tem details et inversement ?
const Stack = createStackNavigator<TeamsStackParamList>();
const Component = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'TeamsScreen'}
        component={TeamsScreen}
        initialParams={{
          user: 'vincent',
          id: 1,
          title: 'first object',
          description: 'description',
          status: 'opened',
          amount: 207600,
          createdOn: '12/09/21',
          overdueOn: '13/09/21',
          formHtml: '14/09/21',
          formData: '15/09/21',
          formArchieve: '16/09/21',
        }}
        options={() => ({ title: 'TeamsScreen' })}
      />
      <Stack.Screen
        name="TeamDetails"
        component={RequestDetailsScreen}
        options={({ route }) => ({ title: 'Request#' + route.params.id })}
      />
    </Stack.Navigator>
  );
};

describe('TeamsScreen test', () => {
  it('Should display TeamsScreen properly', () => {
    const { queryByTestId, queryAllByTestId } = render(<Component />);

    //Should display leftButton
    const leftButton = queryByTestId(DOUBLE_BUTTONBAR_LEFT);
    expect(leftButton).not.toBeNull();

    //Should display rightButton
    const rightButton = queryByTestId(DOUBLE_BUTTONBAR_RIGHT);
    expect(rightButton).not.toBeNull();

    //Should display the teamsList
    const teamsList = queryByTestId(TEAMS_LIST);
    expect(teamsList).not.toBeNull();

    //Should displayed the cards
    const displayedCards = queryAllByTestId(CARD);
    expect(displayedCards.length).not.toBeNull();

    // Should render six cards
    expect(displayedCards.length).toBe(6);
  });

  it('Should displayed the list sorted when the to do and closed buttons are pressed', () => {
    const { queryByTestId, queryAllByTestId } = render(<Component />);

    const leftButton = queryByTestId(DOUBLE_BUTTONBAR_LEFT);
    expect(leftButton).not.toBeNull();

    //Testing that the list is sorted when the to do button is pressed
    fireEvent.press(leftButton);

    // Should display the todoCards
    const todoCards = queryAllByTestId(CARD);
    expect(todoCards).not.toBeNull();
    expect(todoCards.length).toBe(6);

    //Should display the rightButton
    const rightButton = queryByTestId(DOUBLE_BUTTONBAR_RIGHT);
    expect(rightButton).not.toBeNull();

    //should display the list sorted when the closed button is pressed
    fireEvent.press(rightButton);

    // Should display the closed Cards
    const closedCards = queryAllByTestId(CARD);
    expect(closedCards).not.toBeNull();
    expect(closedCards.length).toBe(5);
  });

  it('Should display the details screen properly', () => {
    const { queryByTestId, queryAllByTestId, queryByText } = render(
      <Component />
    );

    // Should display listItems
    const listItems = queryAllByTestId(CARD);
    expect(listItems).not.toBeNull();
    expect(listItems[0]).not.toBeNull();

    //Testing that the details screen is displayed when pressing a card
    fireEvent.press(listItems[0]);

    //Should display the entire details screen with each elements
    expect(queryByTestId(DETAILS_SCREEN)).not.toBeNull();
    expect(queryByText('Request#35')).not.toBeNull();
    expect(queryByText('received')).not.toBeNull();
    expect(queryByText('Sep 13, 2021, 12:00 AM')).not.toBeNull();
    expect(queryByText('Vincent Daribo')).not.toBeNull();
  });
});
