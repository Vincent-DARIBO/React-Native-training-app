import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

import TeamsScreen from '../screens/Teams/TeamsScreen';
import RequestDetailsScreen from '../screens/Requests/RequestDetailsScreen/RequestDetailsScreen';
import { TeamsStackParamList } from './types';

const Stack = createStackNavigator<TeamsStackParamList>();

export default function TeamsDetailsStack() {
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
        name={'TeamsScreen'}
        component={TeamsScreen}
        options={() => ({ title: t('tabs.teams') })}
      />
      <Stack.Screen
        name="TeamDetails"
        component={RequestDetailsScreen}
        options={({ route }) => ({ title: 'Request#' + route.params.id })}
      />
    </Stack.Navigator>
  );
}
