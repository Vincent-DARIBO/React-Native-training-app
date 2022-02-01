import React from 'react';
import LocaleContext from '../contexts/LocaleContext';

export default function useLocale() {
  const { locale } = React.useContext(LocaleContext);
  return locale;
}
