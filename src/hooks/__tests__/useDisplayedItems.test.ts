import { renderHook, act } from '@testing-library/react-hooks';
import useDisplayedItems from '../useDisplayedItems';
import ListData from '../../constants/List';
import filterList from '../../utils/filterList';

it('Should output and object containing only opened items', () => {
  const { result } = renderHook(() => useDisplayedItems(ListData));

  //Should be equal to the ListData
  expect(result.current.displayedItems).toEqual(ListData);

  //Should be a function
  expect(typeof result.current.setDisplayedItems).toBe('function');

  //Should render every opened items
  act(() => {
    result.current.setDisplayedItems(filterList(ListData, 'opened'));
  });
  expect(result.current.displayedItems).toEqual(filterList(ListData, 'opened'));

  //Should render every closed items
  act(() => {
    result.current.setDisplayedItems(filterList(ListData, 'closed'));
  });
  expect(result.current.displayedItems).toEqual(filterList(ListData, 'closed'));
});
