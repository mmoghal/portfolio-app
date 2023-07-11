import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css'; // import styles

function Navigation() {
  return (
    <nav>
      <ul className={styles.navigation}>
        <li>
          <NavLink to="/about-me" activeClassName={styles.selected}>About Me</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" activeClassName={styles.selected}>Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName={styles.selected}>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/resume" activeClassName={styles.selected}>Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
