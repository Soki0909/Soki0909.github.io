/**
 * WaveDivider - 減衰正弦波セクション区切り
 * セクション間の区切り線として使用する装飾コンポーネント
 */
const WaveDivider = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`w-full py-8 ${className}`}>
      <img
        src="/assets/svg/damped-wave.svg"
        alt=""
        className="w-full h-8 opacity-60"
        aria-hidden="true"
      />
    </div>
  );
};

export default WaveDivider;
