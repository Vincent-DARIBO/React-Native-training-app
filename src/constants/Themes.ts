import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import merge from 'deepmerge';
import Colors from './Colors';

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);
const CombinedPurpleDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);
const Themes = [
  {
    ...CombinedDefaultTheme,
    dark: true,
    colors: {
      ...CombinedDefaultTheme.colors,
      title: '#959595',
      titleBackground: '#f9f9f9',
      borderColor: '#e0e0e6',
      listBackgroundColor: '#f9f9f9',
      button: Colors.primary,
      idText: Colors.primary,
      containerIdText: '#dcecfd',
      accent: Colors.primary,
      lightBackground: '#E0E0E0',
      informations: 'black',
    },
    header: {
      background: CombinedDefaultTheme.colors.primary,
      text: CombinedDefaultTheme.colors.surface,
      subText: '#f9f9f9',
    },
    icon: {
      moon: 'moon-waxing-crescent',
      sun: 'white-balance-sunny',
      pencil: 'pencil-outline',
      color: Colors.primary,
      background: Colors.primary,
      drawings: 'white',
    },
  },
  {
    ...CombinedDarkTheme,
    dark: true,
    colors: {
      ...CombinedDarkTheme.colors,
      backgroundColor: '#232323',
      title: '#f9f9f9',
      listBackgroundColor: 'black',
      button: Colors.primary,
      idText: Colors.primary,
      containerIdText: '#dcecfd',
      accent: Colors.primary,
      lightBackground: '#141313',
      informations: 'white',
    },
    header: {
      background: CombinedDarkTheme.colors.background,
      text: 'white',
      subText: Colors.primary,
    },
    icon: {
      moon: 'moon-full',
      sun: 'weather-sunny',
      pencil: 'pencil-outline',
      color: Colors.primary,
      background: Colors.primary,
      drawings: 'white',
    },
  },
  {
    ...CombinedPurpleDarkTheme,
    dark: true,
    colors: {
      ...CombinedPurpleDarkTheme.colors,
      title: '#D507DC',
      informations: 'white',
      titleBackground: 'black',
      borderColor: '#e0e0e6',
      listBackgroundColor: 'black',
      button: '#D507DC',
      idText: '#D507DC',
      containerIdText: '#E6A4E8',
      accent: '#D507DC',
      lightBackground: '#141313',
    },
    header: {
      background: CombinedPurpleDarkTheme.colors.background,
      text: '#D507DC',
      subText: '#E6A4E8',
    },
    icon: {
      moon: 'moon-full',
      sun: 'weather-sunny',
      pencil: 'pencil',
      color: '#D507DC',
      colorLight: '#E6A4E8',
      background: '#E6A4E8',
      drawings: 'black',
    },
  },
];

export default Themes;
