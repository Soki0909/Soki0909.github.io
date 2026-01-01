import { useMemo, useState } from 'react';
import timelineData from '../data/timeline.json';
import type {
  HubTimelineItem,
  HubCategory,
  TimelineData,
} from '../types/dataModels';

/**
 * タイムラインデータの管理フック
 * - timeline.jsonの読み込み
 * - 日付順ソート
 * - カテゴリフィルタリング
 */
export const useTimeline = () => {
  const [categoryFilter, setCategoryFilter] = useState<HubCategory | 'all'>(
    'all'
  );

  // 型安全なデータ読み込み
  const data = timelineData as TimelineData;

  // 日付順にソート（新しい順）
  const sortedItems = useMemo(() => {
    if (!Array.isArray(data.items)) return [];

    return [...data.items].sort((a, b) => {
      // YYYY-MM形式を比較
      return b.date.localeCompare(a.date);
    });
  }, [data.items]);

  // カテゴリでフィルタリング
  const filteredItems = useMemo(() => {
    if (categoryFilter === 'all') return sortedItems;
    return sortedItems.filter((item) => item.category === categoryFilter);
  }, [sortedItems, categoryFilter]);

  // カテゴリごとの件数
  const categoryCounts = useMemo(() => {
    if (!Array.isArray(data.items)) {
      return { project: 0, activity: 0, writing: 0, all: 0 };
    }

    const counts = data.items.reduce(
      (acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + 1;
        return acc;
      },
      {} as Record<HubCategory, number>
    );

    return {
      project: counts.project || 0,
      activity: counts.activity || 0,
      writing: counts.writing || 0,
      all: data.items.length,
    };
  }, [data.items]);

  return {
    items: filteredItems,
    allItems: sortedItems,
    categoryFilter,
    setCategoryFilter,
    categoryCounts,
  };
};

/**
 * 単一のタイムラインアイテムを取得
 */
export const getTimelineItem = (id: string): HubTimelineItem | undefined => {
  const data = timelineData as TimelineData;
  if (!Array.isArray(data.items)) return undefined;
  return data.items.find((item) => item.id === id);
};

export default useTimeline;
