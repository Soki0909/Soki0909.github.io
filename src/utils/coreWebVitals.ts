/**
 * Core Web Vitals パフォーマンス監視・最適化ユーティリティ
 *
 * Google PageSpeed InsightsとCore Web Vitalsの指標を改善するため、
 * リアルタイムパフォーマンス測定と最適化機能を提供します。
 *
 * @see https://web.dev/vitals/
 * @see https://developers.google.com/web/fundamentals/performance
 */

// Core Web Vitals の閾値設定
export const CORE_WEB_VITALS_THRESHOLDS = {
  // Largest Contentful Paint (LCP) - 最大コンテンツ描画時間
  LCP: {
    GOOD: 2.5 * 1000, // 2.5秒以下 = 良好
    NEEDS_IMPROVEMENT: 4.0 * 1000, // 4.0秒以下 = 改善が必要
  },

  // First Input Delay (FID) - 初回入力遅延
  FID: {
    GOOD: 100, // 100ms以下 = 良好
    NEEDS_IMPROVEMENT: 300, // 300ms以下 = 改善が必要
  },

  // Cumulative Layout Shift (CLS) - 累積レイアウトシフト
  CLS: {
    GOOD: 0.1, // 0.1以下 = 良好
    NEEDS_IMPROVEMENT: 0.25, // 0.25以下 = 改善が必要
  },

  // First Contentful Paint (FCP) - 初回コンテンツ描画時間
  FCP: {
    GOOD: 1.8 * 1000, // 1.8秒以下 = 良好
    NEEDS_IMPROVEMENT: 3.0 * 1000, // 3.0秒以下 = 改善が必要
  },

  // Time to Interactive (TTI) - インタラクション可能時間
  TTI: {
    GOOD: 3.8 * 1000, // 3.8秒以下 = 良好
    NEEDS_IMPROVEMENT: 7.3 * 1000, // 7.3秒以下 = 改善が必要
  },
} as const;

// パフォーマンス指標の型定義
export interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  tti?: number;
  timestamp: number;
  url: string;
  userAgent: string;
}

// パフォーマンス評価結果の型定義
export interface PerformanceRating {
  metric: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  threshold: {
    good: number;
    needsImprovement: number;
  };
}

/**
 * パフォーマンス指標の評価を行う
 *
 * @param metric - 指標名
 * @param value - 測定値
 * @returns 評価結果
 */
export const ratePerformanceMetric = (
  metric: keyof typeof CORE_WEB_VITALS_THRESHOLDS,
  value: number
): PerformanceRating => {
  const thresholds = CORE_WEB_VITALS_THRESHOLDS[metric];

  let rating: 'good' | 'needs-improvement' | 'poor';
  if (value <= thresholds.GOOD) {
    rating = 'good';
  } else if (value <= thresholds.NEEDS_IMPROVEMENT) {
    rating = 'needs-improvement';
  } else {
    rating = 'poor';
  }

  return {
    metric,
    value,
    rating,
    threshold: {
      good: thresholds.GOOD,
      needsImprovement: thresholds.NEEDS_IMPROVEMENT,
    },
  };
};

/**
 * Core Web Vitals を測定する
 *
 * @param callback - 測定結果を受け取るコールバック関数
 */
export const measureCoreWebVitals = (
  callback: (metrics: PerformanceMetrics) => void
) => {
  const metrics: Partial<PerformanceMetrics> = {
    timestamp: Date.now(),
    url: window.location.href,
    userAgent: navigator.userAgent,
  };

  // Web Vitals ライブラリが利用可能な場合
  if (typeof window !== 'undefined' && 'web-vitals' in window) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { getCLS, getFID, getFCP, getLCP, getTTI } = (window as any)[
      'web-vitals'
    ];

    // Largest Contentful Paint (LCP)
    getLCP((metric: { value: number }) => {
      metrics.lcp = metric.value;
      callback({ ...metrics } as PerformanceMetrics);
    });

    // First Input Delay (FID)
    getFID((metric: { value: number }) => {
      metrics.fid = metric.value;
      callback({ ...metrics } as PerformanceMetrics);
    });

    // Cumulative Layout Shift (CLS)
    getCLS((metric: { value: number }) => {
      metrics.cls = metric.value;
      callback({ ...metrics } as PerformanceMetrics);
    });

    // First Contentful Paint (FCP)
    getFCP((metric: { value: number }) => {
      metrics.fcp = metric.value;
      callback({ ...metrics } as PerformanceMetrics);
    });

    // Time to Interactive (TTI)
    getTTI((metric: { value: number }) => {
      metrics.tti = metric.value;
      callback({ ...metrics } as PerformanceMetrics);
    });
  } else {
    // Fallback: Performance API を使用
    measureWithPerformanceAPI(callback);
  }
};

