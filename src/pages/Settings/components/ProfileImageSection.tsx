import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera } from 'lucide-react';

interface ProfileImageSectionProps {
  profileImageUrl: string;
  name: string;
}

export default function ProfileImageSection({
  profileImageUrl,
  name,
}: ProfileImageSectionProps) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-foreground">프로필 이미지</h2>
        <p className="text-sm text-muted-foreground mt-1">
          리뷰와 기여 내역에 표시됩니다
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Avatar className="w-24 h-24">
            <AvatarImage src={profileImageUrl} />
            <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
              {name ? name.charAt(0).toUpperCase() : 'U'}
            </AvatarFallback>
          </Avatar>
          <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-card border border-border shadow-sm flex items-center justify-center hover:bg-muted transition-colors">
            <Camera className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
        <div className="space-y-2">
          <Button variant="outline" size="sm">
            이미지 업로드
          </Button>
          <p className="text-xs text-muted-foreground">
            JPG, PNG 또는 GIF. 최대 2MB.
          </p>
        </div>
      </div>
    </section>
  );
}
