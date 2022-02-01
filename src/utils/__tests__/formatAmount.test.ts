import 'numeral/locales/fr';
import formatAmount from '../formatAmount';

it('this test should output $1,000.00', () => {
  expect(formatAmount(1000)).toMatch('$1,000.00');
});
