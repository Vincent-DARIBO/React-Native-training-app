import { renderHook, act } from '@testing-library/react-hooks';
import useButtonNumber from '../useButtonNumber';

it('Should use buttonNumber', () => {
  const { result } = renderHook(() => useButtonNumber());

  // Should return one, the initial state is set at 1
  expect(result.current.buttonNumber).toBe(1);

  // Should be a functio,
  expect(typeof result.current.setButtonNumber).toBe('function');

  // Should set the state of the setButtonNumber to 3
  act(() => {
    result.current.setButtonNumber(3);
  });
  expect(result.current.buttonNumber).toBe(3);
});
