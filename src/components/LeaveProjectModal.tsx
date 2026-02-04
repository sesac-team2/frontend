
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LeaveProjectModalProps {
  projectName: string;
}

export default function LeaveProjectModal({
  projectName,
}: LeaveProjectModalProps) {
  const [isLeaving, setIsLeaving] = useState(false);
  const navigate = useNavigate();

  const handleLeave = () => {
    setIsLeaving(true);
    // Simulate leave action
    setTimeout(() => {
      setIsLeaving(false);
      navigate('/projects');
    }, 500);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="gap-2 bg-transparent text-muted-foreground hover:text-destructive hover:border-destructive"
        >
          <LogOut className="w-4 h-4" />
          Leave
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Leave Project</AlertDialogTitle>
          <AlertDialogDescription className="space-y-2">
            <span className="block">
              Are you sure you want to leave{' '}
              <span className="font-medium text-foreground">{projectName}</span>
              ?
            </span>
            <span className="block">
              You will lose access to this project and all your testimonials
              will remain visible to other participants.
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleLeave}
            disabled={isLeaving}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {isLeaving ? 'Leaving...' : 'Leave Project'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
