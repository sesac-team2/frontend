import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera } from 'lucide-react';
import imageCompression from 'browser-image-compression';

interface ProfileImageSectionProps {
  profileImageUrl: string;
  name: string;
  onImageUpload: (file: File) => void;
}

export default function ProfileImageSection({
  profileImageUrl,
  name,
  onImageUpload,
}: ProfileImageSectionProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const options = {
        maxSizeMB: 0.1, // 최대 1MB
        maxWidthOrHeight: 400, // 최대 해상도 1024x1024
        useWebWorker: true,
        fileType: 'image/webp',
      };

      const compressedFile = await imageCompression(file, options);
      onImageUpload(compressedFile);
    } catch (error) {
      console.error('Image compression failed:', error);
    }
  };

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-foreground">프로필 이미지</h2>
        <p className="text-sm text-muted-foreground mt-1">
          리뷰와 기여 내역에 표시됩니다
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative cursor-pointer" onClick={handleImageClick}>
          <Avatar className="w-24 h-24 hover:opacity-90 transition-opacity">
            <AvatarImage src={profileImageUrl || undefined} />
            <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
              {name ? name.charAt(0).toUpperCase() : 'U'}
            </AvatarFallback>
          </Avatar>
          <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-card border border-border shadow-sm flex items-center justify-center hover:bg-muted transition-colors">
            <Camera className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
        <div className="space-y-2">
          <Button variant="outline" size="sm" onClick={handleImageClick}>
            이미지 업로드
          </Button>
          <p className="text-xs text-muted-foreground">
            JPG, PNG 또는 GIF. 최대 2MB.
          </p>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
      </div>
    </section>
  );
}
