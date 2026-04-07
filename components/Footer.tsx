import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#home" className={styles.logo}>
              <span className={styles.logoText}>JD</span>
              <span className={styles.logoDot}></span>
            </a>
            <p className={styles.tagline}>
              Building digital experiences that inspire and perform.
            </p>
          </div>
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>Navigation</h4>
              <ul>
                <li><a href="#home" className={styles.link}>Home</a></li>
                <li><a href="#about" className={styles.link}>About</a></li>
                <li><a href="#skills" className={styles.link}>Skills</a></li>
                <li><a href="#projects" className={styles.link}>Projects</a></li>
              </ul>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>Connect</h4>
              <ul>
                <li><a href="#" className={styles.link}>GitHub</a></li>
                <li><a href="#" className={styles.link}>LinkedIn</a></li>
                <li><a href="#" className={styles.link}>Twitter</a></li>
                <li><a href="#contact" className={styles.link}>Email Me</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <p className={styles.made}>
            Made with <span className={styles.heart}>♥</span> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
