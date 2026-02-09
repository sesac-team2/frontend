import { Input } from '@/components/ui/input';

interface NameSectionProps {
  name: string;
  onChange: (value: string) => void;
}

export default function NameSection({ name, onChange }: NameSectionProps) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-foreground">이름</h2>
        <p className="text-sm text-muted-foreground mt-1">
          팀원들에게 표시될 이름입니다
        </p>
      </div>

      <Input
        value={name}
        onChange={(e) => onChange(e.target.value)}
        placeholder="이름을 입력하세요"
        className="max-w-md h-11"
      />
    </section>
  );
}
