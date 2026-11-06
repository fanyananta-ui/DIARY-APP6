
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { DiaryEntry } from '../context/DiaryContext';
import { COLORS, RADIUS, SPACE, TYPO } from '../styles/tokens';

type Props = {
  entry: DiaryEntry;
  isLiked: boolean;
  compactMode: boolean;
  onPress: () => void;
  onLike: () => void;
};

export default function DiaryCard({
  entry,
  isLiked,
  compactMode,
  onPress,
  onLike,
}: Props) {
  return (
    <Pressable
      style={[styles.card, compactMode && styles.compactCard]}
      onPress={onPress}
    >
      <View style={styles.header}>
        <Text style={styles.mood}>{entry.mood}</Text>

        <Pressable onPress={onLike} hitSlop={10}>
          <Text style={styles.like}>{isLiked ? '❤️' : '🤍'}</Text>
        </Pressable>
      </View>

      <Text style={styles.title}>{entry.title}</Text>
      <Text style={styles.date}>{entry.date}</Text>

      <Text
        style={styles.content}
        numberOfLines={compactMode ? 1 : 2}
      >
        {entry.content}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.card,
    padding: SPACE.l,
    marginBottom: SPACE.m,
  },
  compactCard: {
    padding: SPACE.s,
    marginBottom: SPACE.s,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACE.s,
  },
  mood: {
    fontSize: 24,
  },
  like: {
    fontSize: 22,
  },
  title: {
    fontSize: TYPO.title,
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
    marginTop: SPACE.s,
    lineHeight: 20,
  },
});
