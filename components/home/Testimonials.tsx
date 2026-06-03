'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/lib/constants';

const slideVariants = {
  enter: {
    x: 60,
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -60,
    opacity: 0,
  },
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">TESTIMONIALS</span>
          <h2>What Clients Say</h2>
          <div className="accent-line" />
        </div>

        <div className="testimonials-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="testimonial-card"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <div className="testimonial-quote">
                {testimonials[activeIndex].quote}
              </div>
              <div className="testimonial-author">
                <div>
                  <span className="testimonial-author-name">
                    {testimonials[activeIndex].name}
                  </span>
                  <br />
                  <span className="testimonial-author-role">
                    {testimonials[activeIndex].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonial-nav">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonial-dot${index === activeIndex ? ' active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
