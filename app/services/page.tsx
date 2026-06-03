import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { services, processSteps } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Website design, automation, and workflow optimization services by Emmanuel Adegbayi.',
};

export default function ServicesPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <span className="section-label">SERVICES</span>
          <h1>What I Offer</h1>
          <p>
            I help businesses and individuals save time and grow with modern web
            solutions, intelligent automation, and optimized workflows.
          </p>
          <div className="accent-line"></div>
        </div>
      </div>

      {/* Detailed Services */}
      <section className="section">
        <div className="container">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.15}>
              <div className="service-detail" style={{
                display: 'grid',
                gridTemplateColumns: index % 2 === 0 ? '1fr 1.5fr' : '1.5fr 1fr',
                gap: 'var(--space-3xl)',
                alignItems: 'center',
                marginBottom: 'var(--space-4xl)',
              }}>
                <div style={{ order: index % 2 === 0 ? 0 : 1 }}>
                  <div className="service-icon" style={{ textAlign: 'left' }}>{service.icon}</div>
                  <h2 style={{ marginBottom: 'var(--space-md)' }}>{service.title}</h2>
                  <p style={{ marginBottom: 'var(--space-lg)' }}>{service.description}</p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {service.details.map((detail) => (
                      <li key={detail} style={{
                        color: 'var(--color-text-muted)',
                        padding: 'var(--space-sm) 0',
                        borderBottom: '1px solid var(--color-border)',
                        fontSize: '0.9375rem',
                      }}>
                        <span style={{ color: 'var(--color-amber)', marginRight: 'var(--space-sm)' }}>✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{
                  order: index % 2 === 0 ? 1 : 0,
                  background: 'var(--color-bg-card)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  aspectRatio: '4/3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                }}>
                  {service.icon}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section" style={{ background: 'var(--color-bg-card)' }}>
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-label">PROCESS</span>
              <h2>How I Work</h2>
              <p>A proven process that delivers results, every time.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="process-timeline">
              {processSteps.map((step) => (
                <div key={step.number} className="process-step">
                  <div className="process-step-circle">{step.number}</div>
                  <span className="process-step-label">{step.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <AnimatedSection>
            <h2 style={{ marginBottom: 'var(--space-md)' }}>Let&apos;s Work Together</h2>
            <p style={{ marginBottom: 'var(--space-xl)', maxWidth: '500px', margin: '0 auto var(--space-xl)' }}>
              Have a project in mind? I&apos;d love to hear about it.
              Let&apos;s build something great together.
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
