import styles from './Projects.module.css';

interface Project {
  title: string;
  description: string;
  tags: string[];
  color: string;
  emoji: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with real-time inventory, Stripe payments, and an admin dashboard. Built with Next.js, Node.js, and PostgreSQL.',
    tags: ['Next.js', 'Node.js', 'Stripe', 'PostgreSQL'],
    color: '#6c63ff',
    emoji: '🛒',
    featured: true
  },
  {
    title: 'AI Chat Application',
    description:
      'Real-time chat app powered by GPT-4, featuring multi-room support, message history, and smart reply suggestions.',
    tags: ['React', 'Socket.io', 'OpenAI', 'MongoDB'],
    color: '#ff6584',
    emoji: '🤖',
    featured: true
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Data visualization platform with interactive charts, custom reports, and real-time metrics for business intelligence.',
    tags: ['Vue.js', 'D3.js', 'Python', 'Redis'],
    color: '#22c55e',
    emoji: '📊',
    featured: true
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative project management tool with drag-and-drop, team workspaces, and calendar integration.',
    tags: ['React', 'TypeScript', 'Firebase'],
    color: '#f59e0b',
    emoji: '✅',
    featured: false
  },
  {
    title: 'Social Media API',
    description:
      'RESTful API with GraphQL support, JWT authentication, rate limiting, and comprehensive documentation.',
    tags: ['Node.js', 'GraphQL', 'Docker', 'AWS'],
    color: '#06b6d4',
    emoji: '🔗',
    featured: false
  },
  {
    title: 'Design System',
    description:
      'Comprehensive component library with 50+ components, dark/light themes, and full accessibility support.',
    tags: ['React', 'Storybook', 'CSS', 'TypeScript'],
    color: '#8b5cf6',
    emoji: '🎨',
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>My Work</span>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>
            A selection of projects I&apos;ve built — from MVPs to production applications
          </p>
        </div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div
              key={project.title}
              className={`${styles.card} ${project.featured ? styles.featured : ''}`}
            >
              <div
                className={styles.cardTop}
                style={{ background: `${project.color}15`, borderColor: `${project.color}30` }}
              >
                <span className={styles.emoji}>{project.emoji}</span>
                {project.featured && (
                  <span className={styles.featuredBadge}>Featured</span>
                )}
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.cardLinks}>
                  <a href="#" className={styles.link}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    Code
                  </a>
                  <a href="#" className={styles.link}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
