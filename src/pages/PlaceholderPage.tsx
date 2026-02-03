import { useLocation, Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function PlaceholderPage({ title }: { title?: string }) {
  const location = useLocation();
  const params = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center space-y-4">
      <h1 className="text-3xl font-bold">{title || 'Coming Soon'}</h1>
      <p className="text-muted-foreground text-lg">
        The page{' '}
        <code className="bg-muted px-2 py-1 rounded">{location.pathname}</code>{' '}
        is under construction.
      </p>
      {Object.keys(params).length > 0 && (
        <div className="text-sm text-left bg-muted p-4 rounded-md">
          <p className="font-semibold mb-2">Route Params:</p>
          <pre>{JSON.stringify(params, null, 2)}</pre>
        </div>
      )}
      <Button asChild variant="outline">
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>
    </div>
  );
}
