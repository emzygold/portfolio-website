import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface ProjectFrontmatter {
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  featured: boolean;
  category: string;
  github?: string;
  live?: string;
}

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  featured: boolean;
}

export interface ContentItem<T> {
  slug: string;
  frontmatter: T;
  content: string;
}

function getContentDir(type: "projects" | "blog"): string {
  return path.join(contentDirectory, type);
}

export function getContentBySlug<T>(
  type: "projects" | "blog",
  slug: string
): ContentItem<T> {
  const filePath = path.join(getContentDir(type), `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data as T,
    content,
  };
}

export function getAllContent<T>(type: "projects" | "blog"): ContentItem<T>[] {
  const dir = getContentDir(type);

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));

  const items = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    return getContentBySlug<T>(type, slug);
  });

  // Sort by date descending
  return items.sort((a, b) => {
    const dateA = new Date((a.frontmatter as Record<string, string>).date);
    const dateB = new Date((b.frontmatter as Record<string, string>).date);
    return dateB.getTime() - dateA.getTime();
  });
}

export function getFeaturedProjects(): ContentItem<ProjectFrontmatter>[] {
  const allProjects = getAllContent<ProjectFrontmatter>("projects");
  return allProjects.filter((p) => p.frontmatter.featured);
}

export function getLatestPosts(
  count: number
): ContentItem<BlogFrontmatter>[] {
  const allPosts = getAllContent<BlogFrontmatter>("blog");
  return allPosts.slice(0, count);
}

export function getAllSlugs(type: "projects" | "blog"): string[] {
  const dir = getContentDir(type);

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}
