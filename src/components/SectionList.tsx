import React from 'react';
import {
  View,
  SectionList,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Switch,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'react-native-paper';

import {
  SECTION_HEADER,
  SECTION_ITEM,
  SECTION_ITEM_RIGHT,
  SECTION_LIST,
  SWITCH,
} from '../tests/testIDs';
import Colors from '../constants/Colors';
import { useThemeMode } from '../providers/hooks/useThemeMode';
import useDisplayName from '../hooks/useDisplayName';
import ThemeModeToggleButtons from './Theme/ThemeModeToggleButtons';

export default function SettingsSectionList() {
  const { colors } = useTheme();
  const { shouldDisplayNames, setShouldDisplayNames } = useDisplayName();
  const { themeMode, setThemeMode } = useThemeMode();
  const { t } = useTranslation();
  function toggleShouldDisplayNames() {
    setShouldDisplayNames((shouldDisplayNames) => !shouldDisplayNames);
  }

  const userAccount = {
    title: t('more.settings.userAccount'),
    description: '',
    data: [
      {
        title: t('more.settings.name'),

        description: 'Charles Davidson',
      },
      { title: t('more.settings.username'), description: 'testuser1' },
      {
        title: t('more.settings.theme'),
        description: themeMode,
        right: (
          <View style={styles.fill}>
            <ThemeModeToggleButtons
              setThemeMode={setThemeMode}
              themeMode={themeMode}
            />
          </View>
        ),
      },
    ],
  };

  const list = {
    title: t('more.settings.list'),

    description: '',
    data: [
      {
        title: t('more.settings.displayNames'),

        description: shouldDisplayNames ? t('on') : t('off'),
        right: (
          <Switch
            testID={SWITCH}
            thumbColor="white"
            trackColor={{
              false: '#e0e0e6',
              true: Colors.primary,
            }}
            onValueChange={toggleShouldDisplayNames}
            value={shouldDisplayNames}
          />
        ),
        onPress: toggleShouldDisplayNames,
      },
    ],
  };
  const productDetails = {
    title: t('more.settings.productDetails'),

    description: '',
    data: [
      {
        title: t('more.settings.appVersion'),

        description: '2.2.3',
        right: <View testID={SECTION_ITEM_RIGHT}></View>,
      },
      {
        title: 'Workflowgen version',
        description: '8.0.5',
        right: <View testID={SECTION_ITEM_RIGHT}></View>,
      },
    ],
  };
  const data = [userAccount, list, productDetails];

  type Props = {
    section: {
      title: string;
    };
  };

  const renderSectionHeader = ({ section: { title } }: Props) => {
    return (
      <View
        style={[
          styles.row,
          {
            backgroundColor: colors.titleBackground,
            borderColor: colors.borderColor,
          },
        ]}
        testID={SECTION_HEADER}
      >
        <Text style={[{ color: colors.title }, styles.sectionTitle]}>
          {title}
        </Text>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          console.log('touchable');
        }}
        testID={SECTION_ITEM}
      >
        <View>
          <View style={[styles.row, styles.item]}>
            <View>
              <Text style={{ color: colors.title }}>{item.title}</Text>
              <Text style={{ ...styles.text, color: colors.text }}>
                {item.description}
              </Text>
            </View>
            {item.right ? item.right : null}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <View style={styles.sectionList}>
      <SectionList
        contentContainerStyle={{
          backgroundColor: colors.background,
        }}
        style={{
          backgroundColor: colors.background,
        }}
        sections={data}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        testID={SECTION_LIST}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    textTransform: 'uppercase',
  },
  sectionList: {
    flex: 1,
  },
  row: {
    paddingVertical: 12,
    paddingHorizontal: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    paddingVertical: 8,
  },
  fill: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});
