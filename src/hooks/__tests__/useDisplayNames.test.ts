import { renderHook, act } from '@testing-library/react-hooks';
import useDisplayName from '../useDisplayName';

it('Should output true and then false', () => {
  const { result } = renderHook(() => useDisplayName());

  //Should be true because the initial state of useDisplayName is true
  expect(result.current.shouldDisplayNames).toBe(true);

  //Should set the state of shouldDisplayNames to false
  act(() => {
    result.current.setShouldDisplayNames(false);
  });
  expect(result.current.shouldDisplayNames).toBe(false);
});
