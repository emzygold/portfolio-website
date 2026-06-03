import type { Metadata } from 'next';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import { getContentBySlug, getAllSlugs, type ProjectFrontmatter } from '@/lib/mdx';
import { mdxComponents } from '@/components/mdx/MDXComponents';
import Button from '@/components/ui/Button';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs('projects');
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { frontmatter } = getContentBySlug<ProjectFrontmatter>('projects', slug);
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const { frontmatter, content } = getContentBySlug<ProjectFrontmatter>('projects', slug);
  const allSlugs = getAllSlugs('projects');
  const currentIndex = allSlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  return (
    <>
      <div className="page-header">
        <div className="container">
          <span className="section-label">{frontmatter.category?.toUpperCase() || 'PROJECT'}</span>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.description}</p>
          <div className="card-tags" style={{ justifyContent: 'center', marginTop: 'var(--space-md)' }}>
            {frontmatter.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container-narrow">
          {frontmatter.image && (
            <div className="project-hero-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={frontmatter.image} alt={frontmatter.title} />
            </div>
          )}

          <div className="mdx-content">
            <MDXRemote
              source={content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  rehypePlugins: [rehypeHighlight],
                },
              }}
            />
          </div>

          <div className="project-links">
            {frontmatter.live && (
              <Button href={frontmatter.live} variant="primary">
                View Live ↗
              </Button>
            )}
            {frontmatter.github && (
              <Button href={frontmatter.github} variant="outline">
                GitHub ↗
              </Button>
            )}
          </div>

          <div className="project-nav">
            <div>
              {prevSlug && (
                <Link href={`/projects/${prevSlug}`} className="btn btn-ghost">
                  ← Previous Project
                </Link>
              )}
            </div>
            <div>
              {nextSlug && (
                <Link href={`/projects/${nextSlug}`} className="btn btn-ghost">
                  Next Project →
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
