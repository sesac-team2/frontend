import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockParticipant } from '../data';

interface SuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SuccessModal({
  open,
  onOpenChange,
}: SuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-success" />
          </div>
        </div>
        <DialogHeader className="text-center">
          <DialogTitle className="text-center">
            Testimonial Submitted!
          </DialogTitle>
          <DialogDescription className="text-center">
            Your testimonial for {mockParticipant.name} has been saved. You can
            edit it within the next 24 hours.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 mt-4">
          <Button asChild>
            <Link to="/projects/1">Back to Project</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/contributions">View My Contributions</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
