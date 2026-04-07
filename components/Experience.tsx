import styles from './Experience.module.css';

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  color: string;
}

const jobs: Job[] = [
  {
    company: 'TechCorp Inc.',
    role: 'Senior Full Stack Developer',
    period: '2022 – Present',
    location: 'San Francisco, CA',
    description:
      'Leading development of core product features and mentoring a team of 4 junior developers.',
    achievements: [
      'Reduced page load times by 60% through performance optimizations',
      'Architected microservices migration saving $50k/year in infrastructure costs',
      'Led team to deliver 3 major product launches on schedule'
    ],
    color: '#6c63ff'
  },
  {
    company: 'StartupXYZ',
    role: 'Full Stack Developer',
    period: '2020 – 2022',
    location: 'Remote',
    description:
      'Built and maintained multiple customer-facing web applications from scratch using React and Node.js.',
    achievements: [
      'Developed real-time dashboard used by 10k+ daily active users',
      'Implemented CI/CD pipeline reducing deployment time by 80%',
      'Integrated 12+ third-party APIs and payment providers'
    ],
    color: '#ff6584'
  },
  {
    company: 'Digital Agency Co.',
    role: 'Frontend Developer',
    period: '2019 – 2020',
    location: 'New York, NY',
    description:
      'Designed and developed responsive websites and web applications for various clients.',
    achievements: [
      'Delivered 15+ client projects with 100% satisfaction rate',
      'Created reusable component library used across all projects',
      'Improved accessibility scores across portfolio to WCAG AA standards'
    ],
    color: '#22c55e'
  }
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>My Journey</span>
          <h2 className={styles.title}>Work Experience</h2>
          <p className={styles.subtitle}>
            5+ years of building things that matter
          </p>
        </div>
        <div className={styles.timeline}>
          {jobs.map((job, index) => (
            <div key={job.company} className={styles.item}>
              <div className={styles.dot} style={{ background: job.color }}></div>
              {index < jobs.length - 1 && <div className={styles.line}></div>}
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <div>
                    <h3 className={styles.role}>{job.role}</h3>
                    <div className={styles.company} style={{ color: job.color }}>
                      {job.company}
                    </div>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.period}>{job.period}</span>
                    <span className={styles.location}>{job.location}</span>
                  </div>
                </div>
                <p className={styles.desc}>{job.description}</p>
                <ul className={styles.achievements}>
                  {job.achievements.map((achievement) => (
                    <li key={achievement} className={styles.achievement}>
                      <span className={styles.bullet} style={{ background: job.color }}></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
