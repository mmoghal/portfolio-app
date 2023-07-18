import React from 'react';
import styles from './Footer.module.css'; 

function Footer() {
  const year = new Date().getFullYear(); 

  return (
    <footer className={styles.footer}>
      <div>
        <a href="https://github.com/mmoghal" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/muhammad-m-82510a127/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://stackoverflow.com/users/22243319/muhammad-moghal" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
      </div>
      <div>
        {year} © nRm. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
