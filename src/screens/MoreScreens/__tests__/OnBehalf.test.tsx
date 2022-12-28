import '../../../shared/i18n/config';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import { fireEvent, render } from '../../../tests/testUtil';
import { ON_BEHALF_SCREEN, ON_BEHALF_ICON } from '../../../tests/testIDs';
import { MoreScreenNavigatorParamsList } from '../../../navigation/types/index';
import OnBehalfScreen from '../OnBehalfScreen';
import MoreScreen from '../MoreScreen';

const Stack = createStackNavigator<MoreScreenNavigatorParamsList>();

const item = {
  id: 8,
  title: 'first object',
  user: 'Vincent Daribo',
  description: 'description',
  status: 'opened',
  createdOn: '12/09/21',
  overdueOn: '13/09/21',
  formHtml: '14/09/21',
  formData: '15/09/21',
  formArchieve: '16/09/21',
  amount: 10000,
};

function Component() {
  const { t } = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MoreScreen"
        initialParams={item}
        component={MoreScreen}
        options={{ headerTitle: t('tabs.more') }}
      />
      <Stack.Screen
        name="OnBehalfScreen"
        component={OnBehalfScreen}
        options={() => ({ title: t('more.onBehalfOf.screenTitleUnactive') })}
      />
    </Stack.Navigator>
  );
}
describe('OnBehalf test', () => {
  it('Should display the Obehalsceen', () => {
    const { queryByText, queryByTestId } = render(<Component />);

    /*Getting the the view containing the icon and the text of the On Behalf
    component inside of MoreScreen and testing that it is displayed */
    const onBehalfIcon = queryByTestId(ON_BEHALF_ICON);
    expect(onBehalfIcon).not.toBeNull();

    // Testing that the text and the icon are displayed
    expect(onBehalfIcon.children).toHaveLength(2);

    // Clicking on the icon
    fireEvent.press(onBehalfIcon.children[0]);

    // Testing thaht OnBehalfScreen and the alert are displayed
    const onBehalfScreenDisplay = queryByTestId(ON_BEHALF_SCREEN);
    const snackBar = queryByText('Cancel');

    expect(onBehalfScreenDisplay).not.toBeNull();
    expect(queryByText('OnBehalfScreen')).not.toBeNull();
    expect(snackBar).not.toBeNull();

    // Testing that after the button is pressed the OnBehalfScreen is not displayed anymore
    fireEvent.press(snackBar);
    expect(queryByText('OnBehalfScreen')).toBeNull();
    expect(queryByTestId(ON_BEHALF_SCREEN)).toBeNull();
    expect(queryByText('Cancel')).toBeNull();
  });
});
