import filterList from '../filterList';
import ListData from '../../constants/List';

it('this list should be filtered and only contain object with a closed status', () =>
  expect(ListData.filter((item) => item.status === 'closed')).toEqual(
    filterList(ListData, 'closed')
  ));
