import * as Localization from 'expo-localization';

export const ENLocale = {
  months:
    'January_February_March_April_May_June_July_August_September_October_November_December'.split(
      '_'
    ),
  monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
  weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
    '_'
  ),
  weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
  weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
  formats: {
    LT: 'h:mm A',
    LTS: 'h:mm:ss A',
    L: 'YYYY-MM-DD',
    LL: 'MMMM D, YYYY',
    LLL: 'MMM D, YYYY hh:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A',
  },
  calendar: {
    sameDay: 'LT',
    nextDay: '[Tomorrow]',
    nextWeek: 'L',
    lastDay: '[Yesterday]',
    lastWeek: 'dddd',
    sameElse: 'L',
  },
  relativeTime: {
    future: '%s left',
    past: '%s late',
    s: 'a few seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years',
  },
  ordinal: (number: number) => {
    let b = number % 10;
    let output =
      ~~((number % 100) / 10) === 1
        ? 'th'
        : b === 1
        ? 'st'
        : b === 2
        ? 'nd'
        : b === 3
        ? 'rd'
        : 'th';
    return number + output;
  },
};

export const FRLocale = {
  months:
    'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split(
      '_'
    ),
  monthsShort:
    'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
  monthsParseExact: true,
  weekdays: 'Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi'.split('_'),
  weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
  weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
  weekdaysParseExact: true,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm',
  },
  calendar: {
    sameDay: 'LT',
    nextDay: '[Demain]',
    nextWeek: 'L',
    lastDay: '[Hier]',
    lastWeek: 'dddd',
    sameElse: 'L',
  },
  relativeTime: {
    future: '%s restants',
    past: '%s de retard',
    s: 'quelques secondes',
    m: 'une minute',
    mm: '%d minutes',
    h: 'une heure',
    hh: '%d heures',
    d: 'un jour',
    dd: '%d jours',
    M: 'un mois',
    MM: '%d mois',
    y: 'un an',
    yy: '%d ans',
  },
  ordinal: function (number: number) {
    return number + (number === 1 ? 'er' : 'e');
  },
};
export const locale = Localization.locale.includes('fr') ? 'fr' : 'en';
