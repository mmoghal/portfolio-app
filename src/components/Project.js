import React from 'react';
import styles from './Project.module.css'; // import styles

function Project({ title, image, deployedUrl, repoUrl, description }) {
  return (
    <div className={styles.project}>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description}</p> 
      <p>
        <a href={deployedUrl}>Deployed Application</a>
      </p>
      <p>
        <a href={repoUrl}>GitHub Repository</a>
      </p>
    </div>
  );
}

export default Project;
