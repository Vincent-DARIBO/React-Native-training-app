import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'react-native-paper';

import DelegationScreen from '../screens/MoreScreens/DelegationScreen';
import OnBehalfScreen from '../screens/MoreScreens/OnBehalfScreen';
import SettingsScreen from '../screens/MoreScreens/SettingsScreen';
import ViewsScreen from '../screens/MoreScreens/ViewsSreen';
import MoreScreen from '../screens/MoreScreens/MoreScreen';
import { MoreScreenNavigatorParamsList } from './types/index';
import Dashboard from 'screens/MoreScreens/Dashboard';

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
export default function MoreScreenNav() {
  const { header } = useTheme();
  const { t } = useTranslation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: header.background,
        },
        headerTintColor: header.subText,
        headerTitleStyle: {
          fontWeight: 'bold',
          color: header.subText,
        },
      }}
    >
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
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}
