'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { getAllContent, type ProjectFrontmatter, type ContentItem } from '@/lib/mdx';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ProjectCard from '@/components/ui/ProjectCard';

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Website Design', value: 'web-design' },
  { label: 'Automation', value: 'automation' },
  { label: 'Workflow', value: 'workflow' },
];

interface ProjectsClientProps {
  projects: ContentItem<ProjectFrontmatter>[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? projects
    : projects.filter((p) => p.frontmatter.category === filter);

  return (
    <>
      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={`filter-btn ${filter === cat.value ? 'active' : ''}`}
            onClick={() => setFilter(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div
        className="projects-grid"
        layout
      >
        {filtered.map((project, index) => (
          <AnimatedSection key={project.slug} delay={index * 0.1}>
            <ProjectCard
              title={project.frontmatter.title}
              description={project.frontmatter.description}
              image={project.frontmatter.image}
              tags={project.frontmatter.tags}
              slug={project.slug}
              index={index}
            />
          </AnimatedSection>
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center mt-xl" style={{ color: 'var(--color-text-dim)' }}>
          No projects found in this category yet.
        </p>
      )}
    </>
  );
}
