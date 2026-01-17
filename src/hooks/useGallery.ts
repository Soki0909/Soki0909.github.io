import galleryData from '../data/gallery.json';
import type {
  GalleryData,
  GalleryItem,
  GalleryCategory,
} from '../types/dataModels';

/**
 * ギャラリーデータの管理フック
 */
export const useGallery = (categoryId?: string) => {
  // 型安全なデータ読み込み
  const data = galleryData as GalleryData;

  // データが空でも安全に処理
  const categories = Array.isArray(data.categories) ? data.categories : [];
  const allItems = Array.isArray(data.items) ? data.items : [];

  // カテゴリでフィルタリング
  const items = categoryId
    ? allItems.filter((item) => item.category === categoryId)
    : allItems;

  // 日付順にソート（新しい順）
  const sortedItems = [...items].sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return b.date.localeCompare(a.date);
  });

  // アイテムがあるかどうか
  const hasItems = sortedItems.length > 0;

  return {
    categories,
    items: sortedItems,
    hasItems,
    totalCount: sortedItems.length,
  };
};

/**
 * 特定カテゴリの情報を取得
 */
export const getGalleryCategory = (id: string): GalleryCategory | undefined => {
  const data = galleryData as GalleryData;
  if (!Array.isArray(data.categories)) return undefined;
  return data.categories.find((cat) => cat.id === id);
};

/**
 * 単一のギャラリーアイテムを取得
 */
export const getGalleryItem = (id: string): GalleryItem | undefined => {
  const data = galleryData as GalleryData;
  if (!Array.isArray(data.items)) return undefined;
  return data.items.find((item) => item.id === id);
};

export default useGallery;
