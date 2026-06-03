import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import SocialIcon from '@/components/ui/SocialIcon';
import { socialLinks } from '@/lib/constants';

export default function CTA() {
  return (
    <div className="cta-section">
      <div className="container">
        <AnimatedSection>
          <h2>Ready to build something great?</h2>
          <p>
            Whether you need a modern website, intelligent automation, or
            streamlined workflows — let&apos;s make it happen. I&apos;m always
            open to discussing new projects and ideas.
          </p>
          <Button variant="primary" href="/contact">
            Let&apos;s Talk
          </Button>
        </AnimatedSection>

        <div className="social-links">
          {socialLinks.map((link) => (
            <a
              key={link.icon}
              href={link.href}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <SocialIcon icon={link.icon} size={20} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
