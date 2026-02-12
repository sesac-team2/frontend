import { Skeleton } from '@/components/ui/skeleton';

export default function MainSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Skeleton className="w-8 h-8 rounded-full" /> {/* Logo */}
              <Skeleton className="w-16 h-6" /> {/* Name */}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-2">
                <Skeleton className="w-7 h-7 rounded-full" /> {/* Avatar */}
                <Skeleton className="w-20 h-4 hidden sm:block" /> {/* Name */}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content Skeleton */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Page header */}
        <div className="flex items-start justify-between mb-8">
          <div className="space-y-2">
            <Skeleton className="h-8 w-32" /> {/* Title */}
            <Skeleton className="h-4 w-64" /> {/* Description */}
          </div>

          {/* Tab toggle */}
          <div className="flex items-center p-1 bg-muted rounded-lg">
            <Skeleton className="w-24 h-9 rounded-md" />
            <Skeleton className="w-24 h-9 rounded-md ml-1" />
          </div>
        </div>

        {/* Projects Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border rounded-xl p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <Skeleton className="h-6 w-40" /> {/* Project Name */}
                  <Skeleton className="h-4 w-24" /> {/* Date */}
                </div>
                <Skeleton className="w-8 h-8 rounded-full" /> {/* Icon */}
              </div>
              <Skeleton className="h-16 w-full" /> {/* Description */}
              <div className="flex gap-2 pt-4">
                <Skeleton className="h-6 w-16 rounded-full" /> {/* Tag */}
                <Skeleton className="h-6 w-16 rounded-full" /> {/* Tag */}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Floating Action Button Skeleton */}
      <div className="fixed bottom-8 right-8">
        <Skeleton className="w-40 h-12 rounded-full" />
      </div>
    </div>
  );
}
