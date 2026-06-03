import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SkillBar from '@/components/ui/SkillBar';
import { skills } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Emmanuel Adegbayi — AI Developer, automation expert, and freelancer.',
};

const timeline = [
  {
    date: '2026',
    title: 'AI Developer & Freelancer',
    description: 'Building AI-powered tools, automation systems, and web applications for clients worldwide on Upwork and Fiverr.',
  },
  {
    date: '2025',
    title: 'Started Freelancing',
    description: 'Began offering web development and automation services, focusing on solving real business problems with technology.',
  },
  {
    date: '2024',
    title: 'Discovered AI Development',
    description: 'Started exploring AI tools, workflows, and agents. Built first automation projects and fell in love with the space.',
  },
  {
    date: '2023',
    title: 'Learned to Code',
    description: 'Began the coding journey with JavaScript, Python, and web development fundamentals. Built first projects and never looked back.',
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <span className="section-label">ABOUT ME</span>
          <h1>Emmanuel Adegbayi</h1>
          <p>AI Developer · Automation Expert · Workflow Builder</p>
          <div className="accent-line"></div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            {/* Photo */}
            <AnimatedSection direction="left">
              <div className="about-photo">
                <Image
                  src="/images/profile.png"
                  alt="Emmanuel Adegbayi"
                  width={400}
                  height={500}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            </AnimatedSection>

            {/* Bio */}
            <div>
              <AnimatedSection>
                <h2 style={{ marginBottom: 'var(--space-lg)' }}>
                  Building the future, one automation at a time.
                </h2>
                <p style={{ marginBottom: 'var(--space-md)' }}>
                  Hey! I&apos;m Emmanuel, but you can call me Adriel. I&apos;m an AI Developer
                  based in GMT+1, passionate about creating intelligent systems that save time
                  and solve real problems.
                </p>
                <p style={{ marginBottom: 'var(--space-md)' }}>
                  I specialize in website design, automation, and workflow optimization. Whether
                  it&apos;s building a sleek web application, automating repetitive business tasks,
                  or designing efficient processes — I love turning complex problems into elegant solutions.
                </p>
                <p style={{ marginBottom: 'var(--space-md)' }}>
                  When I&apos;m not coding, you&apos;ll find me learning Spanish and German,
                  experimenting with new AI tools, or working on my own projects like the
                  Lead Generation Agent.
                </p>
                <p>
                  I&apos;m currently available for freelance projects on{' '}
                  <a href="https://upwork.com" target="_blank" rel="noopener noreferrer">Upwork</a>{' '}
                  and{' '}
                  <a href="https://fiverr.com" target="_blank" rel="noopener noreferrer">Fiverr</a>.
                  If you have a project in mind, I&apos;d love to hear about it.
                </p>
              </AnimatedSection>

              {/* Skills */}
              <AnimatedSection delay={0.2}>
                <div className="skills-section">
                  <h3 style={{ marginBottom: 'var(--space-xl)' }}>Skills & Technologies</h3>
                  {skills.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      percent={skill.percent}
                      delay={index * 0.1}
                    />
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Timeline */}
          <AnimatedSection delay={0.3}>
            <div style={{ marginTop: 'var(--space-4xl)' }}>
              <h2 className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
                My Journey
              </h2>
              <div className="timeline" style={{ maxWidth: '600px', margin: '0 auto' }}>
                {timeline.map((item) => (
                  <div key={item.date} className="timeline-item">
                    <span className="timeline-date">{item.date}</span>
                    <h4 className="timeline-title">{item.title}</h4>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection delay={0.4}>
            <div className="text-center" style={{ marginTop: 'var(--space-4xl)' }}>
              <p style={{ marginBottom: 'var(--space-lg)' }}>
                Want to work together or just say hi?
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center' }}>
                <Link href="/contact" className="btn btn-primary">Get In Touch</Link>
                <Link href="/resume" className="btn btn-outline">View Resume</Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
