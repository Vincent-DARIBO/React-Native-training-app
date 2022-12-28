import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { render, fireEvent } from '../../tests/testUtil';
import { RequestsStackParamList } from '../../navigation/types';
import RequestsScreen from '../Requests/RequestsScreen';
import {
  CARD,
  REQUEST_LIST,
  DETAILS_SCREEN,
  DOUBLE_BUTTONBAR_RIGHT,
  DOUBLE_BUTTONBAR_LEFT,
} from '../../tests/testIDs';

import RequestDetailsScreen from '../Requests/RequestDetailsScreen/RequestDetailsScreen';

const Stack = createStackNavigator<RequestsStackParamList>();
function Component() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'RequestScreen'}
        component={RequestsScreen}
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
        options={() => ({ title: 'Requests Screen' })}
      />
      <Stack.Screen
        name="RequestDetails"
        component={RequestDetailsScreen}
        options={({ route }) => ({ title: 'Request#' + route.params.id })}
      />
    </Stack.Navigator>
  );
}
describe('RequestScreen test', () => {
  it('Should display the loading screen', async () => {
    const { findByTestId, queryByText } = render(<Component />);

    // Should display Loading... text
    expect(queryByText('Loading..')).not.toBeNull();

    // Should render the RequestScreen's screens
    expect(await findByTestId(REQUEST_LIST)).not.toBeNull();

    //The Loading text should not be displayed anymore
    expect(queryByText('Loading..')).toBeNull();
  });

  it("Should display RequestScreen's loaded screen", async () => {
    const { findAllByTestId, findByTestId, findByText } = render(<Component />);

    // Should display each components of the RequestScreen
    expect(await findByText('Requests Screen')).not.toBeNull();
    expect(await findByTestId(REQUEST_LIST)).not.toBeNull();
    expect(await findByTestId(DOUBLE_BUTTONBAR_LEFT)).not.toBeNull();
    expect(await findByTestId(DOUBLE_BUTTONBAR_RIGHT)).not.toBeNull();

    // Should display the list of items
    const listItems = await findAllByTestId(CARD);
    expect(listItems.length).toBe(4);
  });

  it('Should display the lists sorted when a button is pressed', async () => {
    const { findAllByTestId, findByTestId, debug } = render(<Component />);

    // Testing the sor function when pressign the buttons
    const leftButton = await findByTestId(DOUBLE_BUTTONBAR_LEFT);

    // Should press on the leftButton and display open cards
    fireEvent.press(leftButton);

    // Count the open cards
    const openCards = await findAllByTestId(CARD);
    // The open cards should be displayed
    expect(openCards).not.toBeNull();
    expect(openCards.length).toBe(4);

    const rightButton = await findByTestId(DOUBLE_BUTTONBAR_RIGHT);

    // Should press on the rightButton and display all cards
    fireEvent.press(rightButton);

    // Count all cards
    const allCards = await findAllByTestId(CARD);
    // All the card should be displayed
    expect(allCards).not.toBeNull();
    expect(allCards.length).toBe(10);
  });

  it('Should display the request details screen', async () => {
    const { findAllByTestId, queryByTestId } = render(<Component />);

    // Should display the list of items
    const listItems = await findAllByTestId(CARD);
    expect(listItems[0]).not.toBeNull();

    // Should press on a item and display the details screen
    fireEvent.press(listItems[0]);
    expect(queryByTestId(DETAILS_SCREEN)).not.toBeNull();
  });
});
