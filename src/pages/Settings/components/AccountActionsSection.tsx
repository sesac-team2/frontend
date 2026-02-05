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
import { LogOut, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AccountActionsSection() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-foreground">Account</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your account settings
        </p>
      </div>

      <div className="flex flex-col gap-4 max-w-xl">
        {/* Log out */}
        <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-card">
          <div>
            <p className="font-medium text-foreground">Log out</p>
            <p className="text-sm text-muted-foreground">
              Sign out of your account on this device
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/login" className="gap-2">
              <LogOut className="w-4 h-4" />
              Log out
            </Link>
          </Button>
        </div>

        {/* Delete account */}
        <div className="flex items-center justify-between p-4 rounded-lg border border-destructive/30 bg-destructive/5">
          <div>
            <p className="font-medium text-foreground">Delete account</p>
            <p className="text-sm text-muted-foreground">
              Permanently delete your account and all data
            </p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="gap-2">
                <Trash2 className="w-4 h-4" />
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove all your data including testimonials
                  you have written and received.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  Delete Account
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </section>
  );
}
