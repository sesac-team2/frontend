import { Badge } from '@/components/ui/badge';

interface ShareTopKeywordsProps {
  keywords: string[];
}

export default function ShareTopKeywords({ keywords }: ShareTopKeywordsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {keywords.map((keyword) => (
        <Badge
          key={keyword}
          variant="secondary"
          className="px-4 py-2 text-sm font-medium"
        >
          {keyword}
        </Badge>
      ))}
    </div>
  );
}
