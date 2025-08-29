import { useContext } from 'react';
import type { Project } from '../types/project';
import {
  ProjectContext,
  type ProjectContextState,
} from '../contexts/ProjectContextDefinition';

// Custom hook for using project context
export const useProjects = (): ProjectContextState => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
};

// Convenience hooks for specific use cases
export const useProjectById = (id: number): Project | undefined => {
  const { getProjectById } = useProjects();
  return getProjectById(id);
};

export const useFilteredProjects = (): Project[] => {
  const { getFilteredProjects } = useProjects();
  return getFilteredProjects();
};
