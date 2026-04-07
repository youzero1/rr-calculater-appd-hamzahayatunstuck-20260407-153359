import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
        <div className={styles.grid}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.badge}>Available for work</div>
        <h1 className={styles.title}>
          Hi, I&apos;m <span className={styles.name}>John Doe</span>
        </h1>
        <h2 className={styles.subtitle}>
          Full Stack Developer &amp; UI Designer
        </h2>
        <p className={styles.description}>
          I craft beautiful, performant web applications with modern technologies.
          Passionate about clean code, great UX, and solving real problems.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>
            View My Work
          </a>
          <a href="#contact" className={styles.btnSecondary}>
            Get In Touch
          </a>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>5+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>40+</span>
            <span className={styles.statLabel}>Projects Done</span>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>20+</span>
            <span className={styles.statLabel}>Happy Clients</span>
          </div>
        </div>
      </div>
      <a href="#about" className={styles.scroll}>
        <div className={styles.scrollIcon}></div>
      </a>
    </section>
  );
}
