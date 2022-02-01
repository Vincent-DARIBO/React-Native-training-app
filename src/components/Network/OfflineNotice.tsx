import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Banner } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';

import { BANNER } from '../../tests/testIDs';
import useNetworkStatus from '../../hooks/useNetworkStatus';

export default function OfflineNotice() {
  const isOnline = useNetworkStatus();
  const [visible, setVisible] = React.useState(false);
  const { colors } = useTheme();

  const onPressHandler = useCallback(() => {
    setVisible(false);
  }, []);

  //Ce que on va faire, ce qui va etre checker
  React.useEffect(() => {
    if (isOnline === true) {
      console.log('NetworkStatus:', isOnline);
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [isOnline]);

  return (
    <Banner
      testID={BANNER}
      style={{ ...styles.banner, color: colors.accent }}
      visible={visible}
      accessibilityLabel={visible ? 'visible' : 'hidden'}
      actions={[
        {
          label: 'Ok',
          onPress: onPressHandler,
        },
      ]}
    >
      You are in OffLine mode, please check your network.
    </Banner>
  );
}

const styles = StyleSheet.create({
  banner: {
    marginTop: 5,
  },
});
