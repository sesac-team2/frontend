// src/context/ProjectContext.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
  useRef,
} from 'react';
import { projectApi } from '@/api/project';
import type { Project } from '@/types';
import { useAuth } from '@/context/AuthContext';

type ProjectContextType = {
  projects: Project[];
  isLoading: boolean;
  error: string | null;
  fetchProjects: () => Promise<void>;
  refreshProjects: () => Promise<void>;
};

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { isLoading: authLoading, isAuthenticated } = useAuth();
  const fetchedOnceRef = useRef(false);

  const hasToken = () => !!localStorage.getItem('accessToken');

  const fetchProjects = useCallback(async () => {
    if (!hasToken()) {
      setProjects([]);
      setError(null);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const projectData = await projectApi.getProjects();

      if (!projectData || !Array.isArray(projectData.data)) {
        setProjects([]);
        setError('Invalid project response payload.');
        return;
      }

      setProjects(projectData.data);
    } catch (e: any) {
      setError(
        e?.response?.data?.message ??
          e?.message ??
          'Failed to load project list.',
      );
      setProjects([]);
    } finally {
      setIsLoading(false);
    }
  }, [authLoading, isAuthenticated]);

  const refreshProjects = fetchProjects;

  useEffect(() => {
    if (authLoading) return;

    if (!isAuthenticated) {
      fetchedOnceRef.current = false;
      setProjects([]);
      setError(null);
      setIsLoading(false);
      return;
    }

    if (!fetchedOnceRef.current) {
      fetchedOnceRef.current = true;
      fetchProjects();
    }
  }, [authLoading, isAuthenticated, fetchProjects]);

  const value = useMemo(
    () => ({
      projects,
      isLoading,
      error,
      fetchProjects,
      refreshProjects,
    }),
    [projects, isLoading, error, fetchProjects, refreshProjects],
  );

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
}

export function useProjects() {
  const ctx = useContext(ProjectContext);
  if (!ctx)
    throw new Error('useProjects must be used within a ProjectProvider');
  return ctx;
}
