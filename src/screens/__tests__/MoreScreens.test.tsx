import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { fireEvent } from '@testing-library/react-native';
import { render } from '../../tests/testUtil';
import {
  SETTING_SCREEN,
  DELEGATION_SCREEN,
  MORE_SCREEN,
  VIEWS_SCREEN,
  ON_BEHALF_SCREEN,
  DELEGATION_ICON,
  VIEW_ICON,
  ON_BEHALF_ICON,
  SETTINGS_ICON,
} from '../../tests/testIDs';
import MoreScreen from '../MoreScreens/MoreScreen';
import SettingsScreen from '../MoreScreens/SettingsScreen';
import DelegationScreen from '../MoreScreens/DelegationScreen';
import ViewsScreen from '../MoreScreens/ViewsSreen';
import OnBehalfScreen from '../MoreScreens/OnBehalfScreen';
import { MoreScreenNavigatorParamsList } from '../../navigation/types/index';

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
        name="SettingsScreen"
        component={SettingsScreen}
        options={() => ({ title: t('more.settings.screenTitle') })}
      />
      <Stack.Screen
        name="DelegationScreen"
        component={DelegationScreen}
        options={() => ({ title: t('delegations.screenTitle') })}
      />
      <Stack.Screen
        name="ViewsScreen"
        component={ViewsScreen}
        options={() => ({ title: t('views.screenTitle') })}
      />
      <Stack.Screen
        name="OnBehalfScreen"
        component={OnBehalfScreen}
        options={() => ({ title: t('more.onBehalfOf.screenTitleUnactive') })}
      />
    </Stack.Navigator>
  );
}

describe('MoreScreen test', () => {
  it("Should match MoreScreen's screen", async () => {
    // Testing if Morescreen is well rendered
    const { queryByTestId } = render(<Component />);

    // Should display MoreScreen's screen
    const MoreScreen = queryByTestId(MORE_SCREEN);
    expect(MoreScreen).not.toBeNull();
  });
  it('Should render the screen associated with the pressed icon', async () => {
    const { queryByTestId, findByTestId } = render(<Component />);

    // Should display DelegationIcon
    const DelegationIcon = queryByTestId(DELEGATION_ICON);
    expect(DelegationIcon).not.toBeNull();

    // Should press on the icon
    fireEvent.press(DelegationIcon);

    // Should render the delegationScreen
    const DelegationScreen = queryByTestId(DELEGATION_SCREEN);
    expect(DelegationScreen).not.toBeNull();

    // Should display ViewIcon
    const ViewIcon = queryByTestId(VIEW_ICON);
    expect(ViewIcon).not.toBeNull();

    // Should press on the icon
    fireEvent.press(ViewIcon);

    // Should render the ViewScreen
    const ViewScreen = queryByTestId(VIEWS_SCREEN);
    expect(ViewScreen).not.toBeNull();

    // Should display OnBehalfIcon
    const OnBehalfIcon = queryByTestId(ON_BEHALF_ICON);
    expect(OnBehalfIcon).not.toBeNull();

    // Should press on the icon
    fireEvent.press(OnBehalfIcon.children[0]);

    // Should render the OnBehalfScreen
    const OnBehalfScreen = queryByTestId(ON_BEHALF_SCREEN);
    expect(OnBehalfScreen).not.toBeNull();

    // Should display SettingIcon
    const SettingIcon = queryByTestId(SETTINGS_ICON);
    expect(SettingIcon).not.toBeNull();

    // Should press on the icon
    fireEvent.press(SettingIcon);

    // Should check render the OnBehalfScreen
    const SettingScreen = queryByTestId(SETTING_SCREEN);
    expect(SettingScreen).not.toBeNull();
  });
});
