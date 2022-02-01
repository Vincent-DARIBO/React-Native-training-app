import React from 'react';

import URLContext from './contexts/URLContext';

type Props = {
  children: React.ReactNode;
  url: string;
};
export default function URLProvider({ children, url }: Props) {
  return <URLContext.Provider value={{ url }}>{children}</URLContext.Provider>;
}
