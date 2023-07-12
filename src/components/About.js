import React from 'react';
import styles from './About.module.css'; // imported styles
import myPic from '../assets/mypic.jpg'; // Imported the image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs, faReact, faNode } from '@fortawesome/free-brands-svg-icons'


function About() {
  return (
    <section className={styles.about}>
      <h2>About Me</h2>
      <div>
        <img src={myPic} alt="Muhammad Moghal" className={styles.profilePic} />
      </div>
      <p>
      Hello! I'm Muhammad Moghal, a seasoned Software Engineer with a keen focus on Infrastructure Engineering. One of the things that get me out of bed each morning is my passion for innovation and the opportunity to turn complex concepts into real-life software solutions. I've honed my skills in full stack development, and I love every bit of it.</p>
      <p>
      Over the years, I've amassed significant experience in architecting and designing robust systems, getting my hands deep into networking, cloud computing, and enterprise server and storage platforms. There's a unique thrill in creating scalable applications and infrastructure tailored specifically to each project's needs, and I thrive on it. </p>
      <p>
      But it doesn't stop there. I've developed a knack for implementing monitoring and telemetry systems, crafting high-availability solutions, and strategizing effective disaster recovery plans. These are no small feat, and they've been crucial in ensuring optimal resource utilization and consistent business continuity in all the projects I've handled. </p>
      <p>
      When I'm not behind a screen, I'm likely exploring emerging technologies, at a tech conference, or just keeping fit. I believe that a well-rounded life breeds creativity and innovation, and this reflects in my work.</p>
      <p>
      I'm proud of my excellent communication skills, and I've learned to adapt quickly to new challenges, thanks to the diverse teams I've worked with. These skills, coupled with my commitment to code quality, have been instrumental in creating highly optimized IT environments.</p>
      <p>I am passionate about staying current with emerging technologies and trends and strive to deliver innovative solutions that align with business objectives. My commitment to clean, efficient code, effective communication, and a collaborative approach allows me to contribute significantly to the optimization and efficiency of IT environments.</p>
      <p>I bring to the table strong competencies in areas such as social coding, front-end development (including building websites from scratch and utilizing front-end frameworks like Bootstrap), filesystem and terminal navigation, cloud deployment, AJAX communication for full stack Single Page Applications, SQL commands, RESTful APIs, and session-based applications utilizing popular user authentication schemes. I excel at working independently or collaboratively on complex projects, am adept at troubleshooting and enhancing legacy code, and have a strong understanding of how web pages are served and rendered.</p>
      <p>You can check out my portfolio for a closer look at my journey and  my resume section for a deeper dive into my skills. You'll find an array of projects where I've successfully deployed infrastructure, designed secure and resilient solutions, and ensured optimal resource utilization and business continuity.</p>
      <p>I'm always on the lookout for emerging technologies and trends, ready to infuse these innovations into solutions that align with business goals and promote growth.</p>
      <p>I'm excited about the possibility of leveraging my skills and dedication on new, cutting-edge projects. If you're looking for someone who is dedicated, experienced, and passionate about delivering top-notch solutions, I'm just a message away.</p>
      <p>So, shall we collaborate and turn your tech objectives into reality? I'm game!</p>
      <div>
        <FontAwesomeIcon icon={faHtml5} size="2x" />
        <FontAwesomeIcon icon={faCss3} size="2x" />
        <FontAwesomeIcon icon={faJs} size="2x" />
        <FontAwesomeIcon icon={faReact} size="2x" />
        <FontAwesomeIcon icon={faNode} size="2x" />
      </div>
    </section>
  );
}

export default About;

