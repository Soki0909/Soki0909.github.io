/**
 * SEOパフォーマンス測定・分析ユーティリティ
 *
 * 検索エンジン最適化の効果測定とユーザー行動分析のため、
 * Google Analytics 4と連携してSEO指標を詳細に追跡します。
 *
 * @see https://developers.google.com/analytics/devguides/collection/ga4
 * @see https://support.google.com/analytics/answer/9744165
 */

import {
  measureCoreWebVitals,
  reportPerformanceToAnalytics,
  type PerformanceMetrics,
} from './coreWebVitals';

// SEO関連イベントの型定義
export interface SEOEvent {
  event_name: string;
  page_title: string;
  page_location: string;
  page_referrer?: string;
  search_term?: string;
  content_group1?: string; // ページカテゴリ
  content_group2?: string; // ページタイプ
  custom_parameter_1?: string;
  custom_parameter_2?: string;
  value?: number;
}

// 検索エンジンの判定
export interface SearchEngineInfo {
  name: string;
  organic: boolean;
  referrer: string;
  searchTerm?: string;
}

// ページパフォーマンス指標
export interface PageMetrics {
  pageLoadTime: number;
  domContentLoadedTime: number;
  timeToInteractive: number;
  scrollDepth: number;
  clickDepth: number;
  sessionDuration: number;
}

/**
 * 検索エンジンの判定
 */
export const detectSearchEngine = (
  referrer: string
): SearchEngineInfo | null => {
  const searchEngines = [
    {
      name: 'Google',
      pattern:
        /google\.(com|co\.jp|com\.br|ca|fr|de|it|co\.uk|es|com\.au|co\.in)/i,
      queryParam: 'q',
    },
    {
      name: 'Yahoo',
      pattern: /yahoo\.(com|co\.jp|com\.br|ca|fr|de|it|co\.uk|es|com\.au)/i,
      queryParam: 'p',
    },
    {
      name: 'Bing',
      pattern: /bing\.com/i,
      queryParam: 'q',
    },
    {
      name: 'DuckDuckGo',
      pattern: /duckduckgo\.com/i,
      queryParam: 'q',
    },
    {
      name: 'Baidu',
      pattern: /baidu\.com/i,
      queryParam: 'wd',
    },
    {
      name: 'Yandex',
      pattern: /yandex\.(ru|com)/i,
      queryParam: 'text',
    },
  ];

  for (const engine of searchEngines) {
    if (engine.pattern.test(referrer)) {
      const url = new URL(referrer);
      const searchTerm = url.searchParams.get(engine.queryParam) || undefined;

      return {
        name: engine.name,
        organic: true,
        referrer,
        searchTerm,
      };
    }
  }

  return null;
};

/**
 * ページカテゴリの判定
 */
export const getPageCategory = (pathname: string): string => {
  if (pathname === '/' || pathname === '/index.html') return 'home';
  if (pathname.includes('/about')) return 'about';
  if (pathname.includes('/skills')) return 'skills';
  if (pathname.includes('/experience')) return 'experience';
  if (pathname.includes('/vision')) return 'vision';
  if (pathname.includes('/works')) return 'works';
  if (pathname.includes('/contact')) return 'contact';
  return 'other';
};

/**
 * ページタイプの判定
 */
export const getPageType = (pathname: string): string => {
  if (pathname === '/') return 'landing';
  if (pathname.includes('/works/') && pathname.split('/').length > 2)
    return 'detail';
  return 'list';
};

/**
 * スクロール深度の測定
 */
export class ScrollDepthTracker {
  private milestones = [25, 50, 75, 90, 100];
  private tracked = new Set<number>();
  private maxScroll = 0;

  constructor() {
    this.bindScrollEvent();
  }

