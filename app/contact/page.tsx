'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SocialIcon from '@/components/ui/SocialIcon';
import { socialLinks } from '@/lib/constants';

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      // Replace with your Formspree or Web3Forms endpoint
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <>
      <div className="page-header">
        <div className="container">
          <span className="section-label">CONTACT</span>
          <h1>Get In Touch</h1>
          <p>
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </p>
          <div className="accent-line"></div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <AnimatedSection>
              {formState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    background: 'var(--color-bg-card)',
                    border: '1px solid var(--color-success)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-3xl)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: 'var(--space-lg)' }}>✅</div>
                  <h3 style={{ marginBottom: 'var(--space-md)' }}>Message Sent!</h3>
                  <p>
                    Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    className="btn btn-outline mt-xl"
                    onClick={() => setFormState('idle')}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      className="form-select"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject...</option>
                      <option value="freelance">Freelance Project</option>
                      <option value="fulltime">Full-Time Opportunity</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {formState === 'error' && (
                    <p style={{ color: 'var(--color-error)', marginBottom: 'var(--space-md)', fontSize: '0.875rem' }}>
                      Something went wrong. Please try again or email me directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={formState === 'submitting'}
                    style={{ width: '100%' }}
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2}>
              <div style={{
                background: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-2xl)',
                height: 'fit-content',
              }}>
                <h3 style={{ marginBottom: 'var(--space-lg)' }}>Let&apos;s Connect</h3>

                <div style={{ marginBottom: 'var(--space-xl)' }}>
                  <p style={{ fontSize: '0.875rem', marginBottom: 'var(--space-sm)' }}>
                    <span style={{ color: 'var(--color-amber)' }}>📍</span> GMT+1 Timezone
                  </p>
                  <p style={{ fontSize: '0.875rem', marginBottom: 'var(--space-sm)' }}>
                    <span style={{ color: 'var(--color-amber)' }}>⏱️</span> Typical response: &lt; 24 hours
                  </p>
                  <p style={{ fontSize: '0.875rem' }}>
                    <span style={{ color: 'var(--color-amber)' }}>💼</span> Available for freelance
                  </p>
                </div>

                <h4 style={{ marginBottom: 'var(--space-md)', fontSize: '0.9375rem' }}>Find me on</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-md)',
                        padding: 'var(--space-sm) var(--space-md)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--color-text-muted)',
                        fontSize: '0.875rem',
                        transition: 'all 150ms ease',
                      }}
                    >
                      <SocialIcon icon={link.icon} size={18} />
                      {link.label}
                      <span style={{ color: 'var(--color-text-dim)', marginLeft: 'auto', fontSize: '0.75rem' }}>↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
