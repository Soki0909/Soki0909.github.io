/**
 * プロジェクトコンテキストの型定義ファイル
 *
 * @description プロジェクト関連の状態管理に使用するContextの
 * 型定義とContext作成を行う。React Fast Refresh準拠のため、
 * Providerコンポーネントは別ファイル（ProjectContext.tsx）に分離。
 *
 * @since v1.0.0
 */

import { createContext } from 'react';
import type { Project } from '../types/dataModels';

/**
 * プロジェクトコンテキストの状態インターフェース
 *
 * @interface ProjectContextState
 * @description プロジェクト関連の全ての状態と操作関数を定義
 */
export interface ProjectContextState {
  // Data - データ
  /** 全プロジェクトの配列（読み取り専用） */
  readonly projects: readonly Project[];

  /** 全技術の配列（読み取り専用） */
  readonly technologies: readonly string[];

  // Loading states - 読み込み状態
  /** データ読み込み中フラグ */
  readonly isLoading: boolean;

  // Filter states - フィルター状態
  /** 現在選択されている技術フィルター */
  readonly selectedTechnology: string;

  // Actions - アクション関数
  /** 技術フィルターを設定する関数 */
  readonly setSelectedTechnology: (technology: string) => void;

  /** IDによるプロジェクト取得関数 */
  readonly getProjectById: (id: number) => Project | undefined;

  /** フィルタリング済みプロジェクト取得関数 */
  readonly getFilteredProjects: () => readonly Project[];
}

/**
 * プロジェクトコンテキスト
 *
 * @description プロジェクト関連の状態を管理するReact Context。
 * undefinedの可能性を持つため、使用時は必ずnullチェックが必要。
 *
 * @example
 * ```typescript
 * const context = useContext(ProjectContext);
 * if (!context) {
 *   throw new Error('ProjectProvider is required');
 * }
 * ```
 */
export const ProjectContext = createContext<ProjectContextState | undefined>(
  undefined
);
