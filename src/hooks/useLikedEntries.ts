
import { useMemo } from 'react';
import type { DiaryEntry } from '../context/DiaryContext';

export function useLikedEntries(
  entries: DiaryEntry[],
  likedIds: Set<string>,
) {
  return useMemo(() => {
    return entries.filter((entry) => likedIds.has(entry.id));
  }, [entries, likedIds]);
}
