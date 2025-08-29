import { useState, useRef, useEffect } from 'react';

export interface UseMediaPlayerReturn {
  // State
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  showControls: boolean;
  objectFit: 'contain' | 'cover';
  isFullscreen: boolean;

  // Refs
  mediaRef: React.RefObject<HTMLVideoElement | HTMLAudioElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;

  // Handlers
  handlePlayPause: () => void;
  handleTimeUpdate: () => void;
  handleLoadedMetadata: () => void;
  handleSeek: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleObjectFit: () => void;
  toggleFullscreen: () => void;
  setShowControls: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;

  // Utilities
  formatTime: (time: number) => string;
  progressPercentage: number;
}

export const useMediaPlayer = (): UseMediaPlayerReturn => {
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

  return {
    // State
    isPlaying,
    currentTime,
    duration,
    volume,
    showControls,
    objectFit,
    isFullscreen,

    // Refs
    mediaRef,
    containerRef,

    // Handlers
    handlePlayPause,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleSeek,
    handleVolumeChange,
    toggleObjectFit,
    toggleFullscreen,
    setShowControls,
    setIsPlaying,

    // Utilities
    formatTime,
    progressPercentage,
  };
};
