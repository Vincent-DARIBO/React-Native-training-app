import React from 'react';

import { render } from '../../tests/testUtil';
import InformationsSection from '../Details/DetailsInformationsSection';

it('Should display the information', () => {
  const { queryByText } = render(
    <InformationsSection
      createdOn="12/09/21"
      overdueOn="13/09/21"
      formHtml="14/09/21"
      formData="15/09/21"
      formArchieve="16/09/21"
      status="closed"
      description="short description"
    />
  );

  // Status
  expect(queryByText('closed')).not.toBeNull();
  // Description
  expect(queryByText('short description')).not.toBeNull();
  // Created On
  expect(queryByText('12/09/21')).not.toBeNull();
  // Overdue On
  expect(queryByText('13/09/21')).not.toBeNull();
  // FormHtml
  expect(queryByText('14/09/21')).not.toBeNull();
  // FormData
  expect(queryByText('15/09/21')).not.toBeNull();
  // Form Archieve
  expect(queryByText('16/09/21')).not.toBeNull();
});
