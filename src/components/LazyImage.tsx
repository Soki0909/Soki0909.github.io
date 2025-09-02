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
  const [imageExists, setImageExists] = useState<boolean | null>(null);
  const [finalSrc, setFinalSrc] = useState(placeholder);
  const errorImageSrc = '/images/error-placeholder.svg';
  const imgRef = useRef<HTMLImageElement>(null);

  // ページ読み込み時に画像の存在確認を行う
  useEffect(() => {
    const checkImageExists = () => {
      const img = new Image();

      img.onload = () => {
        setImageExists(true);
      };

      img.onerror = () => {
        setImageExists(false);
      };

      img.src = src;
    };

    checkImageExists();
  }, [src]);

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

  // 表示する画像のソースを決定
  useEffect(() => {
    if (!isInView) {
      setFinalSrc(placeholder);
      return;
    }

    if (imageExists === null) {
      // まだ確認中の場合はプレースホルダーを表示
      setFinalSrc(placeholder);
    } else if (imageExists === false) {
      // 画像が存在しない場合はエラープレースホルダーを表示
      setFinalSrc(errorImageSrc);
      setHasError(true);
    } else {
      // 画像が存在する場合は実際の画像を表示
      setFinalSrc(src);
    }
  }, [isInView, imageExists, src, placeholder, errorImageSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    // 一度エラーが発生した場合は、再確認を避けてエラープレースホルダーを固定
    if (finalSrc !== errorImageSrc) {
      setFinalSrc(errorImageSrc);
      setHasError(true);
      setImageExists(false);
    }
    setIsLoaded(true);
  };

  const handleRetry = () => {
    setHasError(false);
    setIsLoaded(false);
    setImageExists(null);

    // 画像の存在を再確認
    const img = new Image();
    img.onload = () => {
      setImageExists(true);
      setFinalSrc(`${src}?retry=${Date.now()}`);
    };
    img.onerror = () => {
      setImageExists(false);
      setFinalSrc(errorImageSrc);
      setHasError(true);
    };
    img.src = `${src}?retry=${Date.now()}`;
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={finalSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-50'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
      {!isLoaded && isInView && imageExists !== false && (
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
