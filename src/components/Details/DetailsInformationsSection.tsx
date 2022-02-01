import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

import Colors from '../../constants/Colors';

type Props = {
  description: string;
  status: string;
  overdueOn: string;
  createdOn: string;
  formHtml: string;
  formData: string;
  formArchieve: string;
};

export default function InformationsSection({
  description,
  status,
  createdOn,
  overdueOn,
  formHtml,
  formData,
  formArchieve,
}: Props) {
  function chooseTextColor() {
    switch (status) {
      case 'opened':
        return Colors.green;
      case 'closed':
        return Colors.red;
      default:
        return colors.text;
    }
  }
  const { colors } = useTheme();
  return (
    <View>
      <View style={styles.informationsContainer}>
        <Text style={{ color: colors.text }}>Status</Text>
        <Text
          style={{
            ...styles.title,
            color: chooseTextColor(),
          }}
        >
          {status}
        </Text>
        <Text style={{ color: colors.text }}>Process</Text>
        <Text
          style={{
            ...styles.title,
            color: colors.informations,
          }}
          numberOfLines={3}
        >
          {description}
        </Text>
        <Text style={{ color: colors.text }}>Created on</Text>
        <Text
          style={{
            ...styles.title,
            color: colors.informations,
          }}
        >
          {createdOn}
        </Text>
        <Text style={{ color: colors.text }}>Overdue on</Text>
        <Text
          style={{
            ...styles.title,
            color: colors.informations,
          }}
        >
          {overdueOn}
        </Text>
        <Text style={{ color: colors.text }}>FORM_HTML</Text>
        <Text style={{ ...styles.title, color: colors.accent }}>
          {formHtml}
        </Text>
        <Text style={{ color: colors.text }}>FORM_DATA</Text>
        <Text style={{ ...styles.title, color: colors.accent }}>
          {formData}
        </Text>
        <Text style={{ color: colors.text }}>FORM_ARCHIEVE</Text>
        <Text style={{ ...styles.title, color: colors.accent }}>
          {formArchieve}
        </Text>
        <Text style={{ color: colors.text }}>REQUEST_SUBJECT</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  informationsContainer: {
    marginTop: 20,
    marginLeft: 30,
  },
  title: {
    marginBottom: 30,
    fontSize: 18,
    marginTop: 8,
  },
});
