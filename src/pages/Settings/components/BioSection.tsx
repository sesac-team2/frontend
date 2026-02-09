import { Textarea } from '@/components/ui/textarea';

interface BioSectionProps {
  bio: string;
  onChange: (value: string) => void;
}

export default function BioSection({ bio, onChange }: BioSectionProps) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-foreground">한 줄 소개</h2>
        <p className="text-sm text-muted-foreground mt-1">
          공개 프로필에 표시될 짧은 소개입니다
        </p>
      </div>

      <div className="space-y-2">
        <Textarea
          value={bio}
          onChange={(e) => onChange(e.target.value)}
          placeholder="자신에 대해 간단히 소개해 주세요..."
          className="max-w-xl resize-none"
          rows={2}
          maxLength={120}
        />
        <p className="text-xs text-muted-foreground text-right max-w-xl">
          {bio.length}/120 characters
        </p>
      </div>
    </section>
  );
}
