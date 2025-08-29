import { useState, useRef, useEffect } from 'react';

interface MediaPlayerProps {
  src: string;
  type: 'video' | 'audio';
  title?: string;
  className?: string;
}

const MediaPlayer = ({
  src,
  type,
  title,
  className = '',
}: MediaPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [objectFit, setObjectFit] = useState<'contain' | 'cover'>('contain');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const mediaRef = useRef<HTMLVideoElement | HTMLAudioElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePlayPause = () => {
    if (mediaRef.current) {
      if (isPlaying) {
        mediaRef.current.pause();
      } else {
        mediaRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (mediaRef.current) {
      setCurrentTime(mediaRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (mediaRef.current) {
      setDuration(mediaRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (mediaRef.current) {
      mediaRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (mediaRef.current) {
      mediaRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  const toggleObjectFit = () => {
    setObjectFit(objectFit === 'contain' ? 'cover' : 'contain');
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  // フルスクリーン状態の監視
  const handleFullscreenChange = () => {
    setIsFullscreen(!!document.fullscreenElement);
  };

  // フルスクリーンイベントリスナーの設定
  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div
      ref={containerRef}
      className={`relative bg-black rounded-lg overflow-hidden ${className} ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}
    >
      {title && (
        <div className="absolute top-0 left-0 right-0 bg-black/50 text-white p-3 z-10">
          <h3 className="font-medium">{title}</h3>
        </div>
      )}

      {type === 'video' ? (
        <div className="w-full h-full bg-black flex items-center justify-center">
          <video
            ref={mediaRef as React.RefObject<HTMLVideoElement>}
            src={src}
            className={`max-w-full max-h-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover w-full h-full'}`}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          />
        </div>
      ) : (
        <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <audio
            ref={mediaRef as React.RefObject<HTMLAudioElement>}
            src={src}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          <div className="text-center text-white">
            <div className="text-6xl mb-4">🎵</div>
            <p className="text-lg">{title || 'Audio File'}</p>
          </div>
        </div>
      )}

      {/* カスタムコントロール */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
        onMouseEnter={() => setShowControls(true)}
      >
        {/* プログレスバー */}
        <div className="mb-3">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${progressPercentage}%, #4b5563 ${progressPercentage}%, #4b5563 100%)`,
            }}
          />
          <div className="flex justify-between text-xs mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* コントロールボタン */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={handlePlayPause}
              className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
            >
              {isPlaying ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>

            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.824L4.162 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.162l4.221-3.824a1 1 0 011.617.824z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* 動画の場合のみ表示する追加コントロール */}
            {type === 'video' && (
              <>
                {/* アスペクト比切り替えボタン */}
                <button
                  onClick={toggleObjectFit}
                  className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                  title={objectFit === 'contain' ? 'フィット表示' : '全体表示'}
                >
                  {objectFit === 'contain' ? (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 4h16v16H4V4zm2 2v12h12V6H6z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 4v6h2V6h4V4H4zm10 0v2h4v4h2V4h-6zM4 14v6h6v-2H6v-4H4zm16 0v4h-4v2h6v-6h-2z" />
                    </svg>
                  )}
                </button>

                {/* フルスクリーンボタン */}
                <button
                  onClick={toggleFullscreen}
                  className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                  title={isFullscreen ? 'フルスクリーン終了' : 'フルスクリーン'}
                >
                  {isFullscreen ? (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                    </svg>
                  )}
                </button>
              </>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <div className="text-sm">
              {type === 'video' ? '🎬' : '🎵'} {type.toUpperCase()}
            </div>
            {type === 'video' && (
              <div className="text-xs text-gray-300">
                {objectFit === 'contain' ? 'フィット' : 'クロップ'}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaPlayer;
