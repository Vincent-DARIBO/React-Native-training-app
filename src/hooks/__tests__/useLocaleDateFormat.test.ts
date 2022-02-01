import '../../shared/i18n/config';
import { renderHook } from '@testing-library/react-hooks';
import useLocalDateFormat from '../useLocalDateFormat';

const item = {
  id: 1,
  title: 'first object',
  user: 'Charles Davidson',
  description: 'description',
  status: 'opened',
  day: '12/09/2021',
  amount: 207600,
};

it('Should output the date fromated depending on the locale', () => {
  const { result } = renderHook(() =>
    useLocalDateFormat(item.day, 'date.format')
  );
  expect(result.current).toMatch('2021-09-12');
});
