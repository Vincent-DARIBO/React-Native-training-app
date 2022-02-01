import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { fireEvent, within } from '@testing-library/react-native';

import { render } from '../../tests/testUtil';
import { ActionsStackParamList } from '../../navigation/types';
import {
  CARD,
  DETAILS_SCREEN,
  DOUBLE_BUTTONBAR_LEFT,
  DOUBLE_BUTTONBAR_RIGHT,
} from '../../tests/testIDs';
import ActionsScreen from '../Actions/ActionsScreen';
import RequestDetailsScreen from '../Requests/RequestDetailsScreen/RequestDetailsScreen';

const Stack = createStackNavigator<ActionsStackParamList>();

function Component() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'ActionScreen'}
        component={ActionsScreen}
        options={() => ({ title: 'Actions Screen' })}
      />
      <Stack.Screen
        name="ActionDetails"
        component={RequestDetailsScreen}
        options={({ route }) => ({ title: 'Action#' + route.params.id })}
      />
    </Stack.Navigator>
  );
}

describe('ActionsScreen test', () => {
  it('Should display todo actions by default', async () => {
    const { queryAllByTestId, queryByTestId, queryByText } = render(
      <Component />
    );

    // Should display the actions screen
    const ActionList = queryByTestId('ACTIONS_SCREEN');
    expect(ActionList).not.toBeNull();

    // Should display todo actions
    expect(queryAllByTestId(CARD).length).toBe(3);

    // Should display the action IDs
    expect(queryByText('#3')).not.toBeNull();
    expect(queryByText('#6')).not.toBeNull();
    expect(queryByText('#9')).not.toBeNull();
  });

  it('Should diplay the closed actions', async () => {
    const { queryAllByTestId, queryByTestId } = render(<Component />);

    // Should get the closed button
    const closedButton = queryByTestId(DOUBLE_BUTTONBAR_RIGHT);
    expect(closedButton).not.toBeNull();

    // Should filter the list with closed action
    fireEvent.press(closedButton);

    // Should display closed actions
    expect(queryAllByTestId(CARD).length).toBe(8);
  });

  it('Should diplay the todo actions from the closed actions', async () => {
    const { queryAllByTestId, queryByTestId } = render(<Component />);

    // Should get the closed button
    const closedButton = queryByTestId(DOUBLE_BUTTONBAR_RIGHT);
    expect(closedButton).not.toBeNull();

    // Should filter the list with closed action
    fireEvent.press(closedButton);

    // Should display closed actions
    expect(queryAllByTestId(CARD).length).toBe(8);

    // Should get the todo button
    const todoButton = queryByTestId(DOUBLE_BUTTONBAR_LEFT);
    expect(todoButton).not.toBeNull();

    // Should filter the list with todo actions
    fireEvent.press(todoButton);

    // Should display todo actions
    expect(queryAllByTestId(CARD).length).toBe(3);
  });

  it('Should navigate to action details screen', async () => {
    const { queryAllByTestId, queryByTestId } = render(<Component />);

    // Should get the first list item
    const cards = queryAllByTestId(CARD);
    expect(cards[0]).not.toBeNull();

    // Press the first card
    fireEvent.press(cards[0]);

    // Should navigate to details screen
    const ActionsDetails = within(queryByTestId(DETAILS_SCREEN));
    expect(ActionsDetails).not.toBeNull();

    // Should displayed the first action item info in the details
    expect(ActionsDetails.queryByText('third object')).not.toBeNull();
  });
});
