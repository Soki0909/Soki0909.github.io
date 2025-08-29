/**
 * メディアプレイヤーの状態管理カスタムフック
 *
 * @description 動画・音声ファイルの再生、一時停止、シーク、音量調整などの
 * メディア制御機能を提供します。フルスクリーン対応、オブジェクトフィット切り替え、
 * エラーハンドリングとパフォーマンス最適化が組み込まれています。
 *
 * @returns メディア制御のための状態と関数群
 *
 * @example
 * ```typescript
 * const {
 *   isPlaying,
 *   mediaRef,
 *   handlePlayPause,
 *   formatTime
 * } = useMediaPlayer();
 *
 * // DOM要素への参照
 * <video ref={mediaRef} />
 *
 * // 再生制御
 * <button onClick={handlePlayPause}>
 *   {isPlaying ? '一時停止' : '再生'}
 * </button>
 * ```
 *
 * @since v1.0.0
 */

import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * メディアプレイヤーフックの戻り値型定義
 *
 * @interface UseMediaPlayerReturn
 * @description すべての状態、参照、ハンドラー、ユーティリティ関数を含む
 */
export interface UseMediaPlayerReturn {
  // State - 状態値（readonly for immutability）
  /** 再生中かどうかのフラグ */
  readonly isPlaying: boolean;

  /** 現在の再生時間（秒） */
  readonly currentTime: number;

  /** メディアの総再生時間（秒） */
  readonly duration: number;

  /** 音量レベル（0.0 - 1.0） */
  readonly volume: number;

  /** コントロール表示フラグ */
  readonly showControls: boolean;

  /** オブジェクトフィット設定 */
  readonly objectFit: ObjectFitType;

  /** フルスクリーン状態フラグ */
  readonly isFullscreen: boolean;

  // Refs - DOM参照
  /** メディア要素への参照 */
  readonly mediaRef: React.RefObject<
    HTMLVideoElement | HTMLAudioElement | null
  >;

  /** コンテナ要素への参照 */
  readonly containerRef: React.RefObject<HTMLDivElement | null>;

  // Actions - アクション関数
  /** 再生/一時停止の切り替え */
  readonly handlePlayPause: () => Promise<void>;

  /** 時間更新処理 */
  readonly handleTimeUpdate: () => void;

  /** メタデータ読み込み完了処理 */
  readonly handleLoadedMetadata: () => void;

  /** シーク操作処理 */
  readonly handleSeek: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /** 音量変更処理 */
  readonly handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /** オブジェクトフィット切り替え */
  readonly toggleObjectFit: () => void;

  /** フルスクリーン切り替え */
  readonly toggleFullscreen: () => Promise<void>;

  /** コントロール表示設定 */
  readonly setShowControls: React.Dispatch<React.SetStateAction<boolean>>;

  /** 再生状態設定 */
  readonly setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;

  // Utilities - ユーティリティ関数
  /** 時間フォーマット関数 */
  readonly formatTime: (time: number) => string;

  /** 再生進捗の百分率 */
  readonly progressPercentage: number;
}

/**
 * オブジェクトフィットタイプの定義
 */
type ObjectFitType = 'contain' | 'cover';

/**
 * デフォルト音量レベル
 */
const DEFAULT_VOLUME = 1.0;

/**
 * メディアプレイヤーフック本体
 */
export const useMediaPlayer = (): UseMediaPlayerReturn => {
  // State management - 状態管理
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(DEFAULT_VOLUME);
  const [showControls, setShowControls] = useState<boolean>(true);
  const [objectFit, setObjectFit] = useState<ObjectFitType>('contain');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Refs - DOM参照
  const mediaRef = useRef<HTMLVideoElement | HTMLAudioElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * 再生/一時停止の切り替え処理
   *
   * @description 非同期でメディアの再生状態を切り替える。
   * エラーハンドリングを含む。
   */
  const handlePlayPause = useCallback(async (): Promise<void> => {
    if (!mediaRef.current) return;

    try {
      if (isPlaying) {
        mediaRef.current.pause();
        setIsPlaying(false);
      } else {
        await mediaRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Media playback error:', error);
      setIsPlaying(false);
    }
  }, [isPlaying]);

  /**
   * 時間更新処理
   *
   * @description メディアの再生時間が更新された際の処理
   */
  const handleTimeUpdate = useCallback((): void => {
    if (mediaRef.current) {
      setCurrentTime(mediaRef.current.currentTime);
    }
  }, []);

  /**
   * メタデータ読み込み完了処理
   *
   * @description メディアのメタデータが読み込まれた際の処理
   */
  const handleLoadedMetadata = useCallback((): void => {
    if (mediaRef.current) {
      setDuration(mediaRef.current.duration);
    }
  }, []);

  /**
   * シーク操作処理
   *
   * @param event - 入力変更イベント
   * @description スライダーによるシーク操作の処理
   */
  const handleSeek = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const newTime = parseFloat(event.target.value);
      if (mediaRef.current && !isNaN(newTime)) {
        mediaRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    },
    []
  );

  /**
   * 音量変更処理
   *
   * @param event - 入力変更イベント
   * @description スライダーによる音量調整の処理
   */
  const handleVolumeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const newVolume = parseFloat(event.target.value);
      if (mediaRef.current && !isNaN(newVolume)) {
        const clampedVolume = Math.max(0, Math.min(1, newVolume));
        mediaRef.current.volume = clampedVolume;
        setVolume(clampedVolume);
      }
    },
    []
  );

  /**
   * オブジェクトフィット切り替え処理
   *
   * @description contain と cover の切り替え
   */
  const toggleObjectFit = useCallback((): void => {
    setObjectFit((currentFit) =>
      currentFit === 'contain' ? 'cover' : 'contain'
    );
  }, []);

  /**
   * フルスクリーン切り替え処理
   *
   * @description フルスクリーンモードの入退場処理
   */
  const toggleFullscreen = useCallback(async (): Promise<void> => {
    if (!containerRef.current) return;

    try {
      if (!isFullscreen) {
        if (containerRef.current.requestFullscreen) {
          await containerRef.current.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        }
      }
    } catch (error) {
      console.error('Fullscreen toggle error:', error);
    }
  }, [isFullscreen]);

  /**
   * フルスクリーン状態変更の監視
   *
   * @description フルスクリーン状態の変更を監視して状態を更新
   */
  const handleFullscreenChange = useCallback((): void => {
    setIsFullscreen(!!document.fullscreenElement);
  }, []);

  /**
   * 時間フォーマット関数
   *
   * @param time - 秒数
   * @returns MM:SS形式の文字列
   * @description 秒数をMM:SS形式の文字列に変換
   */
  const formatTime = useCallback((time: number): string => {
    if (!isFinite(time) || time < 0) return '0:00';

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }, []);

  // フルスクリーンイベントリスナーの設定
  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [handleFullscreenChange]);

  // 進捗計算
  const progressPercentage =
    duration && duration > 0 ? (currentTime / duration) * 100 : 0;

  // 戻り値（as constで型を固定）
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

    // Actions
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
  } as const;
};
