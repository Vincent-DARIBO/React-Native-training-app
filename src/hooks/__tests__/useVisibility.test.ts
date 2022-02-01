import { renderHook, act } from '@testing-library/react-hooks';
import useVisibility from '../useVisibility';

describe('Testing visibility states', () => {
  const { result } = renderHook(() => useVisibility());

  it('Expect the visibility to not be null', () => {
    //Should not be visible beacuse the initial state of useVisibility is null
    expect(result.current.visibility).not.toBe(null);
  });
  it('Expect the visibility to be true', () => {
    // Should set the state to true and should be visible
    act(() => {
      result.current.setVisibility(true);
    });
    expect(result.current.visibility).toBe(true);
  });
});
