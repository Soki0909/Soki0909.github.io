import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
  /** スクロール動作の設定 */
  behavior?: 'smooth' | 'instant';
  /** スクロール位置 */
  top?: number;
  left?: number;
}

/**
 * ページ遷移時に自動的にページ上部にスクロールするコンポーネント
 *
 * React Routerはデフォルトでスクロール位置を保持するため、
 * ページ遷移時に前のページのスクロール位置が残ってしまう問題を解決します。
 *
 * @param behavior - スクロール動作（'smooth' | 'instant'）
 * @param top - スクロール先のY座標（デフォルト: 0）
 * @param left - スクロール先のX座標（デフォルト: 0）
 */
const ScrollToTop: React.FC<ScrollToTopProps> = ({
  behavior = 'instant',
  top = 0,
  left = 0,
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // ページ遷移時にページトップにスクロール
    window.scrollTo({
      top,
      left,
      behavior,
    });
  }, [pathname, behavior, top, left]);

  return null; // このコンポーネントは何もレンダリングしない
};

export default ScrollToTop;
