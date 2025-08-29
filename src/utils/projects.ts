import type { Project } from '../types/project';
import projectsData from '../data/projects.json';

/**
 * 全てのプロジェクトデータを取得
 */
export const getAllProjects = (): Project[] => {
  return projectsData as Project[];
};

/**
 * IDでプロジェクトを取得
 */
export const getProjectById = (id: number): Project | undefined => {
  return projectsData.find((project) => project.id === id) as Project | undefined;
};

/**
 * 技術スタックでプロジェクトをフィルタリング
 */
export const getProjectsByTechnology = (technology: string): Project[] => {
  return projectsData.filter((project) =>
    project.technologies.includes(technology)
  ) as Project[];
};

/**
 * 利用可能な全ての技術スタックを取得
 */
export const getAllTechnologies = (): string[] => {
  const technologies = new Set<string>();
  projectsData.forEach((project) => {
    project.technologies.forEach((tech) => technologies.add(tech));
  });
  return Array.from(technologies).sort();
};
