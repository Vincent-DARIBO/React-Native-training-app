import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Snackbar } from 'react-native-paper';

import { MoreScreenNavigatorParamsList } from '../../navigation/types';
import { ON_BEHALF_SCREEN } from '../../tests/testIDs';

type Props = StackScreenProps<MoreScreenNavigatorParamsList, 'OnBehalfScreen'>;

export default function OnBehalfScreen({ navigation }: Props) {
  const [visible, setVisible] = React.useState(true);
  const onDismissSnackBar = () => setVisible(false);
  return (
    <View style={styles.container} testID={ON_BEHALF_SCREEN}>
      <Text>OnBehalfScreen</Text>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Cancel',
          onPress: () => {
            navigation.pop();
          },
        }}
      >
        Network not available. Please check your internet connection
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
