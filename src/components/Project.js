import React from 'react';

function Project({ title, image, deployedUrl, repoUrl }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <a href={deployedUrl}>Deployed Application</a>
      <a href={repoUrl}>GitHub Repository</a>
    </div>
  );
}

export default Project;
