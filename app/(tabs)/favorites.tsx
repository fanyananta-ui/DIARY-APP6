
import { router } from 'expo-router';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import DiaryCard from '../../src/components/DiaryCard';
import { useDiary } from '../../src/context/DiaryContext';
import { useLikedEntries } from '../../src/hooks/useLikedEntries';
import { COLORS, SPACE, TYPO } from '../../src/styles/tokens';

export default function FavoritesScreen() {
  const {
    entries,
    likedIds,
    toggleLike,
    compactMode,
  } = useDiary();

  const likedEntries = useLikedEntries(entries, likedIds);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Diary Favorit ❤️</Text>

      <Text style={styles.subtitle}>
        {likedEntries.length} diary disukai
      </Text>

      <FlatList
        data={likedEntries}
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
            Belum ada diary favorit. Tekan ikon 🤍 pada diary
            untuk menambahkannya ke favorit.
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
    marginBottom: SPACE.s,
  },
  subtitle: {
    fontSize: TYPO.body,
    color: COLORS.muted,
    marginBottom: SPACE.l,
  },
  empty: {
    textAlign: 'center',
    color: COLORS.muted,
    marginTop: SPACE.xl,
    lineHeight: 22,
  },
});
