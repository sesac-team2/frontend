import { Button } from '@/components/ui/button';
import { Download, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProovIcon from '@/assets/proov.svg';

interface ShareHeaderProps {
  brandName: string;
  brandHref: string;
  shareLabel?: string;
  exportLabel?: string;
  onClickShare: () => void;
  onClickExport: () => void;
}

export default function ShareHeader({
  brandName,
  brandHref,
  shareLabel = '공유하기',
  exportLabel = '내보내기',
  onClickShare,
  onClickExport,
}: ShareHeaderProps) {
  return (
    <header className="border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to={brandHref}
          className="flex items-center font-semibold text-lg text-foreground"
        >
          <img src={ProovIcon} alt="Proov" className="w-8 h-8" />
          {brandName}
        </Link>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="gap-2 bg-transparent"
            type="button"
            onClick={onClickShare}
          >
            <Share2 className="w-4 h-4" />
            {shareLabel}
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="gap-2 bg-transparent"
            type="button"
            onClick={onClickExport}
          >
            <Download className="w-4 h-4" />
            {exportLabel}
          </Button>
        </div>
      </div>
    </header>
  );
}
