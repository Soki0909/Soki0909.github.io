import { useState, useEffect } from 'react';
import type { DetailData } from '../types/dataModels';

/**
 * 詳細データを動的に読み込むフック
 */
export const useDetail = (id: string | undefined) => {
  const [detail, setDetail] = useState<DetailData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const loadDetail = async () => {
      try {
        setLoading(true);

        // 動的インポートで詳細データを読み込む
        const module = await import(`../data/details/${id}.json`);
        setDetail(module.default as DetailData);
      } catch (_) {
        console.warn(`Detail data not found for: ${id}`);
        setDetail(null);
      } finally {
        setLoading(false);
      }
    };

    loadDetail();
  }, [id]);

  return { detail, loading };
};

export default useDetail;

