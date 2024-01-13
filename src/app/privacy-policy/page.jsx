// PrivacyPolicy.js
import React from 'react';
import styles from './privacyPolicy.module.css'; // Make sure to import your CSS module

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.textCenter} ${styles.headingPrimary}`}>Privacy Policy</h1>

      <p>
        Last updated: [Date]
      </p>

      <p>
        [Your Company Name] () operates [yourwebsite.com] (the). This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site.
      </p>

      <h2 className={styles.headingSecondary}>Information Collection and Use</h2>

      <p className={styles.paragraph}>
        While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name (Personal Information).
      </p>

      <h2 className={styles.headingSecondary}>Log Data</h2>

      <p className={styles.paragraph}>
        Like many site operators, we collect information that your browser sends whenever you visit our Site. This Log Data may include information such as your computer Internet Protocol address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
      </p>

      <h2 className={styles.headingSecondary}>Cookies</h2>

      <p className={styles.paragraph}>
        Cookies are files with small amounts of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer hard drive. Like many sites, we use  to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
      </p>

      <h2 className={styles.headingSecondary}>Security</h2>

      <p className={styles.paragraph}>
        The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
      </p>

      <h2 className={styles.headingSecondary}>Changes to This Privacy Policy</h2>

      <p className={styles.paragraph}>
        This Privacy Policy is effective as of [Date] and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
      </p>

      <p className={styles.paragraph}>
        We reserve the right to update or change our Privacy Policy at any time, and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
      </p>

      <h2 className={styles.headingSecondary}>Contact Us</h2>

      <p className={styles.paragraph}>
        If you have any questions about this Privacy Policy, please contact us at [your email address].
      </p>
    </div>
  );
};

export default PrivacyPolicy;
