import type { Project } from '../types/dataModels';
import { getProjectsData } from './dataLoader';

/**
 * 全てのプロジェクトデータを取得
 */
export const getAllProjects = (): Project[] => {
  return getProjectsData();
};

/**
 * IDでプロジェクトを取得
 */
export const getProjectById = (id: number): Project | undefined => {
  return getProjectsData().find((project: Project) => project.id === id);
};

/**
 * 技術スタックでプロジェクトをフィルタリング
 */
export const getProjectsByTechnology = (technology: string): Project[] => {
  return getProjectsData().filter((project: Project) =>
    project.technologies.includes(technology)
  );
};

/**
 * 利用可能な全ての技術スタックを取得
 */
export const getAllTechnologies = (): string[] => {
  const technologies = new Set<string>();
  getProjectsData().forEach((project: Project) => {
    project.technologies.forEach((tech: string) => technologies.add(tech));
  });
  return Array.from(technologies).sort();
};
