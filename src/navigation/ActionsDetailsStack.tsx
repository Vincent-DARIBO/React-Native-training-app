import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

import ActionsScreen from '../screens/Actions/ActionsScreen';
import RequestDetailsScreen from '../screens/Requests/RequestDetailsScreen/RequestDetailsScreen';
import { ActionsStackParamList } from './types/index';

const Stack = createStackNavigator<ActionsStackParamList>();

export default function ActionsDetailsStack() {
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
        name={'ActionScreen'}
        component={ActionsScreen}
        options={() => ({ title: t('tabs.actions') })}
      />
      <Stack.Screen
        name="ActionDetails"
        component={RequestDetailsScreen}
        options={({ route }) => ({ title: 'Request#' + route.params.id })}
      />
    </Stack.Navigator>
  );
}
