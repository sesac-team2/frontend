import { ShareNetworkIcon } from "@phosphor-icons/react";

export default function LoginIntro(){
    return (
        <>
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
               {/*  <LogoMark /> */}
              </div>
              <div className="text-xl font-semibold text-slate-900">
                ContributeHub
              </div>
            </div>

            {/* Headline */}
            <h1 className="mt-10 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              Turn Team <br />
              Contributions Into <br />
              <span className="text-emerald-600">Visible Impact</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              Record, summarize, and visualize individual contributions in
              project-based collaboration through structured testimonials.
              Create shareable contribution summaries that showcase real impact.
            </p>

            {/* Feature bullets */}
            <div className="mt-10 space-y-6">
              {/* <FeatureRow
                //icon={<PeopleIcon />}
                title="Structured Testimonials"
                desc="Write meaningful testimonials about team members through guided questions"
              />
              <FeatureRow
                //icon={<ChartIcon />}
                title="Visual Summaries"
                desc="Generate beautiful visualizations of contributions and behavioral patterns"
              /> */}
              <FeatureRow
                icon={<ShareNetworkIcon size={24} />}
                title="Shareable Pages"
                desc="Create public contribution pages to showcase your impact externally"
              />
            </div>  
        </>
    );
}


function FeatureRow({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
        {icon}
      </div>
      <div>
        <div className="text-sm font-bold text-slate-900">{title}</div>
        <div className="mt-1 text-sm leading-6 text-slate-600">{desc}</div>
      </div>
    </div>
  );
}
        
    