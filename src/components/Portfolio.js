// Portfolio.js
import React from 'react';
import Project from './Project';
import project1Image from '../assets/PasswordGenerator.png';
// Import other project images...

const projects = [
  {
    title: 'Password Generator',
    image: project1Image,
    deployedUrl: 'https://mmoghal.github.io/fast-crime/',
    repoUrl: 'https://github.com/mmoghal/fast-crime',
  },
  // I will add more projects here
];

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
}

export default Portfolio;
