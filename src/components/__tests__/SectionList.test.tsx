import React from 'react';
import { render, fireEvent } from '../../tests/testUtil';

import SettingsSectionList from '../SectionList';
import {
  SECTION_HEADER,
  SECTION_ITEM,
  SECTION_LIST,
  SWITCH,
} from '../../tests/testIDs';

describe('SectionList component test', () => {
  it('Should render the section list correctly', () => {
    const { queryByTestId, queryAllByTestId, queryByText } = render(
      <SettingsSectionList />
    );

    // Testing that the Section list is dispalyed
    expect(queryByTestId(SECTION_LIST)).not.toBeNull();

    // Testing that the Section headers are dispalyed
    const sectionHeaders = queryAllByTestId(SECTION_HEADER);
    expect(sectionHeaders).not.toBeNull();
    expect(sectionHeaders.length).toBe(3);

    // Testing that the Section item are displayed
    const sectionItems = queryAllByTestId(SECTION_ITEM);

    expect(sectionItems.length).toBe(5);
    // Should display settings info
    expect(queryByText('Product details')).not.toBeNull();
    expect(queryByText('Application version')).not.toBeNull();
  });

  it('Should switch the display names', () => {
    const { getByTestId, queryByTestId, queryByText } = render(
      <SettingsSectionList />
    );

    expect(queryByTestId(SWITCH)).not.toBeNull();

    // Should have shouldDisplayNames to on by default
    expect(queryByText('On')).not.toBeNull();
    expect(queryByText('Off')).toBeNull();

    // Should switch the shouldDisplayNames to off
    fireEvent(getByTestId(SWITCH), 'valueChange', true);
    expect(queryByText('Off')).not.toBeNull();
    expect(queryByText('On')).toBeNull();
  });
});
