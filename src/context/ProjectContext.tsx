import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { projectApi } from '@/api/project';
import type { Project } from '@/types';

type ProjectContextType = {
  projects: Project[];
  isLoading: boolean;
  error: string | null;

  // 데이터 로딩/갱신
  fetchProjects: () => Promise<void>;
  refreshProjects: () => Promise<void>; // 의미만 다르게 둠(같이 동작)

  // 삭제/수정 대비 유틸 (선택)
  // removeProject: (id: string) => void;
  // upsertProject: (project: Project) => void;
};

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const projectData = await projectApi.getProjects();
      setProjects(projectData.data);
    } catch (e: any) {
      setError(e?.message ?? '프로젝트 목록을 불러오지 못했어요.');
      setProjects([]);
    } finally {
      setIsLoading(false);
    }
  };

  const refreshProjects = fetchProjects;

  // 앱 진입 시 1번 로딩
  useEffect(() => {
    fetchProjects();
  }, []);

  // const removeProject = (id: string) => {
  //   setProjects((prev) => prev.filter((p) => p.id !== id));
  // };

  // const upsertProject = (project: Project) => {
  //   setProjects((prev) => {
  //     const idx = prev.findIndex((p) => p.id === project.id);
  //     if (idx === -1) return [project, ...prev];
  //     const copy = [...prev];
  //     copy[idx] = project;
  //     return copy;
  //   });
  // };

  const value = useMemo(
    () => ({
      projects,
      isLoading,
      error,
      fetchProjects,
      refreshProjects,
      // removeProject,
      // upsertProject,
    }),
    [projects, isLoading, error],
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
