import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import BlogCard from '@/components/ui/BlogCard';

const latestPosts = [
  {
    title: 'Getting Started with Next.js 15',
    description:
      'A beginner-friendly guide to building modern web applications with Next.js 15 and the App Router.',
    date: '2026-06-01',
    readingTime: '6 min',
    tags: ['Next.js', 'React', 'Web Development'],
    slug: 'getting-started-nextjs-15',
  },
  {
    title: 'Why Every Freelancer Needs Automation',
    description:
      'How automation transformed my freelance workflow and why you should start automating today.',
    date: '2026-05-25',
    readingTime: '4 min',
    tags: ['Automation', 'Freelancing', 'Productivity'],
    slug: 'why-freelancers-need-automation',
  },
  {
    title: 'How I Built an AI Lead Generation Agent',
    description:
      'A walkthrough of building an intelligent lead generation system that automates the most tedious part of freelancing.',
    date: '2026-05-20',
    readingTime: '5 min',
    tags: ['AI', 'Automation', 'Python'],
    slug: 'building-lead-gen-agent',
  },
];

export default function BlogPreview() {
  return (
    <section className="section">
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <span className="section-label">BLOG</span>
            <h2>Latest Articles</h2>
            <div className="accent-line" />
          </div>
        </AnimatedSection>

        <div className="blog-grid">
          {latestPosts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 0.1}>
              <BlogCard
                title={post.title}
                description={post.description}
                date={post.date}
                readingTime={post.readingTime}
                tags={post.tags}
                slug={post.slug}
                index={index}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link href="/blog" className="btn btn-ghost">
              Read All Articles →
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
