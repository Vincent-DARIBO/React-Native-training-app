import { useState } from 'react';

export default function useDisplayName() {
  const [shouldDisplayNames, setShouldDisplayNames] = useState(true);
  return { shouldDisplayNames, setShouldDisplayNames };
}
