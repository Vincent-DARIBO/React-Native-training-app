import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { render, within } from '../../tests/testUtil';
import { RequestsStackParamList } from '../../navigation/types';
import { DETAILS_SCREEN } from '../../tests/testIDs';
import RequestDetailsScreen from '../Requests/RequestDetailsScreen/RequestDetailsScreen';

jest.mock('react-native-paper/src/styles/colors');
const Stack = createStackNavigator<RequestsStackParamList>();

const Component = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'RequestDetails'}
        component={RequestDetailsScreen}
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
        options={() => ({ title: 'RequestDetailsScreen' })}
      />
    </Stack.Navigator>
  );
};

describe('RequestsScreent test', () => {
  it('Should render the details screen properly', () => {
    const { queryByTestId } = render(<Component />);

    const detailsScreen = within(queryByTestId(DETAILS_SCREEN));
    console.log(
      'here ---------->',
      detailsScreen.queryByText('2 Level approval v2').instance
    );

    expect(detailsScreen.queryByText('2 Level approval v2')).not.toBeNull();
  });
});
