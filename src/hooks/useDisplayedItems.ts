import { useState } from 'react';

import filterList from '../utils/filterList';
import { ListItem } from '../types/types';

export default function useDisplayedItems(list: ListItem[], filter?: string) {
  const [displayedItems, setDisplayedItems] = useState(
    filterList(list, filter)
  );
  return { displayedItems, setDisplayedItems };
}
