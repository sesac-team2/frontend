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

export default function OverviewTab({
  project,
  testimonials,
  isLoading,
  error,
}: OverviewTabProps) {
  if (isLoading) {
    return <OverviewSkeleton />;
  }

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6">
      <div className="p-6 rounded-xl border border-border bg-card">
        <h3 className="font-semibold text-foreground mb-3">프로젝트 개요</h3>
        <p className="text-muted-foreground leading-relaxed">
          {project.description || '아직 프로젝트 설명이 없습니다.'}
        </p>
      </div>

      <div className="p-6 rounded-xl border border-border bg-card">
        <h3 className="font-semibold text-foreground mb-4">최근 활동</h3>

        {!isLoading && error && <p className="text-sm text-red-500">{error}</p>}

        {!isLoading && !error && testimonials.length > 0 && (
          <div className="space-y-4">
            {testimonials.map((testimonial) => {
              const senderName = testimonial.sender?.fullName ?? 'Unknown';
              const recipientName =
                testimonial.recipient?.fullName ?? 'Unknown';
              const senderInitials = senderName
                .split(' ')
                .map((n) => n?.[0] ?? '')
                .join('');

              return (
                <div key={testimonial.id} className="flex items-start gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="text-xs bg-secondary text-secondary-foreground">
                      {senderInitials || 'U'}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="text-sm">
                      <span className="font-medium text-foreground">
                        {senderName}
                      </span>
                      <span className="text-muted-foreground">님이 </span>
                      <span className="font-medium text-foreground">
                        {recipientName}
                      </span>
                      <span className="text-muted-foreground">
                        님에게 기여를 작성했습니다
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {formatDate(testimonial.createdAt)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {!isLoading && !error && testimonials.length === 0 && (
          <p className="text-sm text-muted-foreground">
            아직 작성된 기여가 없습니다.
          </p>
        )}
      </div>
    </div>
  );
}
