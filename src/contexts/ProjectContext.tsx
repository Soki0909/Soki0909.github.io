import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Project } from '../types/project';
import { getAllProjects, getAllTechnologies } from '../utils/projects';
import {
  ProjectContext,
  type ProjectContextState,
} from './ProjectContextDefinition';

interface ProjectProviderProps {
  children: ReactNode;
}

export const ProjectProvider: React.FC<ProjectProviderProps> = ({
  children,
}) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTechnology, setSelectedTechnology] = useState<string>('');

  // Initialize data
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);

        // Simulate async loading for future API integration
        const projectsData = getAllProjects();
        const technologiesData = getAllTechnologies();

        setProjects(projectsData);
        setTechnologies(technologiesData);
      } catch (error) {
        console.error('Failed to load project data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Get project by ID
  const getProjectById = (id: number): Project | undefined => {
    return projects.find((project) => project.id === id);
  };

  // Get filtered projects
  const getFilteredProjects = (): Project[] => {
    if (!selectedTechnology) {
      return projects;
    }
    return projects.filter((project) =>
      project.technologies.includes(selectedTechnology)
    );
  };

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
