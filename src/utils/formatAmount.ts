import numeral from 'numeral';
import 'numeral/locales/fr';
import { locale } from '../shared/i18n/locales';

export default function formatAmount(amount: number): string {
  const currency = locale === 'fr' ? '0,0.00$' : '$0,0.00';
  numeral.locale(locale);
  const formatedAmount: string = numeral(amount).format(currency);

  return formatedAmount;
}
