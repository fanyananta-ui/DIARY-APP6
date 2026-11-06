
import { router, useLocalSearchParams } from 'expo-router';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useDiary } from '../../src/context/DiaryContext';
import { COLORS, SPACE, TYPO } from '../../src/styles/tokens';

export default function DetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const {
    getById,
    likedIds,
    toggleLike,
    deleteEntry,
  } = useDiary();

  const entry = getById(id);

  if (!entry) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Diary tidak ditemukan.</Text>
      </View>
    );
  }

  const isLiked = likedIds.has(entry.id);

  const confirmDelete = () => {
    Alert.alert(
      'Hapus Diary',
      'Apakah kamu yakin ingin menghapus diary ini?',
      [
        { text: 'Batal', style: 'cancel' },
        {
          text: 'Hapus',
          style: 'destructive',
          onPress: () => {
            deleteEntry(entry.id);
            router.back();
          },
        },
      ],
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.mood}>{entry.mood}</Text>

          <Pressable onPress={() => toggleLike(entry.id)}>
            <Text style={styles.like}>
              {isLiked ? '❤️' : '🤍'}
            </Text>
          </Pressable>
        </View>

        <Text style={styles.title}>{entry.title}</Text>
        <Text style={styles.date}>{entry.date}</Text>

        <Text style={styles.content}>{entry.content}</Text>

        <Pressable
          style={styles.deleteButton}
          onPress={confirmDelete}
        >
          <Text style={styles.deleteText}>Hapus Diary</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACE.l,
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACE.l,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACE.l,
  },
  mood: {
    fontSize: 32,
  },
  like: {
    fontSize: 26,
  },
  heading: {
    fontSize: TYPO.h1,
    color: COLORS.text,
  },
  title: {
    fontSize: TYPO.h1,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  date: {
    fontSize: TYPO.caption,
    color: COLORS.muted,
    marginTop: SPACE.s,
  },
  content: {
    fontSize: TYPO.body,
    color: COLORS.text,
    lineHeight: 24,
    marginTop: SPACE.l,
  },
  deleteButton: {
    backgroundColor: COLORS.danger,
    padding: SPACE.m,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: SPACE.xl,
  },
  deleteText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
