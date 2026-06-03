import AnimatedSection from '@/components/ui/AnimatedSection';
import { services } from '@/lib/constants';

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <span className="section-label">SERVICES</span>
            <h2>What I Do</h2>
            <div className="accent-line" />
          </div>
        </AnimatedSection>

        <div className="services-grid">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
