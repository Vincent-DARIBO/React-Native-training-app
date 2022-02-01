import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

import {
  DOUBLE_BUTTONBAR_RIGHT,
  DOUBLE_BUTTONBAR,
  DOUBLE_BUTTONBAR_LEFT,
} from '../../tests/testIDs';
import { ButtonProps } from '../ts/';

type Props = Omit<ButtonProps, 'onPressCenter' | 'titles'> & {
  titleLeft: string;
  titleRight: string;
};

export default function DoubleButtonBar({
  titleLeft,
  titleRight,
  onPressLeft,
  onPressRight,
  buttonNumber,
}: Props) {
  const { colors } = useTheme();

  const leftBgColor = buttonNumber === 1 ? colors.accent : colors.background;
  const rightBgColor = buttonNumber === 2 ? colors.accent : colors.background;

  const getTextColor = (color: string) => {
    return color === colors.background ? colors.accent : colors.background;
  };

  return (
    <View testID={DOUBLE_BUTTONBAR} style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={() => onPressLeft()}
        style={{
          ...styles.touchable,
          ...styles.button,
          ...styles.left,
          borderColor: colors.accent,
          backgroundColor: leftBgColor,
        }}
        testID={DOUBLE_BUTTONBAR_LEFT}
      >
        <Text style={{ color: getTextColor(leftBgColor) }}>{titleLeft}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPressRight()}
        style={{
          ...styles.touchable,
          ...styles.button,
          ...styles.right,
          borderColor: colors.accent,
          backgroundColor: rightBgColor,
        }}
        testID={DOUBLE_BUTTONBAR_RIGHT}
      >
        <Text style={{ color: getTextColor(rightBgColor) }}>{titleRight}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: '50%',
    height: 40,
  },
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  right: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  left: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
});
