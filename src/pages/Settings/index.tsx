import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

import ProfileImageSection from './components/ProfileImageSection';
import NameSection from './components/NameSection';
import RoleSection from './components/RoleSection';
import BioSection from './components/BioSection';
import SocialConnectionsSection from './components/SocialConnectionsSection';
import AccountActionsSection from './components/AccountActionsSection';

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
          <ProfileImageSection />

          <Separator />

          <NameSection
            name={name}
            onChange={(value) => handleChange(setName, value)}
          />

          <Separator />

          <RoleSection
            selectedRole={selectedRole}
            onRoleChange={(value) => handleChange(setSelectedRole, value)}
            customRole={customRole}
            onCustomRoleChange={(value) => handleChange(setCustomRole, value)}
          />

          <Separator />

          <BioSection
            bio={bio}
            onChange={(value) => handleChange(setBio, value)}
          />

          <Separator />

          <SocialConnectionsSection />

          <Separator />

          <AccountActionsSection />
        </div>
      </main>
    </div>
  );
}
