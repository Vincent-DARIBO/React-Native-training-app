import React from 'react';

import { FOOTER } from '../../tests/testIDs';
import { render } from '../../tests/testUtil';
import Footer from '../Footer';

describe('Footer component tests', () => {
  it('Should display the footer', () => {
    const { queryByTestId } = render(<Footer />);

    expect(queryByTestId(FOOTER)).not.toBeNull();
  });
});
