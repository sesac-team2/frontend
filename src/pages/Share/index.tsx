import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { toPng } from 'html-to-image';

import ShareHeader from './components/ShareHeader';
import ShareProfileHeader from './components/ShareProfileHeader';
import ShareTopKeywords from './components/ShareTopKeywords';
import ShareContributionSection from './components/ShareContributionSection';
import ShareCta from './components/ShareCta';
import ShareFooter from './components/ShareFooter';

import SharePageSkeleton from './components/SharePageSkeleton';

import { shareApi } from '@/api/share';
import type { Portfolio } from '@/types/portfolio';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export default function PublicSharePage() {
  const userId = useParams<{ id: string }>();
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [alertConfig, setAlertConfig] = useState<{
    title: string;
    description: string;
  } | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setAlertConfig({
      title: '링크 복사 완료',
      description: '포트폴리오 링크가 클립보드에 복사되었습니다.',
    });
  };

  const handleExport = async () => {
    if (contentRef.current === null) {
      return;
    }

    try {
      const dataUrl = await toPng(contentRef.current, { cacheBust: true });
      const link = document.createElement('a');
      link.download = `${portfolio.user.fullName}-portfolio.png`;
      link.href = dataUrl;
      link.click();

      setAlertConfig({
        title: '다운로드 완료',
        description: '이미지가 성공적으로 저장되었습니다.',
      });
    } catch (err) {
      console.error(err);
      setAlertConfig({
        title: '오류 발생',
        description: '이미지 저장 중 문제가 발생했습니다. 다시 시도해주세요.',
      });
    }
  };

  return (
    <div ref={contentRef} className="min-h-screen bg-background">
      <ShareHeader
        brandName="Proov"
        brandHref="/"
        onClickShare={handleShare}
        onClickExport={handleExport}
      />

      <main className="max-w-5xl mx-auto px-6 py-12">
        <ShareProfileHeader user={portfolio.user} stats={portfolio.stats} />

        <ShareTopKeywords keywords={portfolio.topKeywords} />

        <ShareContributionSection projects={portfolio.projects} />

        {userId.id === 'example' && <ShareCta ctaHref="/login" />}
      </main>
      <ShareFooter brandName="Proov" brandHref="/" />

      <AlertDialog
        open={!!alertConfig}
        onOpenChange={(open) => !open && setAlertConfig(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{alertConfig?.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {alertConfig?.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setAlertConfig(null)}>
              확인
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
