'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import TypeWriter from '@/components/ui/TypeWriter';
import Button from '@/components/ui/Button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <div className="hero-inner container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero-subtitle" variants={itemVariants}>
            AI DEVELOPER &amp; AUTOMATION EXPERT
          </motion.span>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Hi, I&apos;m{' '}
              <span className="text-gradient">Emmanuel Adegbayi</span>
            <span className="hero-typing">
              <TypeWriter
                words={[
                  'Website Designer',
                  'Automation Expert',
                  'Workflow Builder',
                ]}
              />
            </span>
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            I build intelligent solutions that save time and solve real problems.
            From modern websites to AI-powered automation, I help businesses work
            smarter.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <Button variant="primary" href="/projects">
              View My Work
            </Button>
            <Button variant="outline" href="/contact">
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' as const }}
        >
          <div className="hero-image-wrapper">
            <Image
              src="/images/profile.png"
              alt="Emmanuel Adegbayi"
              width={380}
              height={380}
              priority
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
          <div className="hero-image-glow" />
        </motion.div>
      </div>
    </section>
  );
}
