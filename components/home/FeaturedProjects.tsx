import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ProjectCard from '@/components/ui/ProjectCard';

const featuredProjects = [
  {
    title: 'AI Lead Generation Agent',
    description:
      'An intelligent agent that scans job boards, scores opportunities with AI, and delivers qualified leads automatically.',
    image: '/images/projects/lead-gen-agent.png',
    tags: ['Python', 'AI', 'Automation'],
    slug: 'lead-gen-agent',
    featured: true,
  },
  {
    title: 'Quote Calculator Website',
    description:
      'A dynamic quote calculator that helps clients get instant estimates for services, built with Next.js and modern UI.',
    image: '/images/projects/quote-calculator-1.png',
    tags: ['Next.js', 'React', 'TypeScript'],
    slug: 'quote-calculator',
    featured: true,
  },
  {
    title: 'Workflow Automation Suite',
    description:
      'End-to-end automation suite that streamlines client onboarding, invoicing, and project management for freelancers.',
    image: '/images/projects/workflow-automation.png',
    tags: ['Automation', 'Node.js', 'API'],
    slug: 'workflow-automation',
    featured: true,
  },
];

export default function FeaturedProjects() {
  return (
    <section className="section">
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <span className="section-label">FEATURED WORK</span>
            <h2>My Recent Projects</h2>
            <div className="accent-line" />
          </div>
        </AnimatedSection>

        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.slug} delay={index * 0.1}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                slug={project.slug}
                index={index}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link href="/projects" className="btn btn-ghost">
              View All Projects →
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
