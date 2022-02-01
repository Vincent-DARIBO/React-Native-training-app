import { NavigatorScreenParams } from '@react-navigation/native';

export type ParamContent = {
  id: number;
  title: string;
  user: string;
  description: string;
  status: string;
  amount: number;
  createdOn: string;
  overdueOn: string;
  formHtml: string;
  formData: string;
  formArchieve: string;
};
export type MoreScreenNavigatorParamsList = {
  MoreScreen: ParamContent;
  SettingsScreen: undefined;
  DelegationScreen: undefined;
  ViewsScreen: undefined;
  OnBehalfScreen: undefined;
  Dashboard: undefined;
};
export type RequestsStackParamList = {
  RequestScreen: ParamContent;
  RequestDetails: ParamContent;
};

export type AssignmentsStackParamList = {
  AssignementsScreen: ParamContent;
  AssignementsDetails: ParamContent;
};
export type ActionsStackParamList = {
  ActionScreen: ParamContent;
  ActionDetails: ParamContent;
};
export type TeamsStackParamList = {
  TeamsScreen: ParamContent;
  TeamDetails: ParamContent;
};

export type BottomTabParamList = {
  RequestsScreenNav: NavigatorScreenParams<RequestsStackParamList>;
  ActionsScreenNav: NavigatorScreenParams<ActionsStackParamList>;
  TeamsScreenNav: NavigatorScreenParams<TeamsStackParamList>;
  AssignementsScreenNav: NavigatorScreenParams<AssignmentsStackParamList>;
  MoreScreenNav: NavigatorScreenParams<MoreScreenNavigatorParamsList>;
};

export type SatckNavigator =
  | MoreScreenNavigatorParamsList
  | RequestsStackParamList
  | RequestsStackParamList
  | AssignmentsStackParamList
  | ActionsStackParamList;
