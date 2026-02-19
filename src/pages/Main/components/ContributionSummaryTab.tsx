// src/pages/Main/components/ContributionSummaryTab.tsx
import { useEffect, useMemo, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ImageIcon, Download } from 'lucide-react';

import type { UITestimonial } from '@/types/testimonial';
import TestimonialCard from './TestimonialCard';
import { testimonialApi } from '@/api/testimonial';
import type { Project } from '@/types';

/** ✅ API 명세 (GET /projects/:id/testimonials) */
type ApiUser = { id: string; full_name: string };

type ApiProjectTestimonial = {
  id: string;
  sender: ApiUser;
  recipient: ApiUser;
  content: string;
  highlights: string[];
  skills: string[];
  createdAt: string;
};

/** ✅ API 명세 (GET /users/me/contributions) */
type ApiContributionSkill = { name: string; count: number };

type ApiMyContributions = {
  total_received: number;
  top_skills: ApiContributionSkill[];
  recent_testimonials: ApiProjectTestimonial[];
};

interface ContributionSummaryTabProps {
  projects: Project[];
}

const toUITestimonial = (
  t: ApiProjectTestimonial,
  opts?: { projectId?: string; projectName?: string; recipientRole?: string },
): UITestimonial => ({
  id: t.id,
  senderName: t.sender?.full_name ?? '',
  recipientName: t.recipient?.full_name ?? '',
  recipientRole: opts?.recipientRole ?? '—',
  projectId: opts?.projectId,
  projectName: opts?.projectName,
  content: t.content ?? '',
  highlights: t.highlights ?? [],
  keywords: t.skills ?? [], // ✅ skills -> keywords
  createdAt: t.createdAt,
});

export default function ContributionSummaryTab({
  projects,
}: ContributionSummaryTabProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );

  const [stats, setStats] = useState<ApiMyContributions | null>(null);
  const [testimonials, setTestimonials] = useState<UITestimonial[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const projectNameById = useMemo(() => {
    const map: Record<string, string> = {};
    for (const p of projects ?? []) map[p.id] = p.name;
    return map;
  }, [projects]);

  /** ✅ 전체(최근 후기) 로딩: /users/me/contributions */
  const fetchAll = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // ⚠️ testimonialApi.getMyTestimonialStatistics() 내부 경로:
      // 반드시 `/api/users/me/contributions` 여야 함
      const data =
        (await testimonialApi.getMyTestimonialStatistics()) as ApiMyContributions;

      setStats(data);

      const ui = (data.recent_testimonials ?? []).map((t) =>
        toUITestimonial(t),
      );
      setTestimonials(ui);
    } catch (e: any) {
      setError(
        e?.response?.data?.message ?? '기여도 요약을 불러오지 못했어요.',
      );
      setStats(null);
      setTestimonials([]);
    } finally {
      setLoading(false);
    }
  }, []);

  /** ✅ 특정 프로젝트 후기 로딩: /projects/:id/testimonials */
  const fetchProject = useCallback(
    async (projectId: string) => {
      try {
        setLoading(true);
        setError(null);

        const list = (await testimonialApi.getTestimonialList(
          projectId,
        )) as ApiProjectTestimonial[];

        const projectName = projectNameById[projectId];

        const ui = (list ?? []).map((t) =>
          toUITestimonial(t, { projectId, projectName }),
        );

        setTestimonials(ui);
      } catch (e: any) {
        setError(
          e?.response?.data?.message ?? '프로젝트 후기를 불러오지 못했어요.',
        );
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    },
    [projectNameById],
  );

  // ✅ 최초 진입: 전체
  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  // ✅ 필터 변경: 프로젝트 선택 시
  useEffect(() => {
    if (!selectedProjectId) return;
    fetchProject(selectedProjectId);
  }, [selectedProjectId, fetchProject]);

  /** ✅ 키워드: stats.top_skills 우선, 없으면 testimonials.keywords로 fallback */
  const sortedKeywords = useMemo(() => {
    if (stats?.top_skills?.length) {
      return stats.top_skills.map((s) => ({ keyword: s.name, count: s.count }));
    }

    const allKeywords = testimonials.flatMap((t) => t.keywords ?? []);
    const keywordCounts = allKeywords.reduce(
      (acc, keyword) => {
        acc[keyword] = (acc[keyword] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    return Object.entries(keywordCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([keyword, count]) => ({ keyword, count }));
  }, [stats, testimonials]);

  const totalReceived = stats?.total_received ?? 0;
  const projectCount = projects?.length ?? 0;

  if (loading) {
    return <div className="text-sm text-muted-foreground">로딩 중...</div>;
  }

  if (error) {
    return (
      <div className="p-6 rounded-xl border border-border bg-card">
        <p className="text-sm text-red-500">{error}</p>
        <div className="mt-4 flex gap-2">
          <Button variant="outline" onClick={fetchAll}>
            다시 시도
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              setSelectedProjectId(null);
              fetchAll();
            }}
          >
            전체로
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Action buttons */}
      <div className="flex items-center justify-end gap-3 mb-6">
        <Button variant="outline" className="gap-2 bg-transparent">
          <ImageIcon className="w-4 h-4" />
          이미지 생성
        </Button>
        <Button variant="outline" className="gap-2 bg-transparent">
          <Download className="w-4 h-4" />
          내보내기
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Filter */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 pb-4 border-b border-border overflow-x-auto">
            <span className="text-sm text-muted-foreground shrink-0">
              프로젝트 필터:
            </span>

            <Button
              variant={selectedProjectId === null ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => {
                setSelectedProjectId(null);
                fetchAll();
              }}
            >
              전체
            </Button>

            {(projects ?? []).map((p) => (
              <Button
                key={p.id}
                variant={selectedProjectId === p.id ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => setSelectedProjectId(p.id)}
                className="shrink-0"
              >
                {p.name}
              </Button>
            ))}
          </div>
        </div>

        {/* spacing column */}
        <div className="hidden lg:block">
          <div className="pb-4 border-b border-border invisible pointer-events-none">
            <span className="text-sm shrink-0">프로젝트 필터:</span>
            <Button size="sm">전체</Button>
          </div>
        </div>

        {/* Left list */}
        <div className="lg:col-span-2 space-y-4">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}

          {testimonials.length === 0 && (
            <div className="p-6 rounded-xl border border-border bg-card text-sm text-muted-foreground">
              표시할 후기가 없습니다.
            </div>
          )}
        </div>

        {/* Right summary */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-4">요약</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-3xl font-bold text-foreground">
                  {totalReceived}
                </p>
                <p className="text-sm text-muted-foreground">받은 후기</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">
                  {projectCount}
                </p>
                <p className="text-sm text-muted-foreground">프로젝트</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-4">상위 키워드</h3>
            <div className="flex flex-wrap gap-2">
              {sortedKeywords.slice(0, 12).map(({ keyword, count }) => (
                <Badge
                  key={keyword}
                  variant="secondary"
                  className="px-3 py-1.5"
                  style={{ fontSize: `${Math.min(0.75 + count * 0.1, 1)}rem` }}
                >
                  {keyword}
                  <span className="ml-1.5 text-muted-foreground">{count}</span>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
