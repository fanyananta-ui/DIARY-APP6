
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { DiaryEntry } from '../context/DiaryContext';

export function useDiarySearch(entries: DiaryEntry[]) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 350);

    return () => clearTimeout(timer);
  }, [query]);

  const filteredEntries = useMemo(() => {
    const keyword = debouncedQuery.toLowerCase().trim();

    return entries.filter(
      (entry) =>
        entry.title.toLowerCase().includes(keyword) ||
        entry.content.toLowerCase().includes(keyword),
    );
  }, [entries, debouncedQuery]);

  const resetSearch = useCallback(() => {
    setQuery('');
    setDebouncedQuery('');
  }, []);

  return {
    query,
    setQuery,
    filteredEntries,
    resultCount: filteredEntries.length,
    resetSearch,
  };
}
