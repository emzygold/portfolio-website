import type { Metadata } from 'next';
import { getAllContent, type ProjectFrontmatter } from '@/lib/mdx';
import ProjectsClient from '@/components/projects/ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of web design, automation, and workflow projects.',
};

export default function ProjectsPage() {
  const projects = getAllContent<ProjectFrontmatter>('projects');

  return (
    <>
      <div className="page-header">
        <div className="container">
          <span className="section-label">PORTFOLIO</span>
          <h1>My Work</h1>
          <p>
            A collection of projects showcasing my skills in website design,
            automation, and workflow optimization.
          </p>
          <div className="accent-line"></div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <ProjectsClient projects={projects} />
        </div>
      </section>
    </>
  );
}
