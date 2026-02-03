import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, FileText, Share2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Users,
    title: 'Project-Based Collaboration',
    description:
      'Create projects, invite teammates, and manage contributions in one place.',
  },
  {
    icon: FileText,
    title: 'Structured Testimonials',
    description:
      'Answer guided questions to capture meaningful, detailed feedback.',
  },
  {
    icon: Share2,
    title: 'Shareable Portfolios',
    description:
      'Generate beautiful contribution summaries to share externally.',
  },
];

const stats = [
  { value: '10,000+', label: 'Testimonials written' },
  { value: '500+', label: 'Teams using' },
  { value: '98%', label: 'Satisfaction rate' },
];

const pageLinks = [
  {
    href: '/login',
    label: 'Login / Sign-up',
    description: 'Social login entry point',
  },
  {
    href: '/settings',
    label: 'Profile Settings',
    description: 'Profile and account settings',
  },
  {
    href: '/projects',
    label: 'Dashboard',
    description: 'Projects & contribution summary',
  },
  {
    href: '/projects/new',
    label: 'Create Project',
    description: 'New project form',
  },
  {
    href: '/projects/1',
    label: 'Project Detail',
    description: 'Project management hub',
  },
  {
    href: '/projects/1/edit',
    label: 'Edit Project',
    description: 'Edit project details',
  },
  {
    href: '/testimonials/new',
    label: 'Write Testimonial',
    description: 'Core testimonial creation',
  },
  {
    href: '/share/sarah-chen',
    label: 'Public Share Page',
    description: 'External sharing page',
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="font-semibold text-lg text-foreground">
              Contriboard
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link to="/login">Sign in</Link>
              </Button>
              <Button asChild>
                <Link to="/login">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-6">
                Now in Public Beta
              </Badge>
              <h1 className="text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
                Turn team contributions into lasting recognition
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                Record, summarize, and visualize individual contributions in
                project-based collaboration through structured testimonials.
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg" asChild>
                  <Link to="/login">
                    Start for free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/share/sarah-chen">See Example</Link>
                </Button>
              </div>
            </div>

            {/* Stats card */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-xl border border-border bg-card text-center"
                >
                  <p className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Everything you need to recognize contributions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple yet powerful workflow: Write, Accumulate, Summarize, and
              Share.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl border border-border bg-background"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            How it works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Create a Project',
                description:
                  'Set up your project with basic details and invite your team.',
              },
              {
                step: '2',
                title: 'Write Testimonials',
                description:
                  "Answer structured questions about your teammates' contributions.",
              },
              {
                step: '3',
                title: 'View Summaries',
                description:
                  'See aggregated contributions with keywords and patterns.',
              },
              {
                step: '4',
                title: 'Share Externally',
                description:
                  'Generate beautiful shareable pages for portfolios.',
              },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border -translate-x-1/2" />
                )}
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
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
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6 bg-card border-y border-border">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-warning text-warning" />
            ))}
          </div>
          <blockquote className="text-2xl text-foreground mb-6 leading-relaxed">
            &ldquo;Contriboard transformed how we recognize contributions in our
            team. The structured testimonials capture details that would
            otherwise be lost.&rdquo;
          </blockquote>
          <div>
            <p className="font-semibold text-foreground">Emily Park</p>
            <p className="text-muted-foreground">Product Manager, TechCorp</p>
          </div>
        </div>
      </section>

      {/* Demo Pages Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Demo
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Explore All Pages
            </h2>
            <p className="text-muted-foreground">
              Click any page below to explore the complete UI
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pageLinks.map((page) => (
              <Link
                key={page.href}
                to={page.href}
                className="p-4 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-sm transition-all group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                    {page.label}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to start recognizing contributions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join teams already using Contriboard to capture and share their
            work.
          </p>
          <Button size="lg" asChild>
            <Link to="/login">
              Get Started for Free
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-semibold text-foreground">Contriboard</div>
            <p className="text-sm text-muted-foreground">
              Turn team contributions into lasting recognition
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link to="#" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link to="#" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link to="#" className="hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
