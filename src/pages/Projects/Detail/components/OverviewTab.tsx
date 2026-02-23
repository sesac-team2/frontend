import { useMemo, useState } from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import type { ProjectDetail } from '@/types/project';
import type { ApiProjectTestimonial } from '@/api/testimonial';
import { formatDate } from '../../utils';
import OverviewSkeleton from './OverviewSkeleton';

interface OverviewTabProps {
  project: ProjectDetail;
  testimonials: ApiProjectTestimonial[];
  isLoading: boolean;
  error: string | null;
}

const VISIBLE_COUNT = 4;

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const initials = parts
    .slice(0, 2)
    .map((p) => p[0])
    .join('');
  return initials || 'U';
}

function ActivityItem({ testimonial }: { testimonial: ApiProjectTestimonial }) {
  const senderName = testimonial.sender?.fullName ?? 'Unknown';
  const recipientName = testimonial.recipient?.fullName ?? 'Unknown';
  const summary = testimonial.summary?.trim();

  return (
    <div className="flex gap-3 py-3">
      <Avatar className="h-9 w-9 shrink-0">
        <AvatarFallback className="text-xs bg-secondary text-secondary-foreground">
          {getInitials(senderName)}
        </AvatarFallback>
      </Avatar>

      <div className="min-w-0 flex-1">
        {/* 헤더(행동) */}
        <p className="text-sm text-foreground">
          <span className="font-medium">{senderName}</span>
          <span className="text-muted-foreground">님이 </span>
          <span className="font-medium">{recipientName}</span>
          <span className="text-muted-foreground">
            님에게 기여를 작성했습니다
          </span>
        </p>

        {/* 메타(날짜) */}
        <p className="mt-0.5 text-xs text-muted-foreground">
          {formatDate(testimonial.createdAt)}
        </p>

        {/* 본문(요약) */}
        {summary && (
          <div className="mt-2 border-l-2 border-border pl-3">
            <p className="text-sm text-muted-foreground line-clamp-2 break-words">
              {summary}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function OverviewTab({
  project,
  testimonials,
  isLoading,
  error,
}: OverviewTabProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const sortedTestimonials = useMemo(() => {
    return [...testimonials].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  }, [testimonials]);

  const hasMore = sortedTestimonials.length > VISIBLE_COUNT;
  const visibleTestimonials = isExpanded
    ? sortedTestimonials
    : sortedTestimonials.slice(0, VISIBLE_COUNT);

  if (isLoading) return <OverviewSkeleton />;

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6">
      {/* 프로젝트 개요 */}
      <section className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-3 text-base font-semibold text-foreground">
          프로젝트 개요
        </h3>
        <p className="leading-relaxed text-muted-foreground">
          {project.description || '아직 프로젝트 설명이 없습니다.'}
        </p>
      </section>

      {/* 최근 활동 */}
      <section className="rounded-xl border border-border bg-card p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-semibold text-foreground">최근 활동</h3>
          <p className="text-xs text-muted-foreground">
            {sortedTestimonials.length}건
          </p>
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        {!error && sortedTestimonials.length === 0 && (
          <p className="text-sm text-muted-foreground">
            아직 작성된 기여가 없습니다.
          </p>
        )}

        {!error && sortedTestimonials.length > 0 && (
          <>
            <div className="divide-y divide-border">
              {visibleTestimonials.map((t) => (
                <ActivityItem key={t.id} testimonial={t} />
              ))}
            </div>

            {hasMore && (
              <div className="mt-4 flex justify-center">
                <button
                  type="button"
                  onClick={() => setIsExpanded((prev) => !prev)}
                  className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  {isExpanded ? '접기' : '더 보기'}
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
