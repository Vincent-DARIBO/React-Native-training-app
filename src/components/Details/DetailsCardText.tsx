import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

type Props = {
  title: string;
  user: string;
};

export default function DetailsCardText({ title, user }: Props) {
  const { colors } = useTheme();
  return (
    <View>
      <View style={styles.textTitleContainer}>
        <Text
          style={{
            ...styles.title,
            color: colors.text,
          }}
        >
          {title}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={{ color: colors.text }}>by</Text>
        <View style={styles.textContainer}>
          <Text style={{ color: colors.accent }}>{user}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    textTransform: 'uppercase',
  },
  textTitleContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
