import { renderHook } from '@testing-library/react-hooks';
import useNetworkStatus from '../useNetworkStatus';

it('Should output true, false or null ', () => {
  const { result } = renderHook(() => useNetworkStatus());

  expect(result.current).toBe(null);
});
