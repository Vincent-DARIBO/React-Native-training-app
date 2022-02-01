import { ListItem } from '../types/types';

export default function filterList(
  list: ListItem[],
  filter?: string
): ListItem[] {
  return filter ? list.filter((item) => item.status === filter) : list;
}
