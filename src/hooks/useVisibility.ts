import React from 'react';
import useNetworkStatus from './useNetworkStatus';

export default function useVisibility() {
  const [visibility, setVisibility] = React.useState(true);
  const isConnected = useNetworkStatus();

  React.useEffect(() => {
    setVisibility(!isConnected);
    console.log('DEVICE CONNECTED ? --------->', isConnected);
  }, [isConnected]);
  return { visibility, setVisibility };
}
