import { capitalizeFirstLetter } from '../capitalizeFirstLetter';

it('capitalize test should give Test', () =>
  expect('Text').toMatch(capitalizeFirstLetter('text')));
