import writingsData from '../data/writings.json';
import type { WritingItem, WritingsData } from '../types/dataModels';

/**
 * 執筆記事データの管理フック
 */
export const useWritings = () => {
  // 型安全なデータ読み込み
  const data = writingsData as WritingsData;

  // データが空でも安全に処理
  const items = Array.isArray(data.items) ? data.items : [];

  // 最新3件を取得
  const latestItems = items.slice(0, 3);

  // 記事があるかどうか
  const hasWritings = items.length > 0;

  return {
    items,
    latestItems,
    hasWritings,
    totalCount: items.length,
  };
};

/**
 * 単一の執筆記事を取得
 */
export const getWritingItem = (id: string): WritingItem | undefined => {
  const data = writingsData as WritingsData;
  if (!Array.isArray(data.items)) return undefined;
  return data.items.find((item) => item.id === id);
};

export default useWritings;
