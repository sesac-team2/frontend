import { Skeleton } from '@/components/ui/skeleton';
import { Clock, ArrowLeft } from 'lucide-react';

export default function NewTestimonialSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="text-muted-foreground w-5 h-5 flex items-center justify-center">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <div>
                <Skeleton className="h-6 w-24 mb-1.5" /> {/* Title */}
                <Skeleton className="h-4 w-32" /> {/* Subtitle */}
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <Skeleton className="h-4 w-48 hidden sm:block" />
            </div>
          </div>
        </div>
      </header>

      {/* RecipientInfo Skeleton */}
      <div className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center gap-4">
          <Skeleton className="w-16 h-16 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-5 w-48" />
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* ProgressIndicator Skeleton */}
        <div className="mb-8 p-4 rounded-xl border border-border bg-card">
          <div className="flex justify-between items-center mb-3">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-5 w-32" />
          </div>
          <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
            <Skeleton className="h-full w-1/4 rounded-full" />
          </div>
        </div>

        {/* QuestionCard Skeletons */}
        <div className="space-y-6">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <div className="flex items-start gap-3 mb-4">
                <Skeleton className="w-7 h-7 rounded-full shrink-0" />
                <div className="w-full">
                  <div className="flex items-center gap-2 mb-2">
                    <Skeleton className="h-5 w-16" /> {/* Category Badge */}
                    <Skeleton className="h-4 w-8" /> {/* Required Badge */}
                  </div>
                  <Skeleton className="h-6 w-[80%]" /> {/* Question */}
                </div>
              </div>

              <div className="ml-10">
                <Skeleton className="h-32 w-full rounded-lg" /> {/* Textarea */}
                <div className="flex justify-end mt-2">
                  <Skeleton className="h-4 w-16" /> {/* Char count */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-lg bg-muted/50 border border-border">
          <Skeleton className="h-4 w-full mb-1" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </main>

      {/* BottomActions Skeleton */}
      <div className="fixed bottom-0 left-0 right-0 p-4 border-t border-border bg-background/95 backdrop-blur z-20">
        <div className="max-w-4xl mx-auto flex justify-end">
          <Skeleton className="h-12 w-40 rounded-md" />
        </div>
      </div>

      <div className="h-24" />
    </div>
  );
}
