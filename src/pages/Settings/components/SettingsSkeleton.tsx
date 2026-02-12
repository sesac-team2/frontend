import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

export default function SettingsSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Skeleton className="w-5 h-5 rounded-full" /> {/* ArrowLeft */}
              <Skeleton className="h-6 w-32" /> {/* Title */}
            </div>
            <Skeleton className="h-10 w-32" /> {/* Save Button */}
          </div>
        </div>
      </header>

      {/* Main content Skeleton */}
      <main className="max-w-3xl mx-auto px-6 py-8">
        <div className="space-y-10">
          {/* Profile Image Section */}
          <div className="flex flex-col gap-6">
            <Skeleton className="h-6 w-24" /> {/* Section Title */}
            <div className="flex items-center gap-6">
              <Skeleton className="w-24 h-24 rounded-full" /> {/* Avatar */}
              <div className="space-y-2">
                <Skeleton className="h-10 w-32" /> {/* Upload Button */}
                <Skeleton className="h-4 w-48" /> {/* Description */}
              </div>
            </div>
          </div>

          <Separator />

          {/* Name Section */}
          <div className="space-y-4">
            <Skeleton className="h-6 w-20" /> {/* Label */}
            <Skeleton className="h-10 w-full" /> {/* Input */}
          </div>

          <Separator />

          {/* Bio Section */}
          <div className="space-y-4">
            <Skeleton className="h-6 w-20" /> {/* Label */}
            <Skeleton className="h-24 w-full" /> {/* Textarea */}
            <Skeleton className="h-4 w-20 ml-auto" /> {/* Char count */}
          </div>

          <Separator />

          {/* Account Actions Section */}
          <div className="space-y-4">
            <Skeleton className="h-6 w-32" /> {/* Title */}
            <Skeleton className="h-10 w-full" /> {/* Button */}
          </div>
        </div>
      </main>
    </div>
  );
}
