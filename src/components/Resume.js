import React from 'react';
import styles from './Resume.module.css'; // import styles

function Resume() {
  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'MySQL',
    // I will add more skills here...
  ];

  return (
    <section className={styles.resume}>
      <h2>Resume</h2>
      <h3>Download my <a href="/SampleResume.pdf" download>resume</a></h3>
      <h3>Proficiencies</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Resume;
