import React from 'react';

import { render } from '../../tests/testUtil';
import DetailsCard from '../Details/DetailsCard';

it('should renders the Details Card correctly', () => {
  const { queryByText } = render(
    <DetailsCard
      title="first object"
      user="Charles Davidson"
      status="opened"
      createdOn="12/09/21"
      overdueOn="13/09/21"
      formHtml="14/09/21"
      formData="15/09/21"
      formArchieve="16/09/21"
    />
  );
  // Should display each elements of the DetailsCard
  // Description
  expect(queryByText('first object')).not.toBeNull();
  // User
  expect(queryByText('Charles Davidson')).not.toBeNull();
  // Status
  expect(queryByText('opened')).not.toBeNull();
  // Created On
  expect(queryByText('13/09/21')).not.toBeNull();
  // Overdue On
  expect(queryByText('14/09/21')).not.toBeNull();
  // FormHtml
  expect(queryByText('15/09/21')).not.toBeNull();
  // FormData
  expect(queryByText('16/09/21')).not.toBeNull();
});
