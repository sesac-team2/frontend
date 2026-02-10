import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

import ProfileImageSection from './components/ProfileImageSection';
import NameSection from './components/NameSection';
import BioSection from './components/BioSection';
import AccountActionsSection from './components/AccountActionsSection';

export default function SettingsPage() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [hasChanges, setHasChanges] = useState(false);

  const { user, updateUser } = useAuth();

  useEffect(() => {
    if (user) {
      setName(user.fullName);
      setBio(user.bio || '');
      setProfileImageUrl(user.avatarUrl || '');
      console.log(user);
    }
  }, [user]);

  const handleChange = <T,>(setter: (value: T) => void, value: T) => {
    setter(value);
    setHasChanges(true);
  };

  const handleSave = async () => {
    try {
      await updateUser({
        fullName: name,
        bio: bio,
        avatarUrl: profileImageUrl, // 이미지 URL도 함께 전송
      });
      setHasChanges(false);
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  const handleImageUpload = async (file: File) => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${user?.id}-${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('profileImage')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage
        .from('profileImage')
        .getPublicUrl(filePath);

      if (data) {
        setProfileImageUrl(data.publicUrl);
        setHasChanges(true); // 변경 사항 있음으로 표시
        console.log('Image uploaded successfully:', data.publicUrl);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('이미지 업로드에 실패했습니다.');
    }
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
                프로필 설정
              </h1>
            </div>

            <Button
              onClick={handleSave}
              disabled={!hasChanges}
              className="gap-2"
            >
              <Check className="w-4 h-4" />
              변경 사항 저장
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-3xl mx-auto px-6 py-8">
        <div className="space-y-10">
          <ProfileImageSection
            profileImageUrl={profileImageUrl}
            name={name}
            onImageUpload={handleImageUpload}
          />

          <Separator />

          <NameSection
            name={name}
            onChange={(value) => handleChange(setName, value)}
          />

          <Separator />

          <BioSection
            bio={bio}
            onChange={(value) => handleChange(setBio, value)}
          />

          <Separator />
          <AccountActionsSection />
        </div>
      </main>
    </div>
  );
}
