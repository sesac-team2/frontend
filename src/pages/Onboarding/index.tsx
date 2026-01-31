import { useMemo, useState } from 'react';
import OnboardingCard from './components/OnboardingCard';
import OnboardingHeader from './components/OnboardingHeader';
import NameField from './components/NameField';
import RoleSelector from './components/RoleSelector';
import type { Role } from './components/RoleSelector';
import OtherRoleField from './components/OtherRoleField';
import OnboardingFooter from './components/OnboardingFooter';

export default function OnboardingPage() {
  const [name, setName] = useState('');
  const [role, setRole] = useState<Role | null>(null);
  const [customRole, setCustomRole] = useState('');

  const isValid = useMemo(() => {
    if (!name.trim()) return false;
    if (!role) return false;
    if (role === 'Other' && !customRole.trim()) return false;
    return true;
  }, [name, role, customRole]);

  const handleBack = () => {
    // TODO: 로그인 화면으로 돌아가기 or 이전 페이지
    window.history.back();
  };

  const handleContinue = async () => {
    if (!isValid) return;

    const payload = {
      name: name.trim(),
      job_role: role === 'Other' ? customRole.trim() : role,
    };

    // TODO: API 연결 (예: PATCH /users/me)
    console.log('submit payload:', payload);
    // 성공 후 라우팅 예: navigate("/projects")
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <OnboardingCard>
        <OnboardingHeader />

        <div className="mt-8 space-y-6">
          <NameField value={name} onChange={setName} />

          <div>
            <RoleSelector value={role} onChange={setRole} />
            <OtherRoleField
              visible={role === 'Other'}
              value={customRole}
              onChange={setCustomRole}
            />
          </div>
        </div>

        <OnboardingFooter
          onBack={handleBack}
          onContinue={handleContinue}
          continueDisabled={!isValid}
        />
      </OnboardingCard>
    </div>
  );
}
