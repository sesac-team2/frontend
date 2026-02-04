import ShareHeader from './components/ShareHeader';
import ShareProfileHeader from './components/ShareProfileHeader';
import ShareTopKeywords from './components/ShareTopKeywords';
import ShareContributionSection from './components/ShareContributionSection';
import ShareCta from './components/ShareCta';
import ShareFooter from './components/ShareFooter';

import { mockContributor, mockContributions } from './data';

export default function PublicSharePage() {
  return (
    <div className="min-h-screen bg-background">
      <ShareHeader brandName="Proov" brandHref="/" />

      <main className="max-w-5xl mx-auto px-6 py-12">
        <ShareProfileHeader contributor={mockContributor} />

        <ShareTopKeywords keywords={mockContributor.topKeywords} />

        <ShareContributionSection contributions={mockContributions} />

        <ShareCta ctaHref="/login" />
      </main>

      <ShareFooter brandName="Proov" brandHref="/" />
    </div>
  );
}
