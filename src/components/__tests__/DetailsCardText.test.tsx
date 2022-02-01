import React from 'react';

import { render } from '../../tests/testUtil';
import DetailsCardText from '../Details/DetailsCardText';

describe('DetailsCardText component tests', () => {
  it('Should match with the DetailsCardText', () => {
    const { queryByText } = render(
      <DetailsCardText title="first object" user="Charles Davidson" />
    );

    // Should display the title and the user
    expect(queryByText('first object')).not.toBeNull();
    expect(queryByText('Charles Davidson')).not.toBeNull();
  });
});
