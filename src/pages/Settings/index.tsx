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

import SettingsSkeleton from './components/SettingsSkeleton';

export default function SettingsPage() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [hasChanges, setHasChanges] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { user, updateUser, isLoading } = useAuth();

  useEffect(() => {
    if (user) {
      setName(user.fullName || '');
      setBio(user.bio || '');
      setProfileImageUrl(user.avatarUrl || '');
    }
  }, [user]);

  if (isLoading) {
    return <SettingsSkeleton />;
  }

  const handleChange = <T,>(setter: (value: T) => void, value: T) => {
    setter(value);
    setHasChanges(true);
  };

  const handleSave = async () => {
    try {
      let finalAvatarUrl = profileImageUrl;

      // 1. 새 이미지가 선택된 경우 업로드 진행
      if (selectedFile) {
        // (선택) 기존 이미지가 Supabase에 있다면 삭제
        if (
          user?.avatarUrl &&
          user.avatarUrl.includes('supabase') && // 간단한 체크
          user.avatarUrl.includes('profileImage')
        ) {
          const oldFilePath = user.avatarUrl.split('/').pop();
          if (oldFilePath) {
            await supabase.storage.from('profileImage').remove([oldFilePath]);
          }
        }

        const fileExt = selectedFile.name.split('.').pop();
        const fileName = `${user?.id}-${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('profileImage')
          .upload(filePath, selectedFile);

        if (uploadError) throw uploadError;

        const { data } = supabase.storage
          .from('profileImage')
          .getPublicUrl(filePath);

        if (data) {
          finalAvatarUrl = data.publicUrl;
        }
      }

      await updateUser({
        fullName: name,
        bio: bio,
        avatarUrl: finalAvatarUrl,
      });
      setHasChanges(false);
      setSelectedFile(null); // 초기화
    } catch (error) {
      console.error('Failed to update profile:', error);
      alert('프로필 업데이트에 실패했습니다.');
    }
  };

  const handleImageUpload = (file: File) => {
    // 파일을 즉시 업로드하지 않고, 상태에 저장하고 미리보기 URL만 생성
    setSelectedFile(file);
    const previewUrl = URL.createObjectURL(file);
    setProfileImageUrl(previewUrl);
    setHasChanges(true);
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
