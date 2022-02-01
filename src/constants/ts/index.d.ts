import { ListItem } from '../../types/types';
//TO DO: add the theme interfaces
export interface ThemeColors {
  title: string;
  titleBackground: string;
  borderColor: string;
  listBackgroundColor: string;
  button: string;
  idText: string;
  containerIdText: string;
  accent: string;
  lightBackground: string;
  informations: string;
}
export const Colors: {
  white: string;
  primary: string;
  red: string;
  green: string;
  orange: string;
};
export const ListData: ListItem[];
