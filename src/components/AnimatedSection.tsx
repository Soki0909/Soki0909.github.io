import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  /** 子要素 */
  children: React.ReactNode;
  /** カスタムクラス名 */
  className?: string;
  /** アニメーションの遅延（ミリ秒） */
  delay?: number;
  /** アニメーションのしきい値 */
  threshold?: number;
  /** アニメーションタイプ */
  animation?:
    | 'fade-up'
    | 'fade-in'
    | 'fade-left'
    | 'fade-right'
    | 'scale'
    | 'slide-up-clip';
  /** HTML要素のタグ */
  as?: React.ElementType;
}

/**
 * スクロールアニメーション付きセクションコンポーネント
 *
 * 要素がビューポートに入った時に自動的にアニメーションを発火させます。
 * 複数のアニメーションタイプをサポートし、遅延やしきい値も設定可能です。
 *
 * @param children - 子要素
 * @param className - カスタムクラス名
 * @param delay - アニメーションの遅延（ミリ秒）
 * @param threshold - アニメーションのしきい値（0.0 - 1.0）
 * @param animation - アニメーションタイプ
 * @param as - HTML要素のタグ（デフォルト: 'div'）
 *
 * @example
 * ```tsx
 * <AnimatedSection animation="fade-up" delay={200}>
 *   <h2>タイトル</h2>
 *   <p>コンテンツ</p>
 * </AnimatedSection>
 * ```
 */
const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
  animation = 'fade-up',
  as: Component = 'div',
}) => {
  const { ref, isVisible } = useScrollAnimation({
    delay,
    threshold,
    once: true,
  });

  // アニメーションタイプに応じたクラス名の生成
  // yui540原則: transform + opacity のみ使用（GPU合成レイヤーで処理）
  const getAnimationClasses = () => {
    const baseTransition =
      'transition-all duration-[550ms] ease-[cubic-bezier(0,0.15,0.25,0.99)]';

    switch (animation) {
      case 'fade-in':
      case 'fade-up':
        return `${baseTransition} ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`;
      case 'fade-left':
        return `${baseTransition} ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`;
      case 'fade-right':
        return `${baseTransition} ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`;
      case 'scale':
        return `${baseTransition} ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`;
      // yui540スタイル: overflow:hidden の親要素と組み合わせてテキストをクリップ
      case 'slide-up-clip':
        return `${baseTransition} ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
        }`;
      default:
        return `${baseTransition} ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`;
    }
  };

  const combinedClassName = `${getAnimationClasses()} ${className}`.trim();

  return (
    <Component ref={ref} className={combinedClassName}>
      {children}
    </Component>
  );
};

export default AnimatedSection;
