import React from 'react';
import Navigation from './Navigation';
import styles from './Header.module.css'; 

function Header() {
  return (
    <header className={styles.header}>
      <h1>Muhammad Moghal's Portfolio</h1>
      <Navigation />
    </header>
  );
}

export default Header;
