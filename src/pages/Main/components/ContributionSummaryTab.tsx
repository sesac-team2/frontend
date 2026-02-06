import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ImageIcon, Download } from 'lucide-react';
import type { Testimonial } from '@/types';
import TestimonialCard from './TestimonialCard';

interface ContributionSummaryTabProps {
  testimonials: Testimonial[];
}

export default function ContributionSummaryTab({
  testimonials,
}: ContributionSummaryTabProps) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filteredTestimonials = selectedProject
    ? testimonials.filter((t) => t.projectName === selectedProject)
    : testimonials;

  const projectNames = [...new Set(testimonials.map((t) => t.projectName))];

  const sortedKeywords = useMemo(() => {
    const allKeywords = testimonials.flatMap((t) => t.keywords);
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
  }, [testimonials]);

  return (
    <>
      {/* Action buttons */}
      <div className="flex items-center justify-end gap-3 mb-6">
        <Button variant="outline" className="gap-2 bg-transparent">
          <ImageIcon className="w-4 h-4" />
          Generate Image
        </Button>
        <Button variant="outline" className="gap-2 bg-transparent">
          <Download className="w-4 h-4" />
          Export
        </Button>
      </div>

      {/* ✅ grid를 "필터 줄 + 본문" 2단으로 구성 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* =========================
            Row 1: Filter (왼쪽 2칸만 보이게)
           ========================= */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 pb-4 border-b border-border overflow-x-auto">
            <span className="text-sm text-muted-foreground shrink-0">
              Filter by project:
            </span>

            <Button
              variant={selectedProject === null ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setSelectedProject(null)}
            >
              All
            </Button>

            {projectNames.map((name) => (
              <Button
                key={name}
                variant={selectedProject === name ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => setSelectedProject(name)}
                className="shrink-0"
              >
                {name}
              </Button>
            ))}
          </div>
        </div>

        {/* ✅ 오른쪽 1칸에는 "필터가 존재"하되 안 보이게(공간 유지) */}
        <div className="hidden lg:block">
          <div className="pb-4 border-b border-border invisible pointer-events-none">
            {/* 같은 높이를 만들기 위해 동일한 구조/사이즈를 유지 */}
            <span className="text-sm shrink-0">Filter by project:</span>
            <Button size="sm">All</Button>
          </div>
        </div>

        {/* =========================
            Row 2: Left list
           ========================= */}
        <div className="lg:col-span-2 space-y-4">
          {filteredTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* =========================
            Row 2: Right cards
           ========================= */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-4">Overview</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-3xl font-bold text-foreground">
                  {testimonials.length}
                </p>
                <p className="text-sm text-muted-foreground">
                  Testimonials written
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">
                  {projectNames.length}
                </p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-4">Top Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {sortedKeywords.slice(0, 12).map(({ keyword, count }) => (
                <Badge
                  key={keyword}
                  variant="secondary"
                  className="px-3 py-1.5"
                  style={{
                    fontSize: `${Math.min(0.75 + count * 0.1, 1)}rem`,
                  }}
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
