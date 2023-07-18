import React from 'react';
import styles from './Resume.module.css'; // import styles

function Resume() {
    const technicalExpertise = {
        'API Design': [
          'Client-Server Model',
          'API',
          'REST',
          'JSON',
          'AJAX (Fetch API)',
          'HTTP request methods',
          'GraphQL',
        ],
        'Deployment and Delivery': [
          'Heroku',
          'Azure',
          'AWS',
          'Git',
          'GitHub Pages',
          'Shell Scripting',
          'Unit Testing',
          'Linting',
          'Continuous Integration',
        ],
        'Databases': ['MySQL', 'MongoDB'],
        'Server Side Development': [
          'Node.js',
          'Express.js',
          'User Authentication',
          'Template Engines',
          'MERN Stack (MongoDB, Express.js, React.js, Node.js)',
        ],
        'Browser Based Technologies': [
          'HTML',
          'CSS',
          'JavaScript',
          'Responsive Design',
          'Progressive Web Applications (PWAs)',
          'Bootstrap',
          'Local Storage, Session Storage, IndexedDB',
          'React.js',
          'jQuery',
        ],
        'Computer Science Applied to JavaScript': [
          'Algorithms (Searches, Sorts)',
          'Performance',
          'Time Complexity',
          'Big O Notation',
          'Data Structures',
        ],
        'Enterprise Server, Storage & Virtualization': [
          'NetApp FAS, AFF, Azure Files',
          'EMC XtremIO, VNX, Isilon',
          'Pure Storage FA-X20R3, FA-m50r2, FA-X70R2',
          'HA & DR Solutions: RecoverPoint, VPLEX, SnapMirror, SnapVault, ActiveCluster',
          'VMware vSphere 4, 5, 6, 7 Horizon View VDI, SRM, Citrix',
          'Server Hardware, Converged Infrastructure, Cisco UCS, HPE BladeSystem, Dell Servers',
          'SAN Switches, Cisco and Brocade Cores and ToRs',
          'Azure Cloud Computing',
          'Backup Technologies, Dell EMC Data Domain, Avamar, Cohesity',
          'Windows Desktop, Servers, Linux/Unix OS',
        ],
        'Professional Certifications and Training': [
          'Microsoft Azure Architect Technologies AZ-303',
          'Microsoft Azure Administrator AZ-104',
          'Microsoft Azure Fundamentals AZ-900',
          'NetApp Certified Data Administrator, ONTAP',
          'VMware Data Center Virtualization VCP',
          'CyberArk Certified Trustee',
          'SANS Security Essetials',
          'OpenStack MCA200',
          'VMAX & PowerPath Fundamentals',
          'Zoning Best Practices',
          'SAN Management',
          'Isilon Administration',
          'VNX Install, Configure and Management',
          'NAS Implementation, Install, Configure and Management',
          'VPLEX Operation & Management',
          'Clariion Implementation, Install, Configure and Management',
          'vSphere Install, Configure and Manage',
          'VMware vSphere: Fast Track',
          'VMware Horizon 7: Install, Configure, Manage',
          'VMware View and SRM Install, Configure and Manage',
          'VMware vCloud Director Architecting Your Cloud',
          'Microsoft SQL Server for Administration',
          'Red Hat Automation with Ansible',
          'Red Hat OpenStack Administration I ',
          'Red Hat OpenStack Administration II',
          'Automation with Ansible II: Ansible Tower',
          'IT Project Management',
        ],
      };

      return (
        <section className={styles.resume}>
          <h2>Resume</h2>
          <h3>Download my <a href="/Resume_2023.pdf" download>resume</a></h3>
          <h3>Technical Expertise</h3>
          {Object.keys(technicalExpertise).map((category, index) => (
            <div key={index}>
              <h3>{category}</h3>
              <ul>
                {technicalExpertise[category].map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      );
    }
    
    export default Resume;