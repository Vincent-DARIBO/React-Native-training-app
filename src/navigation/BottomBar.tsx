import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Ionicons,
  SimpleLineIcons,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import RequestDetailsStack from '../navigation/RequestDetailsStack';
import MoreScreenNav from '../navigation/MoreScreenNavigator';
import ActionsDetailsStack from './ActionsDetailsStack';
import TeamsDetailsStack from './TeamsDetailsStack';
import AssignementsDetailsStack from './AssignmentsDetailsStack';
import { BottomTabParamList } from './types/index';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomBar() {
  const { header, icon } = useTheme();
  const { t } = useTranslation();
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: header.background },
          headerTintColor: header.subText,
          tabBarActiveTintColor: icon.colorLight,
          tabBarIcon: () => {
            switch (route.name) {
              case 'RequestsScreenNav':
                return (
                  <SimpleLineIcons
                    name="notebook"
                    size={26}
                    color={icon.color}
                    accessibilityHint={t(
                      'request.details.helpAccessibilityHint'
                    )}
                  />
                );

              case 'ActionsScreenNav':
                return (
                  <Ionicons
                    name="sync-circle-outline"
                    size={26}
                    color={icon.color}
                  />
                );
              case 'TeamsScreenNav':
                return (
                  <MaterialCommunityIcons
                    name="account-group-outline"
                    size={26}
                    color={icon.color}
                  />
                );

              case 'AssignementsScreenNav':
                return (
                  <FontAwesome name="user-o" size={26} color={icon.color} />
                );

              case 'MoreScreenNav':
                return (
                  <MaterialIcons
                    name="more-horiz"
                    size={30}
                    color={icon.color}
                  />
                );
            }
          },
        })}
      >
        <Tab.Screen
          name="RequestsScreenNav"
          component={RequestDetailsStack}
          options={() => ({ title: t('tabs.requests'), headerShown: false })}
        />
        <Tab.Screen
          name="ActionsScreenNav"
          component={ActionsDetailsStack}
          options={() => ({ title: t('tabs.actions'), headerShown: false })}
        />
        <Tab.Screen
          name="TeamsScreenNav"
          component={TeamsDetailsStack}
          options={() => ({ title: t('tabs.teams'), headerShown: false })}
        />
        <Tab.Screen
          name="AssignementsScreenNav"
          component={AssignementsDetailsStack}
          options={() => ({ title: t('tabs.assignments'), headerShown: false })}
        />
        <Tab.Screen
          name="MoreScreenNav"
          component={MoreScreenNav}
          options={() => ({ title: t('tabs.more'), headerShown: false })}
        />
      </Tab.Navigator>
    </>
  );
}
