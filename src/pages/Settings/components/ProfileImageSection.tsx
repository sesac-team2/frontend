import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera } from 'lucide-react';

export default function ProfileImageSection() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-foreground">Profile Image</h2>
        <p className="text-sm text-muted-foreground mt-1">
          This will be displayed on your testimonials and contributions
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
              JD
            </AvatarFallback>
          </Avatar>
          <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-card border border-border shadow-sm flex items-center justify-center hover:bg-muted transition-colors">
            <Camera className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
        <div className="space-y-2">
          <Button variant="outline" size="sm">
            Upload Image
          </Button>
          <p className="text-xs text-muted-foreground">
            JPG, PNG or GIF. Max 2MB.
          </p>
        </div>
      </div>
    </section>
  );
}
