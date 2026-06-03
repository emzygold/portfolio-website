import Link from 'next/link';
import { navLinks, socialLinks } from '@/lib/constants';
import SocialIcon from '@/components/ui/SocialIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Left: Logo + Copyright */}
        <div className="footer-left">
          <Link href="/" className="footer-logo">
            E.A
          </Link>
          <p className="footer-text">
            © {currentYear} Emmanuel Adegbayi. All rights reserved.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="footer-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="social-links">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={social.label}
          >
            <SocialIcon icon={social.icon} size={20} />
          </a>
        ))}
      </div>
    </footer>
  );
}
