import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { fireEvent, within } from '@testing-library/react-native';
import {
  CARD,
  DETAILS_SCREEN,
  DOUBLE_BUTTONBAR_LEFT,
  DOUBLE_BUTTONBAR_RIGHT,
} from '../../tests/testIDs';
import { render } from '../../tests/testUtil';
import { AssignmentsStackParamList } from '../../navigation/types';
import RequestDetailsScreen from '../../screens/Requests/RequestDetailsScreen/RequestDetailsScreen';

import AssignementsScreen from '../Assignements/AssignementsScreen';

const Stack = createStackNavigator<AssignmentsStackParamList>();

function Component() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'AssignementsScreen'}
        component={AssignementsScreen}
        options={() => ({ title: 'assignments' })}
      />
      <Stack.Screen
        name="AssignementsDetails"
        component={RequestDetailsScreen}
        options={({ route }) => ({ title: 'Request#' + route.params.id })}
      />
    </Stack.Navigator>
  );
}

describe('AssignementScreen test', () => {
  it('Should display todo actions by default', async () => {
    const { queryAllByTestId, queryByTestId, queryByText } = render(
      <Component />
    );

    // Should display the assignement screen
    const AssignementScreen = queryByTestId('ASSIGNEMENT_SCREEN');
    expect(AssignementScreen).not.toBeNull();

    // Should display todo actions
    expect(queryAllByTestId(CARD).length).toBe(1);

    // Should display the action IDs
    expect(queryByText('#1')).not.toBeNull();
  });

  it('Should diplay the completed assignements', async () => {
    const { queryAllByTestId, queryByTestId } = render(<Component />);

    // Should get the completed button
    const completedButton = queryByTestId(DOUBLE_BUTTONBAR_RIGHT);
    expect(completedButton).not.toBeNull();

    // Should filter the list with completed action
    fireEvent.press(completedButton);

    // Should display completed actions
    expect(queryAllByTestId(CARD).length).toBe(10);
  });

  it('Should diplay the todo actions from the completed assignements', async () => {
    const { queryAllByTestId, queryByTestId } = render(<Component />);

    // Should get the closed button
    const completedButton = queryByTestId(DOUBLE_BUTTONBAR_RIGHT);
    expect(completedButton).not.toBeNull();

    // Should filter the list with closed action
    fireEvent.press(completedButton);

    // Should display closed actions
    expect(queryAllByTestId(CARD).length).toBe(10);

    // Should get the todo button
    const todoButton = queryByTestId(DOUBLE_BUTTONBAR_LEFT);
    expect(todoButton).not.toBeNull();

    // Should filter the list with todo actions
    fireEvent.press(todoButton);

    // Should display todo actions
    expect(queryAllByTestId(CARD).length).toBe(1);
  });

  it('Should navigate to action details screen', async () => {
    const { queryAllByTestId, queryByTestId } = render(<Component />);

    // Should get the first list item
    const cards = queryAllByTestId(CARD);
    expect(cards[0]).not.toBeNull();

    // Press the first card
    fireEvent.press(cards[0]);

    // Should navigate to details screen
    const AssignementDetails = within(queryByTestId(DETAILS_SCREEN));
    expect(AssignementDetails).not.toBeNull();

    // Should displayed the first action item info in the details
    expect(AssignementDetails.queryByText('first object')).not.toBeNull();
  });
});
