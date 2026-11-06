
import { router } from 'expo-router';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import DiaryCard from '../../src/components/DiaryCard';
import { useDiary } from '../../src/context/DiaryContext';
import { useDiarySearch } from '../../src/hooks/useDiarySearch';
import { COLORS, SPACE, TYPO } from '../../src/styles/tokens';

export default function HomeScreen() {
  const {
    entries,
    likedIds,
    toggleLike,
    compactMode,
  } = useDiary();

  const {
    query,
    setQuery,
    filteredEntries,
    resultCount,
    resetSearch,
  } = useDiarySearch(entries);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Buku Harian</Text>

      <Text style={styles.subtitle}>
        Catat cerita dan pengalaman harianmu.
      </Text>

      <Text style={styles.likeCount}>
        ❤️ {likedIds.size} diary disukai
      </Text>

      <TextInput
        style={styles.search}
        placeholder="Cari diary..."
        placeholderTextColor={COLORS.muted}
        value={query}
        onChangeText={setQuery}
      />

      <View style={styles.resultRow}>
        <Text style={styles.result}>
          {resultCount} diary ditemukan
        </Text>

        <Pressable onPress={resetSearch}>
          <Text style={styles.reset}>Reset</Text>
        </Pressable>
      </View>

      <FlatList
        data={filteredEntries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DiaryCard
            entry={item}
            isLiked={likedIds.has(item.id)}
            compactMode={compactMode}
            onPress={() =>
              router.push({
                pathname: '/detail/[id]',
                params: { id: item.id },
              })
            }
            onLike={() => toggleLike(item.id)}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>
            Diary belum ditemukan.
          </Text>
        }
      />
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
  },
  subtitle: {
    color: COLORS.muted,
    marginTop: SPACE.s,
    marginBottom: SPACE.m,
  },
  likeCount: {
    color: COLORS.accent,
    fontWeight: 'bold',
    marginBottom: SPACE.m,
  },
  search: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    padding: SPACE.m,
    color: COLORS.text,
    marginBottom: SPACE.m,
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACE.m,
  },
  result: {
    color: COLORS.muted,
    fontSize: TYPO.caption,
  },
  reset: {
    color: COLORS.accent,
    fontWeight: 'bold',
  },
  empty: {
    textAlign: 'center',
    color: COLORS.muted,
    marginTop: SPACE.xl,
  },
});
