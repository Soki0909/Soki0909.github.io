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
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZpbGw9IiM5Y2ExYTYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9hZGluZy4uLjwvdGV4dD48L3N2Zz4=',
  showRetryButton = false,
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
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
  };

  const handleRetry = () => {
    setHasError(false);
    setIsLoaded(false);
    setRetryCount((prev) => prev + 1);
    // 強制的に画像を再読み込み
    if (imgRef.current) {
      imgRef.current.src = `${src}?retry=${retryCount + 1}`;
    }
  };

  // エラー時のフォールバック画像を生成
  const createErrorPlaceholder = () => {
    const svg = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#fee2e2"/>
        <text x="50%" y="45%" fill="#dc2626" font-family="sans-serif" font-size="14" text-anchor="middle" dy=".3em">📷</text>
        <text x="50%" y="60%" fill="#7f1d1d" font-family="sans-serif" font-size="12" text-anchor="middle" dy=".3em">画像が見つかりません</text>
      </svg>
    `;
    return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={hasError ? createErrorPlaceholder() : isInView ? src : placeholder}
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
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-50 text-red-600">
          <div className="text-2xl mb-2">📷</div>
          <div className="text-sm font-medium">画像が見つかりません</div>
          <div className="text-xs text-red-500 mt-1 text-center px-2">
            {alt}
          </div>
          {showRetryButton && (
            <button
              onClick={handleRetry}
              className="mt-3 px-3 py-1 text-xs bg-red-100 hover:bg-red-200 text-red-700 rounded transition-colors"
            >
              再試行
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default LazyImage;
