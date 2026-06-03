import type { Metadata } from 'next';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import { getContentBySlug, getAllSlugs, type BlogFrontmatter } from '@/lib/mdx';
import { mdxComponents } from '@/components/mdx/MDXComponents';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs('blog');
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { frontmatter } = getContentBySlug<BlogFrontmatter>('blog', slug);
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const { frontmatter, content } = getContentBySlug<BlogFrontmatter>('blog', slug);
  const allSlugs = getAllSlugs('blog');
  const currentIndex = allSlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  const formattedDate = new Date(frontmatter.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="blog-card-meta" style={{ justifyContent: 'center' }}>
            <span>{formattedDate}</span>
            <span>·</span>
            <span>{frontmatter.readingTime}</span>
          </div>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.description}</p>
          <div className="card-tags" style={{ justifyContent: 'center', marginTop: 'var(--space-md)' }}>
            {frontmatter.tags.map((tag) => (
              <span key={tag} className="tag tag-cyan">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container-narrow">
          <article className="mdx-content">
            <MDXRemote
              source={content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  rehypePlugins: [rehypeHighlight],
                },
              }}
            />
          </article>

          <div className="project-nav">
            <div>
              {prevSlug && (
                <Link href={`/blog/${prevSlug}`} className="btn btn-ghost">
                  ← Previous Post
                </Link>
              )}
            </div>
            <div>
              {nextSlug && (
                <Link href={`/blog/${nextSlug}`} className="btn btn-ghost">
                  Next Post →
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
