import React from 'react';
import URLContext from '../contexts/URLContext';

export default function useURL() {
  const { url } = React.useContext(URLContext);
  return url;
}
