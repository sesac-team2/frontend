import { Skeleton } from '@/components/ui/skeleton';

export default function SharePageSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="h-6 w-16" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-9 w-24" />
            <Skeleton className="h-9 w-24" />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Profile Header Skeleton */}
        <div className="text-center mb-12">
          {/* Avatar */}
          <Skeleton className="w-24 h-24 rounded-full mx-auto mb-6" />

          {/* Name */}
          <div className="flex justify-center mb-4">
            <Skeleton className="h-10 w-48" />
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="flex flex-col items-center gap-2">
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-4 w-16" />
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex flex-col items-center gap-2">
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-4 w-16" />
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex flex-col items-center gap-2">
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-2 max-w-2xl mx-auto flex flex-col items-center">
            <Skeleton className="h-7 w-full" />
            <Skeleton className="h-7 w-[80%]" />
          </div>
        </div>

        {/* Top Keywords Skeleton */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-8 w-20 rounded-full" />
          ))}
        </div>

        {/* Contribution Section Skeleton */}
        <div className="space-y-6">
          <div className="flex justify-center mb-8">
            <Skeleton className="h-7 w-32" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border rounded-lg p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
                <div className="flex gap-2 pt-2">
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
