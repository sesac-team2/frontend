import type { LandingStepItem } from '../models';

interface LandingHowItWorksProps {
  title: string;
  steps: LandingStepItem[];
}

export default function LandingHowItWorks({
  title,
  steps,
}: LandingHowItWorksProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
          {title}
        </h2>

        {/* 선을 한 번만 그리기 */}
        <div className="relative">
          <div className="hidden md:block absolute left-8 right-8 top-8 h-px bg-border" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((item) => (
              <div key={item.step} className="relative">
                {/* 원은 선 위에 올라오게 */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                  {item.step}
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
