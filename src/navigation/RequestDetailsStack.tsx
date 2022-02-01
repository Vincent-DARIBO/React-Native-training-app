import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

import RequestsScreen from '../screens/Requests/RequestsScreen';
import RequestDetailsScreen from '../screens/Requests/RequestDetailsScreen/RequestDetailsScreen';
import { RequestsStackParamList } from './types';

const Stack = createStackNavigator<RequestsStackParamList>();

export default function RequestDetailsStack() {
  const { t } = useTranslation();
  const { header } = useTheme();
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
        name="RequestScreen"
        component={RequestsScreen}
        options={() => ({ title: t('tabs.requests') })}
      />
      <Stack.Screen
        name="RequestDetails"
        component={RequestDetailsScreen}
        options={({ route }) => ({ title: 'Request#' + route.params.id })}
      />
    </Stack.Navigator>
  );
}
