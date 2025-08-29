import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics 4の測定ID（実際の値に置き換えてください）
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: 実際のIDに置き換える

// Google Analytics 4の初期化
export const initGA = () => {
  // Google Analytics スクリプトの動的読み込み
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // gtag関数の初期化
  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', {
      page_title: document.title,
      page_location: window.location.href,
    });
  `;
  document.head.appendChild(script2);
};

// ページビューの追跡
export const trackPageView = (path: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// カスタムイベントの追跡
export const trackEvent = (eventName: string, parameters?: Record<string, string | number | boolean>) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, parameters);
  }
};

// React Hook for Google Analytics
export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // 本番環境でのみGoogle Analyticsを有効化
    if (import.meta.env.PROD) {
      trackPageView(location.pathname + location.search);
    }
  }, [location]);
};

// TypeScript declaration for gtag
declare global {
  interface Window {
    gtag: (command: 'config' | 'event' | 'js', targetId: string | Date, parameters?: Record<string, unknown>) => void;
    dataLayer: unknown[];
  }
}
