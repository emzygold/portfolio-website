import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { skills } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Resume and professional experience of Emmanuel Adegbayi — AI Developer.',
};

const experience = [
  {
    date: '2026 — Present',
    title: 'AI Developer & Freelancer',
    company: 'Self-Employed (Upwork)',
    description: 'Building AI-powered tools, automation systems, and web applications for clients worldwide. Specializing in intelligent agents, workflow optimization, and modern web development.',
  },
  {
    date: '2025 — 2026',
    title: 'Web Developer',
    company: 'Freelance',
    description: 'Developed responsive websites and web applications using React, Next.js, and Node.js. Built custom solutions for small businesses and startups.',
  },
  {
    date: '2024 — 2025',
    title: 'Junior Developer',
    company: 'Self-learning & Projects',
    description: 'Learned full-stack web development through self-study and personal projects. Built foundational skills in JavaScript, Python, and modern frameworks.',
  },
];

const skillCategories = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'HTML/CSS'],
  },
  {
    title: 'Frameworks',
    items: ['React', 'Next.js', 'Node.js', 'Express'],
  },
  {
    title: 'AI & Automation',
    items: ['AI Agents', 'Workflow Design', 'API Integration', 'Data Pipelines'],
  },
  {
    title: 'Tools',
    items: ['Git', 'VS Code', 'Vercel', 'Figma'],
  },
];

export default function ResumePage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <span className="section-label">RESUME</span>
          <h1>My Resume</h1>
          <p>Professional experience, skills, and qualifications.</p>
          <div className="accent-line"></div>
          <div style={{ marginTop: 'var(--space-xl)' }}>
            <Link href="/Emmanuel-Adegbayi-Resume.pdf" className="btn btn-primary" target="_blank">
              Download PDF ↓
            </Link>
          </div>
        </div>
      </div>

      {/* Experience */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
              Experience
            </h2>
          </AnimatedSection>

          <div className="timeline" style={{ maxWidth: '700px', margin: '0 auto' }}>
            {experience.map((item, index) => (
              <AnimatedSection key={item.date} delay={index * 0.15}>
                <div className="timeline-item">
                  <span className="timeline-date">{item.date}</span>
                  <h4 className="timeline-title">{item.title}</h4>
                  <p style={{ color: 'var(--color-cyan)', fontSize: '0.875rem', marginBottom: 'var(--space-xs)' }}>
                    {item.company}
                  </p>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="section" style={{ background: 'var(--color-bg-card)' }}>
        <div className="container">
          <AnimatedSection>
            <h2 className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
              Skills & Technologies
            </h2>
          </AnimatedSection>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: 'var(--space-xl)',
            maxWidth: '900px',
            margin: '0 auto',
          }}>
            {skillCategories.map((category, catIndex) => (
              <AnimatedSection key={category.title} delay={catIndex * 0.1}>
                <div style={{
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-xl)',
                }}>
                  <h3 style={{
                    fontSize: '1rem',
                    color: 'var(--color-amber)',
                    marginBottom: 'var(--space-lg)',
                  }}>
                    {category.title}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {category.items.map((item) => (
                      <li key={item} style={{
                        color: 'var(--color-text-muted)',
                        padding: 'var(--space-sm) 0',
                        fontSize: '0.9375rem',
                        borderBottom: '1px solid var(--color-border)',
                      }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Proficiency Bars */}
      <section className="section">
        <div className="container" style={{ maxWidth: '600px' }}>
          <AnimatedSection>
            <h2 className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
              Proficiency
            </h2>
          </AnimatedSection>
          {skills.map((skill, index) => (
            <AnimatedSection key={skill.name} delay={index * 0.1}>
              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.percent}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <AnimatedSection>
            <h2 style={{ marginBottom: 'var(--space-md)' }}>Interested in Working Together?</h2>
            <p style={{ marginBottom: 'var(--space-xl)', maxWidth: '500px', margin: '0 auto var(--space-xl)' }}>
              I&apos;m currently available for freelance projects and full-time opportunities.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get In Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
