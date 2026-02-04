import { useState, useMemo } from 'react';
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

  // Calculate keywords stats based on the passed testimonials (or filtered ones?
  // Original logic seemed to be based on ALL mock testimonials, but let's stick to the prop passed in to be safe.
  // Actually, typically stats should reflect what's visible or global. The original code used global 'mockTestimonials'.
  // We'll use the 'testimonials' prop to be more reusable.)

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

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Timeline */}
        <div className="lg:col-span-2 space-y-4">
          {/* Project filter */}
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

          {/* Testimonial list */}
          <div className="space-y-4">
            {filteredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Right column - Visualization */}
        <div className="space-y-6">
          {/* Stats */}
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

          {/* Keyword cloud */}
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

          {/* Pattern insights */}
          <div className="p-6 rounded-xl border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-4">
              Recognition Patterns
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Leadership
                </span>
                <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full"
                    style={{ width: '85%' }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Technical Skills
                </span>
                <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full"
                    style={{ width: '70%' }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Collaboration
                </span>
                <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full"
                    style={{ width: '90%' }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Initiative
                </span>
                <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full"
                    style={{ width: '60%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
