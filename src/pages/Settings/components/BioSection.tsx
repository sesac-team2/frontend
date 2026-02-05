import { Textarea } from '@/components/ui/textarea';

interface BioSectionProps {
  bio: string;
  onChange: (value: string) => void;
}

export default function BioSection({ bio, onChange }: BioSectionProps) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-foreground">
          One Line Introduction
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          A brief description that appears on your public profile
        </p>
      </div>

      <div className="space-y-2">
        <Textarea
          value={bio}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Tell others a bit about yourself..."
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