  private bindScrollEvent() {
    let ticking = false;

    const updateScrollDepth = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrollPercentage = Math.round(
        ((scrollTop + windowHeight) / documentHeight) * 100
      );
      this.maxScroll = Math.max(this.maxScroll, scrollPercentage);

      // マイルストーンの追跡
      this.milestones.forEach((milestone) => {
        if (scrollPercentage >= milestone && !this.tracked.has(milestone)) {
          this.tracked.add(milestone);
          this.trackScrollMilestone(milestone);
        }
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDepth);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  private trackScrollMilestone(percentage: number) {
    trackSEOEvent({
      event_name: 'scroll_depth',
      page_title: document.title,
      page_location: window.location.href,
      content_group1: getPageCategory(window.location.pathname),
      content_group2: getPageType(window.location.pathname),
      value: percentage,
      custom_parameter_1: `${percentage}%`,
    });
  }

  getMaxScrollDepth(): number {
    return this.maxScroll;
  }
}

/**
 * ページエンゲージメント測定
 */
export class PageEngagementTracker {
  private startTime: number;
  private isVisible = true;
  private clickCount = 0;
  private focusTime = 0;
  private lastFocusTime: number;

  constructor() {
    this.startTime = Date.now();
    this.lastFocusTime = this.startTime;
    this.bindEvents();
  }

  private bindEvents() {
    // ページ表示・非表示の監視
    document.addEventListener('visibilitychange', () => {
      const now = Date.now();

      if (document.hidden) {
        this.isVisible = false;
        this.focusTime += now - this.lastFocusTime;
      } else {
        this.isVisible = true;
        this.lastFocusTime = now;
      }
    });

    // クリック数の追跡
    document.addEventListener('click', () => {
      this.clickCount++;
    });

    // ページ離脱時の測定
    window.addEventListener('beforeunload', () => {
      this.reportEngagement();
    });

    // 定期的なレポート（30秒間隔）
    setInterval(() => {
      if (this.isVisible) {
        this.reportEngagement();
      }
    }, 30000);
  }

  private reportEngagement() {
    const now = Date.now();
    const sessionDuration = now - this.startTime;
    const activeFocusTime = this.isVisible
      ? this.focusTime + (now - this.lastFocusTime)
      : this.focusTime;

    trackSEOEvent({
      event_name: 'page_engagement',
      page_title: document.title,
      page_location: window.location.href,
      content_group1: getPageCategory(window.location.pathname),
      content_group2: getPageType(window.location.pathname),
      value: Math.round(sessionDuration / 1000), // 秒単位
      custom_parameter_1: `clicks:${this.clickCount}`,
      custom_parameter_2: `focus:${Math.round(activeFocusTime / 1000)}s`,
    });
  }

  getEngagementMetrics() {
    const now = Date.now();
    return {
      sessionDuration: now - this.startTime,
      clickCount: this.clickCount,
      focusTime: this.isVisible
        ? this.focusTime + (now - this.lastFocusTime)
        : this.focusTime,
    };
  }
}

/**
 * 検索キーワード追跡
 */
export const trackSearchKeywords = () => {
  const referrer = document.referrer;

  if (referrer) {
    const searchEngine = detectSearchEngine(referrer);

    if (searchEngine && searchEngine.organic) {
      trackSEOEvent({
        event_name: 'organic_search',
        page_title: document.title,
        page_location: window.location.href,
        page_referrer: referrer,
        search_term: searchEngine.searchTerm,
        content_group1: getPageCategory(window.location.pathname),
        content_group2: getPageType(window.location.pathname),
        custom_parameter_1: searchEngine.name,
        custom_parameter_2: searchEngine.searchTerm ? 'with_query' : 'no_query',
      });
    }
  }

  // URL パラメータからの検索キーワード取得
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source');
  const utmMedium = urlParams.get('utm_medium');
  const utmCampaign = urlParams.get('utm_campaign');
  const utmTerm = urlParams.get('utm_term');

  if (utmSource || utmMedium) {
    trackSEOEvent({
      event_name: 'campaign_traffic',
      page_title: document.title,
      page_location: window.location.href,
      content_group1: getPageCategory(window.location.pathname),
      content_group2: getPageType(window.location.pathname),
      custom_parameter_1: `${utmSource || 'unknown'}_${utmMedium || 'unknown'}`,
      custom_parameter_2: utmCampaign || utmTerm || 'no_campaign',
    });
  }
};

/**
 * 構造化データの効果測定
 */
export const trackStructuredDataImpact = () => {
  // ページに含まれる構造化データの種類を検出
  const structuredDataScripts = document.querySelectorAll(
    'script[type="application/ld+json"]'
  );
  const schemaTypes = new Set<string>();

  structuredDataScripts.forEach((script) => {
    try {
      const data = JSON.parse(script.textContent || '');
      if (Array.isArray(data)) {
        data.forEach((item) => {
          if (item['@type']) schemaTypes.add(item['@type']);
        });
      } else if (data['@type']) {
        schemaTypes.add(data['@type']);
      }
    } catch (e) {
      console.warn('Invalid JSON-LD detected:', e);
    }
  });

  if (schemaTypes.size > 0) {
    trackSEOEvent({
      event_name: 'structured_data_present',
      page_title: document.title,
      page_location: window.location.href,
      content_group1: getPageCategory(window.location.pathname),
      content_group2: getPageType(window.location.pathname),
      value: schemaTypes.size,
      custom_parameter_1: Array.from(schemaTypes).join(','),
    });
  }
};

/**
 * SEOイベントの送信
 */
export const trackSEOEvent = (eventData: SEOEvent) => {
  // Google Analytics 4 にイベント送信
  if (typeof gtag !== 'undefined' && gtag) {
    gtag('event', eventData.event_name, {
      page_title: eventData.page_title,
      page_location: eventData.page_location,
      page_referrer: eventData.page_referrer,
      search_term: eventData.search_term,
      content_group1: eventData.content_group1,
      content_group2: eventData.content_group2,
      custom_parameter_1: eventData.custom_parameter_1,
      custom_parameter_2: eventData.custom_parameter_2,
      value: eventData.value,
    });
  }

  // 開発環境での確認用
  if (import.meta.env.DEV) {
    console.log('SEO Event:', eventData);
  }
};

/**
 * Core Web Vitals とSEOの統合追跡
 */
export const trackWebVitalsForSEO = () => {
  measureCoreWebVitals((metrics: PerformanceMetrics) => {
    // Core Web Vitals をSEOコンテキストで追跡
    trackSEOEvent({
      event_name: 'core_web_vitals',
      page_title: document.title,
      page_location: metrics.url,
      content_group1: getPageCategory(window.location.pathname),
      content_group2: getPageType(window.location.pathname),
      value: metrics.lcp ? Math.round(metrics.lcp) : undefined,
      custom_parameter_1: `lcp:${metrics.lcp || 'n/a'},fid:${metrics.fid || 'n/a'},cls:${metrics.cls || 'n/a'}`,
      custom_parameter_2: `fcp:${metrics.fcp || 'n/a'},tti:${metrics.tti || 'n/a'}`,
    });

    // 標準のパフォーマンス追跡も実行
    reportPerformanceToAnalytics(metrics);
  });
};

/**
 * ユーザージャーニー分析
 */
export class UserJourneyTracker {
  private pageHistory: Array<{
    path: string;
    title: string;
    timestamp: number;
    duration?: number;
  }> = [];

  private currentPageStart: number = Date.now();

  trackPageView(path: string, title: string) {
    const now = Date.now();

    // 前のページの滞在時間を記録
    if (this.pageHistory.length > 0) {
      const lastPage = this.pageHistory[this.pageHistory.length - 1];
      lastPage.duration = now - this.currentPageStart;
    }

    // 新しいページを記録
    this.pageHistory.push({
      path,
      title,
      timestamp: now,
    });

    this.currentPageStart = now;

    // ジャーニー分析（5ページ目以降）
    if (this.pageHistory.length >= 5) {
      this.analyzeUserJourney();
    }
  }

  private analyzeUserJourney() {
    const journey = this.pageHistory.slice(-5); // 直近5ページ
    const pathSequence = journey
      .map((page) => getPageCategory(page.path))
      .join(' -> ');
    const totalDuration = journey.reduce(
      (sum, page) => sum + (page.duration || 0),
      0
    );

    trackSEOEvent({
      event_name: 'user_journey',
      page_title: document.title,
      page_location: window.location.href,
      content_group1: getPageCategory(window.location.pathname),
      content_group2: 'journey_analysis',
      value: Math.round(totalDuration / 1000), // 秒単位
      custom_parameter_1: pathSequence,
      custom_parameter_2: `pages:${journey.length}`,
    });
  }

  getJourneyData() {
    return [...this.pageHistory];
  }
}

/**
 * SEO分析の初期化
 */
export const initializeSEOAnalytics = () => {
  // 基本的なSEO追跡
  trackSearchKeywords();
  trackStructuredDataImpact();
  trackWebVitalsForSEO();

  // エンゲージメント追跡の開始
  const scrollTracker = new ScrollDepthTracker();
  const engagementTracker = new PageEngagementTracker();
  const journeyTracker = new UserJourneyTracker();

  // 初回ページビューを記録
  journeyTracker.trackPageView(window.location.pathname, document.title);

  // SPA ページ遷移の監視（React Router用）
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;

  history.pushState = function (...args) {
    originalPushState.apply(history, args);
    setTimeout(() => {
      journeyTracker.trackPageView(window.location.pathname, document.title);
      trackSearchKeywords();
      trackStructuredDataImpact();
    }, 100);
  };

  history.replaceState = function (...args) {
    originalReplaceState.apply(history, args);
    setTimeout(() => {
      journeyTracker.trackPageView(window.location.pathname, document.title);
    }, 100);
  };

  // ブラウザの戻る/進むボタン対応
  window.addEventListener('popstate', () => {
    setTimeout(() => {
      journeyTracker.trackPageView(window.location.pathname, document.title);
      trackSearchKeywords();
      trackStructuredDataImpact();
    }, 100);
  });

  return {
    scrollTracker,
    engagementTracker,
    journeyTracker,
  };
};

// グローバル型定義の拡張
declare global {
  var gtag: ((command: string, ...args: unknown[]) => void) | undefined;
}
