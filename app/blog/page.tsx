import type { Metadata } from 'next';
import { getAllContent, type BlogFrontmatter } from '@/lib/mdx';
import AnimatedSection from '@/components/ui/AnimatedSection';
import BlogCard from '@/components/ui/BlogCard';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles about AI development, automation, web design, and the freelance journey.',
};

export default function BlogPage() {
  const posts = getAllContent<BlogFrontmatter>('blog');

  return (
    <>
      <div className="page-header">
        <div className="container">
          <span className="section-label">BLOG</span>
          <h1>Blog</h1>
          <p>
            Thoughts on AI, automation, web development, and the freelance journey.
          </p>
          <div className="accent-line"></div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post, index) => (
              <AnimatedSection key={post.slug} delay={index * 0.1}>
                <BlogCard
                  title={post.frontmatter.title}
                  description={post.frontmatter.description}
                  date={post.frontmatter.date}
                  readingTime={post.frontmatter.readingTime}
                  tags={post.frontmatter.tags}
                  slug={post.slug}
                  index={index}
                />
              </AnimatedSection>
            ))}
          </div>

          {posts.length === 0 && (
            <p className="text-center mt-xl" style={{ color: 'var(--color-text-dim)' }}>
              No blog posts yet. Check back soon!
            </p>
          )}
        </div>
      </section>
    </>
  );
}
