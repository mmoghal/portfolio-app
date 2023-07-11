import React from 'react';
import styles from './Footer.module.css'; // import styles

function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/mmoghal" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/mmoghal" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://stackoverflow.com/users/mmoghal" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
    </footer>
  );
}

export default Footer;
