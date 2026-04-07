import styles from './Skills.module.css';

const skillCategories = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'CSS / Sass', level: 88 },
      { name: 'Vue.js', level: 75 }
    ]
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Python / Django', level: 80 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'GraphQL', level: 75 }
    ]
  },
  {
    category: 'Tools & Other',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'Docker / K8s', level: 78 },
      { name: 'AWS / Vercel', level: 80 },
      { name: 'Figma / Design', level: 70 }
    ]
  }
];

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
  'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Git',
  'GraphQL', 'Redis', 'Figma', 'Tailwind', 'Vue.js'
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>My Skills</span>
          <h2 className={styles.title}>Technologies I Work With</h2>
          <p className={styles.subtitle}>
            A comprehensive toolkit built over years of professional development
          </p>
        </div>
        <div className={styles.grid}>
          {skillCategories.map((cat) => (
            <div key={cat.category} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{cat.icon}</span>
                <h3 className={styles.cardTitle}>{cat.category}</h3>
              </div>
              <div className={styles.skillList}>
                {cat.skills.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPercent}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.techCloud}>
          <h3 className={styles.techTitle}>Tech Stack</h3>
          <div className={styles.tags}>
            {techStack.map((tech) => (
              <span key={tech} className={styles.tag}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
