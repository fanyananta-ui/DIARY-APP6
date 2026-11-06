
import { Stack } from 'expo-router';
import { DiaryProvider } from '../src/context/DiaryContext';

export default function RootLayout() {
  return (
    <DiaryProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="detail/[id]" />
      </Stack>
    </DiaryProvider>
  );
}
