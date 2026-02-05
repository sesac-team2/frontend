import { Input } from '@/components/ui/input';

interface NameSectionProps {
  name: string;
  onChange: (value: string) => void;
}

export default function NameSection({ name, onChange }: NameSectionProps) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-foreground">Name</h2>
        <p className="text-sm text-muted-foreground mt-1">
          How your teammates will see you in project testimonials
        </p>
      </div>

      <Input
        value={name}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your full name"
        className="max-w-md h-11"
      />
    </section>
  );
}
