'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { navLinks } from '@/lib/constants';

const navVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

const linkVariants = {
  hidden: { y: -10, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.3 + i * 0.08, duration: 0.3, ease: 'easeOut' as const },
  }),
};

const mobileMenuVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'spring' as const, damping: 25, stiffness: 200 },
  },
  exit: {
    x: '100%',
    transition: { type: 'spring' as const, damping: 30, stiffness: 300 },
  },
};

const mobileLinkVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: 0.1 + i * 0.07, duration: 0.3, ease: 'easeOut' as const },
  }),
  exit: { x: 50, opacity: 0, transition: { duration: 0.15 } },
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <motion.nav
      className={`navbar${scrolled ? ' scrolled' : ''}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar-inner">
        {/* Logo */}
        <Link href="/" className="navbar-logo" onClick={closeMobile}>
          E.A
        </Link>

        {/* Desktop Links */}
        <div className="navbar-links">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              custom={i}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                href={link.href}
                className={`navbar-link${pathname === link.href ? ' active' : ''}`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          <motion.div
            custom={navLinks.length}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
          >
            <Link href="/contact" className="navbar-cta">
              Hire Me
            </Link>
          </motion.div>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger${mobileOpen ? ' open' : ''}`}
          onClick={toggleMobile}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                custom={i}
                variants={mobileLinkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Link
                  href={link.href}
                  className={pathname === link.href ? 'active' : ''}
                  onClick={closeMobile}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              custom={navLinks.length}
              variants={mobileLinkVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Link
                href="/contact"
                className="navbar-cta"
                onClick={closeMobile}
              >
                Hire Me
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
