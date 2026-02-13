import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ShareHeader from './components/ShareHeader';
import ShareProfileHeader from './components/ShareProfileHeader';
import ShareTopKeywords from './components/ShareTopKeywords';
import ShareContributionSection from './components/ShareContributionSection';
import ShareCta from './components/ShareCta';
import ShareFooter from './components/ShareFooter';

import SharePageSkeleton from './components/SharePageSkeleton';

import { shareApi } from '@/api/share';
import type { Portfolio } from '@/types/portfolio';

export default function PublicSharePage() {
  const userId = useParams<{ id: string }>();
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      const portfolio = await shareApi.getPortfolio(userId.id || 'example');
      setPortfolio(portfolio);
    };
    fetchPortfolio();
  }, [userId]);

  if (!portfolio) {
    return <SharePageSkeleton />;
  }

  return (
    <div className="min-h-screen bg-background">
      <ShareHeader brandName="Proov" brandHref="/" />

      <main className="max-w-5xl mx-auto px-6 py-12">
        <ShareProfileHeader user={portfolio.user} stats={portfolio.stats} />

        <ShareTopKeywords keywords={portfolio.topKeywords} />

        <ShareContributionSection projects={portfolio.projects} />

        <ShareCta ctaHref="/login" />
      </main>
      {userId.id === 'exmaple' && (
        <ShareFooter brandName="Proov" brandHref="/" />
      )}
    </div>
  );
}
