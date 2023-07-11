import React from 'react';
import Project from './Project';
import styles from './Portfolio.module.css'; // import styles
import project1Image from '../assets/PasswordGenerator.png';
import project2Image from '../assets/explore.png';
import project3Image from '../assets/jabberwocky.png';
import project4Image from '../assets/calm-reward.png'; // Import calm-reward.png image
import project5Image from '../assets/work-day-scheduler.png'; // Import work-day-scheduler.png image
import project6Image from '../assets/weather-dashboard.png'; // Import weather-dashboard.png image
import project7Image from '../assets/rock-paper-scissors.png'; // Import rock-paper-scissors.png image

const projects = [

  {
    title: 'Explore Beyond',
    image: project2Image,
    deployedUrl: 'https://mmoghal.github.io/explore-beyond/',
    repoUrl: 'https://github.com/mmoghal/explore-beyond',
    description:
      'The perfect app for travelers looking to personalize their trip, discover new places, and stay informed.',
  },
  {
    title: 'Interactive Coding Quiz',
    image: project4Image,
    deployedUrl: 'https://mmoghal.github.io/calm-reward/',
    repoUrl: 'https://github.com/mmoghal/calm-reward',
    description:
      'Designed and developed by Muhammad Moghal. Test your coding knowledge and challenge yourself with our comprehensive set of questions.',
  },
  {
    title: 'Jabberwocky',
    image: project3Image,
    deployedUrl: 'https://boiling-mountain-88128.herokuapp.com/',
    repoUrl: 'https://github.com/mmoghal/jabberwocky',
    description:
      'A dynamic web application designed for book enthusiasts to come together virtually.',
  },

  {
    title: 'Work Day Scheduler',
    image: project5Image,
    deployedUrl: 'https://mmoghal.github.io/work-day-scheduler/',
    repoUrl: 'https://github.com/mmoghal/work-day-scheduler',
    description:
      'Get organized and stay on top of your schedule with the Work Day Schedule application! This app allows you to keep track of your daily tasks and appointments in a sleek and user-friendly interface.',
  },
  {
    title: 'Weather Dashboard',
    image: project6Image,
    deployedUrl: 'https://mmoghal.github.io/weather-dashboard/',
    repoUrl: 'https://github.com/mmoghal/weather-dashboard',
    description:
      'Looking for an easy-to-use weather dashboard that provides accurate weather information for multiple cities? Look no further than our weather app!',
  },
  {
    title: 'Rock Paper Scissors',
    image: project7Image,
    deployedUrl: 'https://mmoghal.github.io/five.canvas/',
    repoUrl: 'https://github.com/mmoghal/five.canvas',
    description:
      "In search of a fun and easy way to pass the time? Why not try a game of Rock, Paper, Scissors! Whether you're bored at home or on-the-go, this classic game is a great way to challenge your friends or take on the computer.",
  },
  {
    title: 'Password Generator',
    image: project1Image,
    deployedUrl: 'https://mmoghal.github.io/fast-crime/',
    repoUrl: 'https://github.com/mmoghal/fast-crime',
    description: 'Generate strong passwords with custom options.',
  },
  // Add more projects here...
];

function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
}

export default Portfolio;
