import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import type { ShareContributor } from '../models';

interface ShareProfileHeaderProps {
  contributor: ShareContributor;
  projectsLabel?: string;
  testimonialsLabel?: string;
  collaboratorsLabel?: string;
}

export default function ShareProfileHeader({
  contributor,
  projectsLabel = '프로젝트',
  testimonialsLabel = '피드백',
  collaboratorsLabel = '협업한 사람',
}: ShareProfileHeaderProps) {
  const initials = contributor.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div className="text-center mb-12">
      <Avatar className="w-24 h-24 mx-auto mb-6">
        <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
          {initials}
        </AvatarFallback>
      </Avatar>

      <h1 className="text-3xl font-bold text-foreground mb-2">
        {contributor.name}
      </h1>
      <p className="text-lg text-muted-foreground mb-6">{contributor.role}</p>

      <div className="flex items-center justify-center gap-8 mb-8">
        <StatBlock value={contributor.stats.projects} label={projectsLabel} />
        <Divider />
        <StatBlock
          value={contributor.stats.testimonials}
          label={testimonialsLabel}
        />
        <Divider />
        <StatBlock
          value={contributor.stats.collaborators}
          label={collaboratorsLabel}
        />
      </div>

      <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
        {contributor.summary}
      </p>
    </div>
  );
}

function Divider() {
  return <div className="w-px h-10 bg-border" />;
}

interface StatBlockProps {
  value: number;
  label: string;
}

function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-foreground">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
