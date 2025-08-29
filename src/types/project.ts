/**
 * プロジェクト情報を表すインターフェース
 *
 * @interface Project
 * @description ポートフォリオサイトで表示するプロジェクトの
 * 全情報を含む型定義です。
 */
export interface Project {
  /** プロジェクトの一意識別子（変更不可） */
  readonly id: number;

  /** プロジェクト名（必須） */
  title: string;

  /** プロジェクトの簡潔な説明 */
  description: string;

  /** プロジェクトの詳細説明 */
  longDescription: string;

  /** 使用技術の配列（変更不可） */
  readonly technologies: readonly string[];

  /** 画像URL配列（変更不可） */
  readonly images: readonly string[];

  /** メイン画像URL */
  image: string;

  /** GitHubリポジトリURL */
  github: string;

  /** デモサイトURL */
  demo: string;

  /** 技術的課題の配列 */
  readonly challenges: readonly string[];

  /** 学習内容の配列 */
  readonly learned: readonly string[];

  // Optional media fields - オプションメディアフィールド
  /** 動画URL配列（オプション） */
  videos?: readonly string[];

  /** 音声URL配列（オプション） */
  audios?: readonly string[];

  /** デモタイプ（判別ユニオン型） */
  demoType?: DemoType;
}

/**
 * デモンストレーションタイプの定義
 *
 * @description プロジェクトのデモ方法を示すユニオン型
 */
export type DemoType = 'external' | 'video' | 'audio' | 'interactive';

/**
 * メディアタイプの定義
 *
 * @description サポートされるメディア形式
 */
export type MediaType = 'video' | 'audio' | 'image';

/**
 * プロジェクトステータスの定義
 *
 * @description プロジェクトの公開状態
 */
export type ProjectStatus = 'draft' | 'published' | 'archived';

/**
 * プロジェクトフィルター関数の型定義
 *
 * @param projects - フィルター対象のプロジェクト配列
 * @returns フィルター結果のプロジェクト配列
 */
export type ProjectFilterFunction = (
  projects: readonly Project[]
) => readonly Project[];

/**
 * イベントハンドラーの型定義
 *
 * @template T - 戻り値の型（デフォルト: void）
 */
export type EventHandler<T = void> = (event: React.SyntheticEvent) => T;

/**
 * プロジェクト関連の定数
 */
export const PROJECT_CONSTANTS = {
  /** サポートされる画像形式 */
  SUPPORTED_IMAGE_FORMATS: ['jpg', 'jpeg', 'png', 'webp', 'svg'] as const,

  /** サポートされる動画形式 */
  SUPPORTED_VIDEO_FORMATS: ['mp4', 'webm', 'mov'] as const,

  /** サポートされる音声形式 */
  SUPPORTED_AUDIO_FORMATS: ['mp3', 'wav', 'ogg'] as const,

  /** 最大プロジェクト数 */
  MAX_PROJECTS_PER_PAGE: 12,

  /** 最大技術数 */
  MAX_TECHNOLOGIES_PER_PROJECT: 8,
} as const;
