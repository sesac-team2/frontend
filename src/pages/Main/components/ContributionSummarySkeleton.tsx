import { Skeleton } from '@/components/ui/skeleton';

export default function ContributionSummarySkeleton() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Filter skeleton */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 pb-4 border-b border-border overflow-x-auto">
            <Skeleton className="h-4 w-24 shrink-0" />
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-32" />
          </div>
        </div>

        {/* spacing column */}
        <div className="hidden lg:block">
          <div className="pb-4 border-b border-border invisible pointer-events-none">
            <span className="text-sm shrink-0">프로젝트 필터:</span>
            <div className="h-8" />
          </div>
        </div>

        {/* Left list skeleton */}
        <div className="lg:col-span-2 space-y-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-border bg-card space-y-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <Skeleton className="w-10 h-10 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-40" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[90%]" />
              <Skeleton className="h-4 w-[80%]" />

              <div className="flex gap-2 pt-4 mt-4 border-t border-border">
                <Skeleton className="h-8 w-16 rounded-full" />
                <Skeleton className="h-8 w-20 rounded-full" />
                <Skeleton className="h-8 w-24 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Right summary skeleton */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-border bg-card">
            <Skeleton className="h-6 w-16 mb-4" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Skeleton className="h-10 w-16 mb-2" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div>
                <Skeleton className="h-10 w-16 mb-2" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card">
            <Skeleton className="h-6 w-24 mb-4" />
            <div className="flex flex-wrap gap-2">
              {[...Array(8)].map((_, i) => (
                <Skeleton
                  key={i}
                  className="rounded-full"
                  style={{
                    height: '28px',
                    width: `${Math.floor(Math.random() * 40) + 60}px`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
