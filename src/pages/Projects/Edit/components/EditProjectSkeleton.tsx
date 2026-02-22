import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft } from 'lucide-react';

export default function EditProjectSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 h-16">
            <div className="text-muted-foreground">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <div>
              <Skeleton className="h-6 w-32 mb-1" /> {/* Title */}
              <Skeleton className="h-4 w-48" /> {/* Subtitle */}
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-6 py-10">
        <div className="max-w-2xl">
          <div className="space-y-8">
            {/* Project name */}
            <div className="space-y-3">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-12 w-full rounded-md" />
              <Skeleton className="h-4 w-64" />
            </div>

            {/* Status */}
            <div className="space-y-3">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-11 w-full rounded-md" />
              <Skeleton className="h-4 w-48" />
            </div>

            {/* Date range */}
            <div className="space-y-3">
              <Skeleton className="h-5 w-24" />
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-11 w-full rounded-md" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-11 w-full rounded-md" />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-32 w-full rounded-md" />
              <Skeleton className="h-4 w-48" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 mt-12 pt-8 border-t border-border">
            <Skeleton className="h-10 w-16" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </main>
    </div>
  );
}
