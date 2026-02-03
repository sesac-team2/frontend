import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
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
import { ArrowLeft, Camera, Check, LogOut, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const roles = [
  {
    id: 'developer',
    label: 'Developer',
    description: 'Building software and systems',
  },
  {
    id: 'designer',
    label: 'Designer',
    description: 'Creating visual and UX designs',
  },
  { id: 'pm', label: 'PM', description: 'Managing product strategy' },
  { id: 'other', label: 'Others', description: 'Custom role' },
];

const socialConnections = [
  {
    id: 'google',
    name: 'Google',
    connected: true,
    email: 'john.doe@gmail.com',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
    ),
  },
  {
    id: 'kakao',
    name: 'Kakao',
    connected: false,
    email: null,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#3C1E1E">
        <path d="M12 3C6.48 3 2 6.58 2 11c0 2.85 1.89 5.35 4.72 6.76-.15.53-.97 3.43-.99 3.64 0 0-.02.16.08.22.1.06.22.01.22.01.29-.04 3.37-2.2 3.9-2.57.68.1 1.38.15 2.07.15 5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
      </svg>
    ),
  },
  {
    id: 'github',
    name: 'GitHub',
    connected: true,
    email: 'johndoe',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function SettingsPage() {
  const [name, setName] = useState('John Doe');
  const [selectedRole, setSelectedRole] = useState('developer');
  const [customRole, setCustomRole] = useState('');
  const [bio, setBio] = useState(
    'Full-stack developer passionate about building great user experiences',
  );
  const [hasChanges, setHasChanges] = useState(false);

  const handleChange = <T,>(setter: (value: T) => void, value: T) => {
    setter(value);
    setHasChanges(true);
  };

  const handleSave = () => {
    setHasChanges(false);
    // Save logic here
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 z-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link
                to="/projects"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="font-semibold text-lg text-foreground">
                Profile Settings
              </h1>
            </div>

            <Button
              onClick={handleSave}
              disabled={!hasChanges}
              className="gap-2"
            >
              <Check className="w-4 h-4" />
              Save Changes
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-3xl mx-auto px-6 py-8">
        <div className="space-y-10">
          {/* Profile Image Section */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Profile Image
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                This will be displayed on your testimonials and contributions
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="relative">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                    JD
                  </AvatarFallback>
                </Avatar>
                <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-card border border-border shadow-sm flex items-center justify-center hover:bg-muted transition-colors">
                  <Camera className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
              <div className="space-y-2">
                <Button variant="outline" size="sm">
                  Upload Image
                </Button>
                <p className="text-xs text-muted-foreground">
                  JPG, PNG or GIF. Max 2MB.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Name Section */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Name</h2>
              <p className="text-sm text-muted-foreground mt-1">
                How your teammates will see you in project testimonials
              </p>
            </div>

            <Input
              value={name}
              onChange={(e) => handleChange(setName, e.target.value)}
              placeholder="Enter your full name"
              className="max-w-md h-11"
            />
          </section>

          <Separator />

          {/* Role Section */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Role</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Your primary function in projects
              </p>
            </div>

            <RadioGroup
              value={selectedRole}
              onValueChange={(value) => handleChange(setSelectedRole, value)}
              className="grid grid-cols-2 md:grid-cols-4 gap-3"
            >
              {roles.map((role) => (
                <Label
                  key={role.id}
                  htmlFor={role.id}
                  className={`
                    flex flex-col p-4 rounded-lg border cursor-pointer transition-all
                    ${
                      selectedRole === role.id
                        ? 'border-primary bg-primary/5 ring-1 ring-primary'
                        : 'border-border hover:border-muted-foreground/30'
                    }
                  `}
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value={role.id} id={role.id} />
                    <span className="font-medium text-foreground">
                      {role.label}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 ml-6">
                    {role.description}
                  </p>
                </Label>
              ))}
            </RadioGroup>

            {selectedRole === 'other' && (
              <div className="mt-4 pl-4 border-l-2 border-border">
                <Label htmlFor="customRole" className="text-sm font-medium">
                  Specify your role
                </Label>
                <Input
                  id="customRole"
                  placeholder="e.g., Data Scientist, Marketing Lead"
                  value={customRole}
                  onChange={(e) => handleChange(setCustomRole, e.target.value)}
                  className="mt-2 max-w-sm"
                />
              </div>
            )}
          </section>

          <Separator />

          {/* Bio Section */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                One Line Introduction
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                A brief description that appears on your public profile
              </p>
            </div>

            <div className="space-y-2">
              <Textarea
                value={bio}
                onChange={(e) => handleChange(setBio, e.target.value)}
                placeholder="Tell others a bit about yourself..."
                className="max-w-xl resize-none"
                rows={2}
                maxLength={120}
              />
              <p className="text-xs text-muted-foreground text-right max-w-xl">
                {bio.length}/120 characters
              </p>
            </div>
          </section>

          <Separator />

          {/* Social Connections Section */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Connected Accounts
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Manage your social login connections
              </p>
            </div>

            <div className="space-y-3 max-w-xl">
              {socialConnections.map((connection) => (
                <div
                  key={connection.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-border bg-card"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      {connection.icon}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {connection.name}
                      </p>
                      {connection.connected ? (
                        <p className="text-sm text-muted-foreground">
                          {connection.email}
                        </p>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          Not connected
                        </p>
                      )}
                    </div>
                  </div>

                  {connection.connected ? (
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-success font-medium flex items-center gap-1.5">
                        <Check className="w-4 h-4" />
                        Connected
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground"
                      >
                        Disconnect
                      </Button>
                    </div>
                  ) : (
                    <Button variant="outline" size="sm">
                      Connect
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </section>

          <Separator />

          {/* Account Actions */}
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
                        This action cannot be undone. This will permanently
                        delete your account and remove all your data including
                        testimonials you have written and received.
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
        </div>
      </main>
    </div>
  );
}