/**
 * Performance API を使用したフォールバック測定
 *
 * @param callback - 測定結果を受け取るコールバック関数
 */
const measureWithPerformanceAPI = (
  callback: (metrics: PerformanceMetrics) => void
) => {
  if (!('performance' in window) || !performance.getEntriesByType) {
    console.warn('Performance API is not supported');
    return;
  }

  const metrics: PerformanceMetrics = {
    timestamp: Date.now(),
    url: window.location.href,
    userAgent: navigator.userAgent,
  };

  // Navigation Timing API を使用
  const navigationEntries = performance.getEntriesByType(
    'navigation'
  ) as PerformanceNavigationTiming[];
  if (navigationEntries.length > 0) {
    const navigation = navigationEntries[0];

    // 近似的なFCP計算
    metrics.fcp = navigation.responseStart - navigation.fetchStart;

    // 近似的なTTI計算
    metrics.tti = navigation.loadEventEnd - navigation.fetchStart;
  }

  // Paint Timing API を使用
  const paintEntries = performance.getEntriesByType('paint');
  paintEntries.forEach((entry) => {
    if (entry.name === 'first-contentful-paint') {
      metrics.fcp = entry.startTime;
    }
  });

  callback(metrics);
};

/**
 * パフォーマンス最適化のためのリソースヒント挿入
 */
export const addPerformanceHints = () => {
  const head = document.head;

  // DNS プリフェッチ
  const dnsPrefetchHosts = [
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ];

  dnsPrefetchHosts.forEach((host) => {
    if (!document.querySelector(`link[rel="dns-prefetch"][href="${host}"]`)) {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = host;
      head.appendChild(link);
    }
  });

  // プリコネクト
  const preconnectHosts = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ];

  preconnectHosts.forEach((host) => {
    if (!document.querySelector(`link[rel="preconnect"][href="${host}"]`)) {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = host;
      link.crossOrigin = 'anonymous';
      head.appendChild(link);
    }
  });
};

/**
 * 画像最適化のためのインターセクション監視
 */
export class ImageOptimizer {
  private observer: IntersectionObserver;
  private processedImages = new Set<HTMLImageElement>();

  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.target instanceof HTMLImageElement
          ) {
            this.optimizeImage(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );
  }

  /**
   * 画像要素を監視対象に追加
   */
  observe(img: HTMLImageElement) {
    if (!this.processedImages.has(img)) {
      this.observer.observe(img);
    }
  }

  /**
   * 画像の最適化処理
   */
  private optimizeImage(img: HTMLImageElement) {
    if (this.processedImages.has(img)) return;

    this.processedImages.add(img);

    // 遅延読み込み属性設定
    if (!img.loading) {
      img.loading = 'lazy';
    }

    // デコード最適化
    if ('decoding' in img) {
      img.decoding = 'async';
    }

    // WebP対応チェック・フォールバック
    this.addWebPSupport(img);

    this.observer.unobserve(img);
  }

  /**
   * WebP画像対応の追加
   */
  private addWebPSupport(img: HTMLImageElement) {
    // WebP対応チェック
    const canvas = document.createElement('canvas');
    const webpSupported =
      canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;

    if (webpSupported && img.src && !img.src.includes('.webp')) {
      // WebP版があるかチェック
      const webpSrc = img.src.replace(/\.(jpg|jpeg|png)$/i, '.webp');

      const webpImg = new Image();
      webpImg.onload = () => {
        img.src = webpSrc;
      };
      webpImg.onerror = () => {
        // WebP版が存在しない場合は元の画像を使用
        console.log(`WebP version not found for: ${img.src}`);
      };
      webpImg.src = webpSrc;
    }
  }

  /**
   * リソースの解放
   */
  disconnect() {
    this.observer.disconnect();
    this.processedImages.clear();
  }
}

/**
 * Critical CSS の動的挿入
 */
