import React from 'react';

import { DIVIDER } from '../../tests/testIDs';
import { render } from '../../tests/testUtil';
import Divider from '../Divider';

describe('Divider component tests', () => {
  it('Should display the divider', () => {
    const { queryByTestId } = render(<Divider />);

    expect(queryByTestId(DIVIDER)).not.toBeNull();
  });
});
