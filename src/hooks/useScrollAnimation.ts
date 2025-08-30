import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  /** アニメーションのしきい値（0.0 - 1.0） */
  threshold?: number;
  /** ルートマージン */
  rootMargin?: string;
  /** アニメーションの遅延（ミリ秒） */
  delay?: number;
  /** アニメーションを一度だけ実行するか */
  once?: boolean;
}

interface UseScrollAnimationReturn {
  /** 要素への参照 */
  ref: React.RefObject<HTMLElement | null>;
  /** 要素が表示されているかどうか */
  isVisible: boolean;
  /** アニメーション用のクラス名 */
  animationClass: string;
}

/**
 * スクロールアニメーションを管理するカスタムフック
 *
 * Intersection Observer APIを使用して要素がビューポートに入った時に
 * アニメーションを発火させます。
 *
 * @param options - アニメーションオプション
 * @returns スクロールアニメーションの制御オブジェクト
 *
 * @example
 * ```typescript
 * const { ref, isVisible, animationClass } = useScrollAnimation({
 *   threshold: 0.1,
 *   delay: 200,
 *   once: true
 * });
 *
 * return (
 *   <div
 *     ref={ref}
 *     className={`transition-all duration-700 ${animationClass}`}
 *   >
 *     コンテンツ
 *   </div>
 * );
 * ```
 */
export const useScrollAnimation = (
  options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    delay = 0,
    once = true,
  } = options;

  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true);
              if (once) {
                setHasAnimated(true);
              }
            }, delay);
          } else {
            setIsVisible(true);
            if (once) {
              setHasAnimated(true);
            }
          }
        } else if (!once && !hasAnimated) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, delay, once, hasAnimated]);

  // アニメーションクラスの生成
  const animationClass = isVisible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-8';

  return {
    ref,
    isVisible,
    animationClass,
  };
};

export default useScrollAnimation;