export const injectCriticalCSS = () => {
  // Above-the-fold の重要なスタイル
  const criticalCSS = `
    /* Critical CSS for initial viewport */
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
    }
    
    .header {
      position: sticky;
      top: 0;
      z-index: 50;
      background: white;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    
    .loading-spinner {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 3px solid #f3f3f3;
      border-top: 3px solid #3498db;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    /* Reduce layout shift */
    img {
      height: auto;
      max-width: 100%;
    }
    
    .aspect-ratio-16-9 {
      aspect-ratio: 16 / 9;
    }
    
    .aspect-ratio-4-3 {
      aspect-ratio: 4 / 3;
    }
  `;

  // Critical CSS を head に挿入
  if (!document.querySelector('#critical-css')) {
    const style = document.createElement('style');
    style.id = 'critical-css';
    style.textContent = criticalCSS;
    document.head.insertBefore(style, document.head.firstChild);
  }
};

/**
 * フォント読み込み最適化
 */
export const optimizeFontLoading = () => {
  // Font Display Swap の適用
  const fontFaces = [
    {
      family: 'Inter',
      src: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    },
  ];

  fontFaces.forEach(({ family, src }) => {
    if (!document.querySelector(`link[href*="${family}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = src;
      link.media = 'print';
      link.onload = () => {
        if (link.media) {
          link.media = 'all';
        }
      };
      document.head.appendChild(link);
    }
  });
};

/**
 * Service Worker の登録（PWA化）
 */
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered successfully:', registration);

      // 更新チェック
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (
              newWorker.state === 'installed' &&
              navigator.serviceWorker.controller
            ) {
              // 新しいコンテンツが利用可能
              console.log('New content is available; please refresh.');
            }
          });
        }
      });
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }
};

/**
 * リソース監視とレポート
 */
export const monitorResources = () => {
  if (!('performance' in window)) return;

  // リソース読み込み時間の監視
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'resource') {
        const resourceEntry = entry as PerformanceResourceTiming;

        // 遅い読み込みリソースを警告
        if (resourceEntry.duration > 1000) {
          console.warn(
            `Slow resource detected: ${resourceEntry.name} (${resourceEntry.duration}ms)`
          );
        }

        // 大きなリソースを警告
        if (
          resourceEntry.transferSize &&
          resourceEntry.transferSize > 500 * 1024
        ) {
          console.warn(
            `Large resource detected: ${resourceEntry.name} (${Math.round(resourceEntry.transferSize / 1024)}KB)`
          );
        }
      }
    });
  });

  observer.observe({ entryTypes: ['resource'] });

  // 一定時間後に監視を停止
  setTimeout(() => observer.disconnect(), 30000);
};

/**
 * パフォーマンス最適化の初期化
 */
export const initializePerformanceOptimizations = () => {
  // DOM読み込み完了後に実行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      addPerformanceHints();
      injectCriticalCSS();
      optimizeFontLoading();
      monitorResources();
    });
  } else {
    addPerformanceHints();
    injectCriticalCSS();
    optimizeFontLoading();
    monitorResources();
  }

  // Service Worker は非同期で登録
  registerServiceWorker();
};

/**
 * パフォーマンス結果をGoogle Analyticsに送信
 */
export const reportPerformanceToAnalytics = (metrics: PerformanceMetrics) => {
  // Google Analytics 4 にカスタムイベントとして送信
  if (typeof gtag !== 'undefined') {
    const events = [
      { name: 'web_vitals_lcp', value: metrics.lcp },
      { name: 'web_vitals_fid', value: metrics.fid },
      { name: 'web_vitals_cls', value: metrics.cls },
      { name: 'web_vitals_fcp', value: metrics.fcp },
      { name: 'web_vitals_tti', value: metrics.tti },
    ];

    events.forEach(({ name, value }) => {
      if (value !== undefined && gtag) {
        gtag('event', name, {
          value: Math.round(value),
          custom_parameter_1: metrics.url,
          custom_parameter_2: metrics.userAgent,
        });
      }
    });
  }

  // Console にも出力（開発時）
  if (import.meta.env.DEV) {
    console.table(metrics);
  }
};

// グローバル型定義の拡張
declare global {
  interface Window {
    'web-vitals'?: unknown;
  }

  var gtag: ((command: string, ...args: unknown[]) => void) | undefined;
}
