import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * WaveDivider - 減衰正弦波セクション区切り
 * セクション間の区切り線として使用する装飾コンポーネント
 * スクロール時に横に広がるフェードインアニメーション付き
 */
const WaveDivider = ({ className = '' }: { className?: string }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3, once: true });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`w-full py-8 transition-all duration-700 ease-[cubic-bezier(0,0.15,0.25,0.99)] ${
        isVisible ? 'opacity-60 scale-x-100' : 'opacity-0 scale-x-75'
      } ${className}`}
    >
      <img
        src="/assets/svg/damped-wave.svg"
        alt=""
        className="w-full h-8"
        aria-hidden="true"
      />
    </div>
  );
};

export default WaveDivider;
