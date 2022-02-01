import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

import AssignementsScreen from '../screens/Assignements/AssignementsScreen';
import RequestDetailsScreen from '../screens/Requests/RequestDetailsScreen/RequestDetailsScreen';
import { AssignmentsStackParamList } from './types';

const Stack = createStackNavigator<AssignmentsStackParamList>();

export default function AssignementsDetailsStack() {
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
        name={'AssignementsScreen'}
        component={AssignementsScreen}
        options={() => ({ title: t('tabs.assignments') })}
      />
      <Stack.Screen
        name="AssignementsDetails"
        component={RequestDetailsScreen}
        options={({ route }) => ({ title: 'Request#' + route.params.id })}
      />
    </Stack.Navigator>
  );
}
