import { useNetInfo } from '@react-native-community/netinfo';

export default function useNetworkStatus(): boolean {
  const netInfo = useNetInfo();
  return netInfo.isConnected && netInfo.isInternetReachable;
}
