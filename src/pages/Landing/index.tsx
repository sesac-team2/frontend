import LandingHeader from './components/LandingHeader';
import LandingHero from './components/LandingHero';
import LandingFeatures from './components/LandingFeatures';
import LandingHowItWorks from './components/LandingHowItWorks';
import LandingTestimonial from './components/LandingTestimonial';
import LandingDemoPages from './components/LandingDemoPages';
import LandingCta from './components/LandingCta';
import LandingFooter from './components/LandingFooter';

import {
  landingFeatures,
  landingSteps,
  landingPageLinks,
  landingTestimonial,
} from './data';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingHeader brandName="Proov" loginHref="/login" />

      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <LandingHero
                badgeText="퍼블릭 베타 진행 중"
                title="팀의 기여를 가치 있는 기록으로"
                description="프로젝트 협업 과정에서 개인의 기여를 기록하고, 정리하고, 한눈에 확인하세요."
                primaryCtaHref="/login"
                primaryCtaLabel="무료로 시작하기"
                secondaryCtaHref="/share/sarah-chen"
                secondaryCtaLabel="예시 보기"
              />
            </div>
          </div>
        </div>
      </section>

      <LandingFeatures
        title="기여 기록에 필요한 모든 기능"
        subtitle="작성 → 누적 → 요약 → 공유, 간단하지만 강력한 워크플로우"
        features={landingFeatures}
      />

      <LandingHowItWorks title="이렇게 사용해요" steps={landingSteps} />

      <LandingTestimonial data={landingTestimonial} />

      <LandingDemoPages
        badgeText="데모"
        title="전체 화면 둘러보기"
        subtitle="아래 페이지를 눌러 실제 UI를 확인해보세요"
        pages={landingPageLinks}
      />

      <LandingCta
        title="이제 기여 기록을 시작해볼까요?"
        description="이미 Proov를 사용하는 팀들과 함께 당신의 경험을 남겨보세요."
        ctaHref="/login"
        ctaLabel="무료로 시작하기"
      />

      <LandingFooter
        brandName="Proov"
        tagline="팀의 기여를 가치 있는 기록으로"
        links={[
          { href: '#', label: '개인정보 처리방침' },
          { href: '#', label: '이용약관' },
          { href: '#', label: '문의하기' },
        ]}
      />
    </div>
  );
}
