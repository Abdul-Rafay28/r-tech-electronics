import Footer from '../components/Footer/Footer';
import styles from './about.module.css';

function About() {
  return (
    <>
      <div className={styles.aboutPage}>

        <div className={styles.hero}>
          <h1>ABOUT R-TECH ELECTRONICS</h1>
          <p>
            A performance-driven technology brand built for gamers,
            creators, and power users.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Who We Are</h2>
          <p>
            R-Tech Electronics is a modern technology brand focused on
            high-performance computing solutions. We are driven by
            innovation, precision engineering, and a deep passion
            for advanced hardware technology.
            Our goal is simple — to build products that deliver
            consistent power, reliability, and long-term performance.
          </p>
        
        </div>

        <div className={`${styles.section} ${styles.alt}`}>
          <h2>What We Build</h2>
          <p>
            We design and deliver a wide range of premium PC hardware
            solutions tailored for gaming, professional work, and
            creative performance.
            From high-performance GPUs and laptops to advanced cooling
            systems and custom PC components, every R-Tech product
            is built to handle extreme workloads with confidence.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Why R-Tech</h2>
          <p>
            At R-Tech Electronics, quality is never compromised.
            Each product is designed with thermal efficiency,
            durability, and performance optimization in mind.
            We focus on clean design, premium materials, and
            engineering excellence to deliver a superior experience.
          </p>
    
        </div>

        <div className={`${styles.section} ${styles.alt}`}>
          <h2>Our Vision</h2>
          <p>
            Our vision is to create a future-ready technology ecosystem
            where innovation meets performance. We aim to become a
            trusted name in premium electronics by constantly evolving
            with the latest hardware advancements.
            Innovation is not optional at R-Tech — it defines who we are.
          </p>
        </div>

        <div className={styles.endNote}>
          <h3>The R-Tech Experience</h3>
          <p>
            Technology is more than hardware — it’s an experience.
            Built for performance. Engineered for the future.
          </p>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default About;
