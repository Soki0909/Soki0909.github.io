/**
 * プロジェクト関連の状態管理を行うカスタムフック群
 *
 * @description ProjectContextを使用してプロジェクトデータへの
 * アクセスを提供する。エラーハンドリングと型安全性を保証。
 *
 * @since v1.0.0
 */

import { useContext } from 'react';
import type { Project } from '../types/project';
import {
  ProjectContext,
  type ProjectContextState,
} from '../contexts/ProjectContextDefinition';

/**
 * プロジェクトコンテキストを使用するためのメインフック
 *
 * @description ProjectContextの状態と関数にアクセスを提供。
 * Providerの外で使用された場合はエラーをthrow。
 *
 * @returns ProjectContextの完全な状態
 * @throws {Error} ProjectProvider外で使用された場合
 *
 * @example
 * ```typescript
 * const { projects, isLoading, setSelectedTechnology } = useProjects();
 * ```
 */
export const useProjects = (): ProjectContextState => {
  const context = useContext(ProjectContext);

  if (context === undefined) {
    throw new Error(
      'useProjects must be used within a ProjectProvider. ' +
        'Wrap your component tree with <ProjectProvider>.'
    );
  }

  return context;
};

/**
 * 指定されたIDのプロジェクトを取得するフック
 *
 * @description 単一のプロジェクト取得に特化したコンビニエンスフック。
 * プロジェクトが見つからない場合はundefinedを返す。
 *
 * @param projectId - 取得したいプロジェクトのID
 * @returns 指定されたIDのプロジェクト、または undefined
 *
 * @example
 * ```typescript
 * const project = useProjectById(1);
 * if (project) {
 *   console.log(project.title);
 * }
 * ```
 */
export const useProjectById = (projectId: number): Project | undefined => {
  const { getProjectById } = useProjects();
  return getProjectById(projectId);
};

/**
 * フィルタリングされたプロジェクト一覧を取得するフック
 *
 * @description 現在選択されている技術でフィルタリングされた
 * プロジェクト配列を返す。フィルターが未設定の場合は全プロジェクトを返す。
 *
 * @returns フィルタリング済みのプロジェクト配列
 *
 * @example
 * ```typescript
 * const filteredProjects = useFilteredProjects();
 * console.log(`${filteredProjects.length}件のプロジェクトが見つかりました`);
 * ```
 */
export const useFilteredProjects = (): readonly Project[] => {
  const { getFilteredProjects } = useProjects();
  return getFilteredProjects();
};

/**
 * プロジェクトの技術一覧を取得するフック
 *
 * @description 全プロジェクトで使用されている技術の一意な配列を返す。
 * フィルタリング用のオプション生成に使用。
 *
 * @returns 技術名の配列
 *
 * @example
 * ```typescript
 * const technologies = useProjectTechnologies();
 * return (
 *   <select>
 *     {technologies.map(tech => (
 *       <option key={tech} value={tech}>{tech}</option>
 *     ))}
 *   </select>
 * );
 * ```
 */
export const useProjectTechnologies = (): readonly string[] => {
  const { technologies } = useProjects();
  return technologies;
};

/**
 * プロジェクトの読み込み状態を取得するフック
 *
 * @description データ読み込み中かどうかの状態を返す。
 * ローディング表示の制御に使用。
 *
 * @returns 読み込み中かどうかのブール値
 *
 * @example
 * ```typescript
 * const isLoading = useProjectsLoading();
 * if (isLoading) {
 *   return <LoadingSpinner />;
 * }
 * ```
 */
export const useProjectsLoading = (): boolean => {
  const { isLoading } = useProjects();
  return isLoading;
};
