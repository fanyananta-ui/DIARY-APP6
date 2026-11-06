
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

export type DiaryEntry = {
  id: string;
  title: string;
  content: string;
  date: string;
  mood: string;
};

type DiaryContextType = {
  entries: DiaryEntry[];
  likedIds: Set<string>;
  compactMode: boolean;
  setCompactMode: (value: boolean) => void;
  addEntry: (entry: DiaryEntry) => void;
  toggleLike: (id: string) => void;
  getById: (id: string) => DiaryEntry | undefined;
  deleteEntry: (id: string) => void;
};

const INITIAL_ENTRIES: DiaryEntry[] = [
  {
    id: '1',
    title: 'Hari yang Menyenangkan',
    content: 'Hari ini aku merasa senang.',
    date: '2026-10-31',
    mood: '😊',
  },
  {
    id: '2',
    title: 'Belajar Hal Baru',
    content: 'Hari ini aku belajar membuat aplikasi Diary.',
    date: '2026-10-30',
    mood: '😎',
  },
  {
    id: '3',
    title: 'Waktu untuk Istirahat',
    content: 'Hari ini aku menyempatkan diri untuk beristirahat.',
    date: '2026-10-29',
    mood: '😌',
  },
];

const DiaryContext = createContext<DiaryContextType | undefined>(undefined);

export function DiaryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [entries, setEntries] = useState<DiaryEntry[]>(INITIAL_ENTRIES);
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());
  const [compactMode, setCompactMode] = useState(false);

  const addEntry = (entry: DiaryEntry) => {
    setEntries((prev) => [entry, ...prev]);
  };

  const toggleLike = (id: string) => {
    setLikedIds((prev) => {
      const next = new Set(prev);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };

  const getById = (id: string) =>
    entries.find((entry) => entry.id === id);

  const deleteEntry = (id: string) => {
    setEntries((prev) => prev.filter((entry) => entry.id !== id));

    setLikedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const value = useMemo(
    () => ({
      entries,
      likedIds,
      compactMode,
      setCompactMode,
      addEntry,
      toggleLike,
      getById,
      deleteEntry,
    }),
    [entries, likedIds, compactMode],
  );

  return (
    <DiaryContext.Provider value={value}>
      {children}
    </DiaryContext.Provider>
  );
}

export function useDiary() {
  const context = useContext(DiaryContext);

  if (!context) {
    throw new Error('useDiary harus digunakan di dalam DiaryProvider');
  }

  return context;
}
