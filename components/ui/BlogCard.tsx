'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  slug: string;
  index?: number;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogCard({
  title,
  description,
  date,
  readingTime,
  tags,
  slug,
  index = 0,
}: BlogCardProps) {
  return (
    <motion.article
      className="blog-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
    >
      <div className="blog-card-meta">
        <time dateTime={date}>{formatDate(date)}</time>
        <span>·</span>
        <span>{readingTime}</span>
      </div>
      <h3>
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h3>
      <p>{description}</p>
      <div className="card-tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <Link href={`/blog/${slug}`} className="read-more">
        Read more →
      </Link>
    </motion.article>
  );
}
