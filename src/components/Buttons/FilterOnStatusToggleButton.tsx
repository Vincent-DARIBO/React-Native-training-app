import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import {
  FILTERONSTATUS,
  FILTERONSTATUS_CLOSED,
  FILTERONSTATUS_OPEN,
} from '../../tests/testIDs';
import Colors from '../../constants/Colors';
import { ButtonProps } from '../ts/index';

export default function FilterOnStatusToggleButton({
  titles,
  onPressLeft,
  onPressCenter,
  onPressRight,
  buttonNumber,
}: ButtonProps) {
  const { colors } = useTheme();

  const leftBgColor = buttonNumber === 1 ? Colors.primary : colors.background;
  const centerBgColor = buttonNumber === 2 ? Colors.primary : colors.background;

  const rightBgColor = buttonNumber === 3 ? Colors.primary : colors.background;
  const chooseTextColor = (color: string) => {
    return color === colors.background ? Colors.primary : colors.background;
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={() => {
          onPressLeft();
        }}
        style={{
          ...styles.touchable,
          ...styles.button,
          ...styles.left,
          backgroundColor: leftBgColor,
        }}
        testID={FILTERONSTATUS}
      >
        <Text style={{ color: chooseTextColor(leftBgColor) }}>{titles[0]}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          onPressCenter();
        }}
        style={{
          ...styles.touchable,
          ...styles.button,
          backgroundColor: centerBgColor,
        }}
        testID={FILTERONSTATUS_OPEN}
      >
        <Text style={{ color: chooseTextColor(centerBgColor) }}>
          {titles[1]}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          onPressRight();
        }}
        style={{
          ...styles.touchable,
          ...styles.button,
          ...styles.right,
          backgroundColor: rightBgColor,
        }}
        testID={FILTERONSTATUS_CLOSED}
      >
        <Text style={{ color: chooseTextColor(rightBgColor) }}>
          {titles[2]}
        </Text>
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
    borderColor: Colors.primary,
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
