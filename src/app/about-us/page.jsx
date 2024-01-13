import React from 'react';
import styles from './aboutUs.module.css'; // Make sure to import your CSS module

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>🚀 Welcome to Devscribe 🚀</h1>
        <p className={styles.subtitle}>Crafting the Future of Web Development. Unleash your coding potential with Devscribe, where learning web technologies is short, extraordinary and enjoyable experience.</p>
      </div>

      <div className={styles.focusSection}>
        <h2 className={styles.focusTitle}>Our Focus</h2>
        <p className={styles.focusText}>
          Devscribe is not just a platform; its an immersive experience. Dive into our tutorials, where innovation meets accessibility, and transform your journey into a captivating exploration of coding brilliance.
        </p>
      </div>

      <p className={styles.description}>
        Whether you are taking your first steps or you are a seasoned coder, Devscribe is your dynamic hub for cutting-edge learning and staying ahead in the ever-evolving world of web development.
      </p>

      <p className={styles.description}>
        Join us on this exhilarating journey of exploration and mastery. Lets collaboratively shape the future of the web with style, creativity, and a passion for coding excellence!
      </p>
    </div>
  );
};

export default AboutUs;
