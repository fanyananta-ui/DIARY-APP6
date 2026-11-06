
import { StyleSheet, Switch, Text, View } from 'react-native';

import { useDiary } from '../../src/context/DiaryContext';
import { COLORS, SPACE, TYPO } from '../../src/styles/tokens';

export default function SettingsScreen() {
  const { compactMode, setCompactMode, entries, likedIds } = useDiary();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pengaturan</Text>

      <View style={styles.card}>
        <View style={styles.settingRow}>
          <View style={styles.description}>
            <Text style={styles.title}>Compact Mode</Text>
            <Text style={styles.subtitle}>
              Menampilkan kartu diary dengan ukuran lebih ringkas.
            </Text>
          </View>

          <Switch
            value={compactMode}
            onValueChange={setCompactMode}
            trackColor={{ false: '#CBD5E1', true: COLORS.accent }}
          />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Statistik Diary</Text>
        <Text style={styles.stat}>Total Diary: {entries.length}</Text>
        <Text style={styles.stat}>Diary Disukai: {likedIds.size} ❤️</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACE.l,
  },
  heading: {
    fontSize: TYPO.h1,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACE.l,
  },
  card: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 16,
    padding: SPACE.l,
    marginBottom: SPACE.m,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  description: {
    flex: 1,
    marginRight: SPACE.m,
  },
  title: {
    fontSize: TYPO.title,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  subtitle: {
    color: COLORS.muted,
    marginTop: SPACE.s,
  },
  stat: {
    color: COLORS.text,
    marginTop: SPACE.m,
  },
});
