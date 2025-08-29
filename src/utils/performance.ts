/**
 * パフォーマンス計測ユーティリティ
 */

// Layout Shift Entry の型定義
interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

// First Input Entry の型定義
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
}

// Core Web Vitals の計測
export const measureCLS = () => {
  return new Promise((resolve) => {
    let clsValue = 0;
    const clsEntries: PerformanceEntry[] = [];

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Layout Shift エントリの型キャスト
        const layoutShiftEntry = entry as LayoutShiftEntry;
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value;
          clsEntries.push(entry);
        }
      }
    });

    observer.observe({ type: 'layout-shift', buffered: true });

    // 5秒後に測定終了
    setTimeout(() => {
      observer.disconnect();
      resolve({ value: clsValue, entries: clsEntries });
    }, 5000);
  });
};

// First Contentful Paint の計測
export const measureFCP = () => {
  return new Promise((resolve) => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          observer.disconnect();
          resolve(entry.startTime);
        }
      }
    });

    observer.observe({ type: 'paint', buffered: true });
  });
};

// Largest Contentful Paint の計測
export const measureLCP = () => {
  return new Promise((resolve) => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      resolve(lastEntry.startTime);
    });

    observer.observe({ type: 'largest-contentful-paint', buffered: true });

    // 10秒後に最後の値を返す
    setTimeout(() => {
      observer.disconnect();
    }, 10000);
  });
};

// First Input Delay の計測
export const measureFID = () => {
  return new Promise((resolve) => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const firstInputEntry = entry as FirstInputEntry;
        observer.disconnect();
        resolve(firstInputEntry.processingStart - entry.startTime);
      }
    });

    observer.observe({ type: 'first-input', buffered: true });
  });
};

// すべてのCore Web Vitalsを計測
export const measureAllWebVitals = async () => {
  try {
    const [cls, fcp, lcp, fid] = await Promise.allSettled([
      measureCLS(),
      measureFCP(),
      measureLCP(),
      measureFID(),
    ]);

    return {
      cls: cls.status === 'fulfilled' ? cls.value : null,
      fcp: fcp.status === 'fulfilled' ? fcp.value : null,
      lcp: lcp.status === 'fulfilled' ? lcp.value : null,
      fid: fid.status === 'fulfilled' ? fid.value : null,
    };
  } catch (error) {
    console.error('Performance measurement error:', error);
    return null;
  }
};

// 開発環境でのパフォーマンス計測を自動実行
if (import.meta.env.DEV) {
  window.addEventListener('load', async () => {
    const vitals = await measureAllWebVitals();
    console.log('Core Web Vitals:', vitals);
  });
}
