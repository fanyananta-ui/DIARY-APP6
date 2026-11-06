
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { useDiary } from '../../src/context/DiaryContext';
import { COLORS, SPACE, TYPO } from '../../src/styles/tokens';

const moods = ['😊', '😢', '😎', '😌', '😡'];

export default function CreateScreen() {
  const { addEntry } = useDiary();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mood, setMood] = useState('😊');

  const saveDiary = () => {
    if (!title.trim() || !content.trim()) {
      Alert.alert('Perhatian', 'Judul dan cerita harus diisi.');
      return;
    }

    addEntry({
      id: Date.now().toString(),
      title: title.trim(),
      content: content.trim(),
      date: new Date().toISOString().slice(0, 10),
      mood,
    });

    setTitle('');
    setContent('');
    setMood('😊');

    Alert.alert('Berhasil', 'Diary berhasil disimpan.', [
      {
        text: 'OK',
        onPress: () => router.replace('/'),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Buat Diary Baru</Text>

      <Text style={styles.label}>Judul Diary</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan judul diary"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Bagaimana perasaanmu?</Text>
      <View style={styles.moods}>
        {moods.map((item) => (
          <Pressable
            key={item}
            onPress={() => setMood(item)}
            style={[
              styles.moodButton,
              mood === item && styles.selectedMood,
            ]}
          >
            <Text style={styles.moodText}>{item}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.label}>Cerita Hari Ini</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Tuliskan ceritamu..."
        multiline
        value={content}
        onChangeText={setContent}
      />

      <Pressable style={styles.saveButton} onPress={saveDiary}>
        <Text style={styles.saveText}>Simpan Diary</Text>
      </Pressable>
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
    marginBottom: SPACE.xl,
  },
  label: {
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACE.s,
  },
  input: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    padding: SPACE.m,
    marginBottom: SPACE.l,
    color: COLORS.text,
  },
  textArea: {
    height: 150,
    textAlignVertical: 'top',
  },
  moods: {
    flexDirection: 'row',
    gap: SPACE.s,
    marginBottom: SPACE.l,
  },
  moodButton: {
    padding: SPACE.s,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    backgroundColor: COLORS.surface,
  },
  selectedMood: {
    borderColor: COLORS.accent,
    backgroundColor: '#EEE7FF',
  },
  moodText: {
    fontSize: 24,
  },
  saveButton: {
    backgroundColor: COLORS.accent,
    padding: SPACE.m,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
