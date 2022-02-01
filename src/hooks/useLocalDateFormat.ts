import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

export default function useLocalDateFormat(
  date: string,
  format: string
): string {
  const { t } = useTranslation();
  let dateFormat: string = dayjs(date.split('/').reverse().join('-')).format(
    t(format)
  );
  return dateFormat;
}
