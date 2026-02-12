import { Skeleton } from '@/components/ui/skeleton';

export default function ProjectDetailSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Skeleton className="w-5 h-5 rounded-full" /> {/* Back Arrow */}
              <div className="flex items-center gap-2">
                <Skeleton className="w-8 h-8 rounded-full" /> {/* Logo */}
                <Skeleton className="w-16 h-6" /> {/* Name */}
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-2">
              <Skeleton className="w-7 h-7 rounded-full" /> {/* Avatar */}
              <Skeleton className="w-20 h-4 hidden sm:block" /> {/* Name */}
            </div>
          </div>
        </div>
      </header>

      {/* Project Header Skeleton */}
      <div className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-start justify-between">
            <div className="space-y-4 w-full max-w-2xl">
              <div className="flex items-center gap-3">
                <Skeleton className="h-8 w-64" /> {/* Project Name */}
                <Skeleton className="h-6 w-16 rounded-full" />{' '}
                {/* Status Badge */}
              </div>

              <div className="flex items-center gap-6">
                <Skeleton className="h-4 w-48" /> {/* Dates */}
                <Skeleton className="h-4 w-24" /> {/* Helper text */}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Skeleton className="h-10 w-20" /> {/* Edit Button */}
              <Skeleton className="h-10 w-24" /> {/* Leave Button */}
            </div>
          </div>

          <div className="flex items-center gap-6 mt-8">
            <div className="pb-2 border-b-2 border-primary/20">
              <Skeleton className="h-5 w-12" /> {/* Tab 1 */}
            </div>
            <div className="pb-2">
              <Skeleton className="h-5 w-16" /> {/* Tab 2 */}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Card 1: Overview */}
          <div className="bg-card border rounded-xl p-6 space-y-4">
            <Skeleton className="h-6 w-32" /> {/* Section Title */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>

          {/* Card 2: Members */}
          <div className="bg-card border rounded-xl p-6 space-y-4">
            <Skeleton className="h-6 w-40" /> {/* Section Title */}
            <div className="space-y-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <Skeleton className="w-10 h-10 rounded-full" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
