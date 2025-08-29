import { createContext } from 'react';
import type { Project } from '../types/project';

export interface ProjectContextState {
  // Data
  projects: Project[];
  technologies: string[];

  // Loading states
  isLoading: boolean;

  // Filter states
  selectedTechnology: string;

  // Actions
  setSelectedTechnology: (technology: string) => void;
  getProjectById: (id: number) => Project | undefined;
  getFilteredProjects: () => Project[];
}

export const ProjectContext = createContext<ProjectContextState | undefined>(
  undefined
);
