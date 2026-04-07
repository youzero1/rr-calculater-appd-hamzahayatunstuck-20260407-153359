import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageBox}>
            <div className={styles.avatar}>
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="100" fill="#12121a"/>
                <circle cx="100" cy="75" r="35" fill="#6c63ff" opacity="0.8"/>
                <ellipse cx="100" cy="165" rx="55" ry="45" fill="#6c63ff" opacity="0.6"/>
              </svg>
            </div>
            <div className={styles.floatingCard}>
              <span className={styles.floatingIcon}>🎯</span>
              <div>
                <div className={styles.floatingTitle}>Problem Solver</div>
                <div className={styles.floatingText}>Creative solutions</div>
              </div>
            </div>
            <div className={styles.floatingCard2}>
              <span className={styles.floatingIcon}>⚡</span>
              <div>
                <div className={styles.floatingTitle}>Fast Learner</div>
                <div className={styles.floatingText}>Always improving</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <span className={styles.sectionLabel}>About Me</span>
          <h2 className={styles.title}>Passionate Developer With a Creative Eye</h2>
          <p className={styles.text}>
            I&apos;m a full-stack developer with over 5 years of experience building web applications.
            I specialize in React, Next.js, and Node.js, creating digital experiences that are
            both beautiful and functional.
          </p>
          <p className={styles.text}>
            When I&apos;m not coding, you&apos;ll find me exploring new design trends, contributing to
            open-source projects, or mentoring junior developers. I believe in writing clean,
            maintainable code that scales.
          </p>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Name</span>
              <span className={styles.infoValue}>John Doe</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Email</span>
              <span className={styles.infoValue}>john@example.com</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Location</span>
              <span className={styles.infoValue}>San Francisco, CA</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Availability</span>
              <span className={styles.infoValueGreen}>Open to work</span>
            </div>
          </div>
          <a href="#contact" className={styles.btn}>Download Resume</a>
        </div>
      </div>
    </section>
  );
}
