import { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  showRetryButton?: boolean;
}

const LazyImage = ({
  src,
  alt,
  className = '',
  placeholder = '/images/loading-placeholder.svg',
  showRetryButton = false,
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const errorImageSrc = '/images/error-placeholder.svg';
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
    // エラー時は静的なSVGファイルを確実に表示
    if (imgRef.current) {
      imgRef.current.src = errorImageSrc;
    }
  };

  const handleRetry = () => {
    setHasError(false);
    setIsLoaded(false);
    // オリジナル画像の再読み込みを試行
    if (imgRef.current) {
      imgRef.current.src = `${src}?retry=${Date.now()}`;
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={hasError ? errorImageSrc : isInView ? src : placeholder}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-50'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
      {!isLoaded && isInView && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      )}
      {hasError && showRetryButton && (
        <div className="absolute top-2 right-2">
          <button
            onClick={handleRetry}
            className="px-3 py-1 text-xs bg-white/80 hover:bg-white/90 text-gray-700 rounded shadow-sm transition-colors border"
            title="画像を再読み込み"
          >
            🔄 再試行
          </button>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
