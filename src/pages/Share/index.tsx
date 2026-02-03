import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Share2, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ContributionHighlight {
  project: string;
  duration: string;
  highlights: string[];
  keywords: string[];
}

const mockContributor = {
  name: 'Sarah Chen',
  role: 'Senior Designer',
  summary:
    'A versatile designer with exceptional skills in user experience research, visual design, and cross-functional collaboration. Known for driving significant improvements in user engagement and conversion rates.',
  topKeywords: [
    'Leadership',
    'UI/UX',
    'Collaboration',
    'Problem Solving',
    'Innovation',
    'Mentorship',
  ],
  stats: {
    projects: 5,
    testimonials: 23,
    collaborators: 42,
  },
};

const mockContributions: ContributionHighlight[] = [
  {
    project: 'E-commerce Platform Redesign',
    duration: 'Oct 2025 - Mar 2026',
    highlights: [
      'Led the entire UI/UX redesign for the checkout flow, reducing cart abandonment by 23%',
      'Collaborated effectively across engineering and product teams to ensure seamless implementation',
      'Created a comprehensive design system adopted across 5 product teams',
    ],
    keywords: ['Leadership', 'UI/UX', 'Design Systems'],
  },
  {
    project: 'Mobile App MVP',
    duration: 'Jun 2025 - Sep 2025',
    highlights: [
      'Designed the core user experience from discovery to conversion',
      'Conducted user research with 50+ participants to validate design decisions',
      'Mentored junior designers on research methodologies',
    ],
    keywords: ['User Research', 'Mentorship', 'Mobile Design'],
  },
  {
    project: 'Internal Dashboard',
    duration: 'Jan 2025 - May 2025',
    highlights: [
      'Streamlined complex data visualization for executive decision-making',
      'Reduced average task completion time by 40% through UX improvements',
    ],
    keywords: ['Data Visualization', 'Efficiency', 'Enterprise UX'],
  },
];

export default function PublicSharePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-semibold text-lg text-foreground">
            Contriboard
          </Link>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 bg-transparent"
            >
              <Share2 className="w-4 h-4" />
              Share
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 bg-transparent"
            >
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Profile header */}
        <div className="text-center mb-12">
          <Avatar className="w-24 h-24 mx-auto mb-6">
            <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
              {mockContributor.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {mockContributor.name}
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            {mockContributor.role}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">
                {mockContributor.stats.projects}
              </p>
              <p className="text-sm text-muted-foreground">Projects</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">
                {mockContributor.stats.testimonials}
              </p>
              <p className="text-sm text-muted-foreground">Testimonials</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">
                {mockContributor.stats.collaborators}
              </p>
              <p className="text-sm text-muted-foreground">Collaborators</p>
            </div>
          </div>

          {/* Summary */}
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            {mockContributor.summary}
          </p>
        </div>

        {/* Top keywords */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {mockContributor.topKeywords.map((keyword) => (
            <Badge
              key={keyword}
              variant="secondary"
              className="px-4 py-2 text-sm font-medium"
            >
              {keyword}
            </Badge>
          ))}
        </div>

        {/* Contributions grid */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground text-center mb-8">
            Contribution Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockContributions.map((contribution, index) => (
              <ContributionCard key={index} contribution={contribution} />
            ))}
          </div>
        </div>

        {/* Visualization section */}
        <div className="mt-16 p-8 rounded-2xl bg-card border border-border">
          <h3 className="text-lg font-semibold text-foreground text-center mb-6">
            Recognition Patterns
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SkillBar label="Leadership" value={92} />
            <SkillBar label="Technical Excellence" value={88} />
            <SkillBar label="Collaboration" value={95} />
            <SkillBar label="Innovation" value={85} />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Want to create your own contribution portfolio?
          </p>
          <Button asChild>
            <Link to="/login">
              Get Started with Contriboard
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-5xl mx-auto px-6 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            Generated with{' '}
            <Link to="/" className="text-foreground hover:underline">
              Contriboard
            </Link>{' '}
            — Turn team contributions into lasting recognition
          </p>
        </div>
      </footer>
    </div>
  );
}

function ContributionCard({
  contribution,
}: {
  contribution: ContributionHighlight;
}) {
  return (
    <div className="p-6 rounded-xl border border-border bg-card hover:border-muted-foreground/30 transition-colors h-full flex flex-col">
      <div className="mb-4">
        <h3 className="font-semibold text-foreground mb-1">
          {contribution.project}
        </h3>
        <p className="text-sm text-muted-foreground">{contribution.duration}</p>
      </div>

      <ul className="space-y-2 mb-4 flex-1">
        {contribution.highlights.map((highlight, index) => (
          <li
            key={index}
            className="text-sm text-foreground/80 flex items-start gap-2"
          >
            <span className="text-accent mt-1 shrink-0">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
        {contribution.keywords.map((keyword) => (
          <Badge key={keyword} variant="outline" className="text-xs">
            {keyword}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function SkillBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center">
      <div className="relative w-20 h-20 mx-auto mb-3">
        <svg className="w-20 h-20 transform -rotate-90">
          <circle
            cx="40"
            cy="40"
            r="35"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            className="text-muted"
          />
          <circle
            cx="40"
            cy="40"
            r="35"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            strokeDasharray={`${(value / 100) * 220} 220`}
            strokeLinecap="round"
            className="text-accent"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-foreground">
          {value}%
        </span>
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
