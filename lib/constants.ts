export const siteConfig = {
  name: "Emmanuel Adegbayi",
  shortName: "E.A",
  title: "Emmanuel Adegbayi — AI Developer & Automation Expert",
  description:
    "AI Developer specializing in website design, automation, and workflow optimization. Building intelligent solutions that save time and solve real problems.",
  url: "https://techvisage.vercel.app",
  ogImage: "/images/og-image.png",
};

export const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/emzygold", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/emmanuel-Adegbayi", icon: "linkedin" },
  { label: "Twitter", href: "https://twitter.com/Adememman1", icon: "twitter" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/~01cc574be9d83b8e17", icon: "upwork" },
];

export const services = [
  {
    icon: "⚡",
    image: "/images/services/website-design.png",
    title: "Website Design",
    description:
      "Modern, responsive websites that convert visitors into clients. From landing pages to full web applications, built with the latest technologies.",
    details: [
      "Custom responsive designs",
      "Next.js & React applications",
      "SEO optimization",
      "Performance-first approach",
    ],
  },
  {
    icon: "🔄",
    image: "/images/services/automation.png",
    title: "Automation",
    description:
      "Streamline repetitive tasks with intelligent automation systems. Save hours every week by letting machines handle the boring stuff.",
    details: [
      "Workflow automation",
      "API integrations",
      "Data processing pipelines",
      "Scheduled tasks & triggers",
    ],
  },
  {
    icon: "🛠️",
    image: "/images/services/workflow.png",
    title: "Workflow",
    description:
      "Design and optimize workflows that save time and reduce errors. Build efficient processes that scale with your business.",
    details: [
      "Process analysis & design",
      "Tool integration",
      "Team workflow optimization",
      "Documentation & SOPs",
    ],
  },
  {
    icon: "📋",
    image: "/images/services/project-management.png",
    title: "Project Management",
    description:
      "Keep your projects organized and on track with structured planning, task tracking, and team coordination using tools like Trello.",
    details: [
      "Trello board setup & optimization",
      "Task tracking & prioritization",
      "Sprint planning & milestones",
      "Team coordination & reporting",
    ],
  },
];

export const stats = [
  { value: 7, suffix: "+", label: "Projects Completed", color: "amber" },
  { value: 100, suffix: "%", label: "Client Satisfaction", color: "cyan" },
  { value: 24, suffix: "h", label: "Response Time", prefix: "<", color: "amber" },
];

export const testimonials = [
  {
    quote:
      "Nice working with Emmanuel — he's quick and time conscious. I'll really recommend him to anyone.",
    name: "Sydney Wise",
    role: "Client — Shopify Quote Calculator",
  },
];

export const skills = [
  { name: "JavaScript / TypeScript", percent: 90 },
  { name: "React / Next.js", percent: 85 },
  { name: "Python", percent: 80 },
  { name: "AI / Machine Learning", percent: 75 },
  { name: "Automation & Workflows", percent: 90 },
  { name: "Node.js", percent: 80 },
];

export const processSteps = [
  { number: "01", label: "Discovery" },
  { number: "02", label: "Design" },
  { number: "03", label: "Build" },
  { number: "04", label: "Deploy" },
  { number: "05", label: "Support" },
];
