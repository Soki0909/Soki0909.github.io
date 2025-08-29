/**
 * プロジェクトコンテキストプロバイダーコンポーネント
 *
 * @description プロジェクト関連の状態管理を提供するProviderコンポーネント。
 * データの取得、フィルタリング、状態管理を担当。
 * React Fast Refresh準拠のため、Context定義は別ファイルに分離。
 *
 * @since v1.0.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { Project } from '../types/project';
import { getAllProjects, getAllTechnologies } from '../utils/projects';
import {
  ProjectContext,
  type ProjectContextState,
} from './ProjectContextDefinition';

/**
 * プロジェクトプロバイダーのProps型定義
 */
interface ProjectProviderProps {
  /** プロバイダーでラップする子要素 */
  children: ReactNode;
}

/**
 * プロジェクトコンテキストプロバイダー
 *
 * @param props - プロバイダーのProps
 * @returns JSX要素
 *
 * @example
 * ```tsx
 * <ProjectProvider>
 *   <App />
 * </ProjectProvider>
 * ```
 */
export const ProjectProvider: React.FC<ProjectProviderProps> = ({
  children,
}) => {
  // State management - 状態管理
  const [projects, setProjects] = useState<readonly Project[]>([]);
  const [technologies, setTechnologies] = useState<readonly string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedTechnology, setSelectedTechnology] = useState<string>('');

  /**
   * データ初期化処理
   *
   * @description 非同期でプロジェクトデータと技術データを読み込む
   */
  useEffect(() => {
    const loadData = async (): Promise<void> => {
      try {
        setIsLoading(true);

        // 将来的なAPI統合のための非同期読み込みシミュレーション
        const projectsData = getAllProjects();
        const technologiesData = getAllTechnologies();

        setProjects(projectsData);
        setTechnologies(technologiesData);
      } catch (error) {
        console.error('Failed to load project data:', error);
        // エラー状態の設定（将来的にエラー状態管理を追加予定）
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  /**
   * IDによるプロジェクト取得
   *
   * @param projectId - 取得したいプロジェクトのID
   * @returns 指定されたIDのプロジェクト、または undefined
   */
  const getProjectById = useCallback(
    (projectId: number): Project | undefined => {
      return projects.find((project) => project.id === projectId);
    },
    [projects]
  );

  /**
   * フィルタリング済みプロジェクト取得
   *
   * @returns フィルター条件に合致するプロジェクト配列
   * @description 選択された技術でフィルタリングされたプロジェクトを返す
   */
  const getFilteredProjects = useCallback((): readonly Project[] => {
    if (!selectedTechnology) {
      return projects;
    }
    return projects.filter((project) =>
      project.technologies.includes(selectedTechnology)
    );
  }, [projects, selectedTechnology]);

  // Context value - コンテキスト値
  const contextValue: ProjectContextState = {
    projects,
    technologies,
    isLoading,
    selectedTechnology,
    setSelectedTechnology,
    getProjectById,
    getFilteredProjects,
  };

  return (
    <ProjectContext.Provider value={contextValue}>
      {children}
    </ProjectContext.Provider>
  );
};
