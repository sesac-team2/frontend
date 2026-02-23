import { Skeleton } from '@/components/ui/skeleton';

export default function OverviewSkeleton() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-6">
      {/* Overview Block Skeleton */}
      <div className="p-6 rounded-xl border border-border bg-card">
        <Skeleton className="h-6 w-32 mb-4" /> {/* Title */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[90%]" />
          <Skeleton className="h-4 w-[80%]" />
        </div>
      </div>

      {/* Recent Activity Skeleton */}
      <div className="p-6 rounded-xl border border-border bg-card">
        <Skeleton className="h-6 w-24 mb-6" /> {/* Title */}
        <div className="space-y-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-start gap-4">
              <Skeleton className="w-10 h-10 rounded-full shrink-0" />
              <div className="flex-1 space-y-2 py-1">
                <Skeleton className="h-4 w-[70%]" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
