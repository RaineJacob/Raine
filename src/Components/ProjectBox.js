import React from 'react';
import { FaGithub } from 'react-icons/fa';

// ProjectBox Component
const ProjectBox = ({ projectPhoto, projectName, description, github }) => {
  return (
    <div style={styles.projectBox}>
      <img src={projectPhoto} alt={projectName} style={styles.projectPhoto} />
      <div>
        <h3 style={styles.title}>{projectName}</h3>
        <p>{description}</p>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            style={styles.githubButton}
          >
            <FaGithub style={{ marginRight: '8px' }} />
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

// Page Component
const ProjectsPage = () => {
  const projects = [
    {
      projectName: 'Hotel Booking',
      projectPhoto: 'https://via.placeholder.com/400x200?text=Hotel+Booking',
      description:
        'An exploratory data analysis project on hotel booking data. It uncovers patterns in booking behavior, cancellations, and customer demographics. Uses Python and visualization tools.',
      github: 'https://github.com/RaineJacob/Hotel_Booking',
    },
    {
      projectName: 'Delivery Delay',
      projectPhoto: 'https://via.placeholder.com/400x200?text=Delivery+Delay',
      description:
        'A logistics data analysis project highlighting delay trends, factors, and actionable supply chain insights using SQL and Python.',
      github: 'https://github.com/RaineJacob/Delivery_delay_Analysis',
    },
    {
      projectName: 'Marketing Analysis',
      projectPhoto: 'https://via.placeholder.com/400x200?text=Marketing+Analysis',
      description:
        'Analyzes marketing campaign data to evaluate ROI and performance using Power BI and Python. Focuses on customer segmentation.',
      github: 'https://github.com/RaineJacob/Marketing_Analysis',
    },
    {
      projectName: 'HR Analytics',
      projectPhoto: 'https://via.placeholder.com/400x200?text=HR+Analytics',
      description:
        'Explores employee attrition and satisfaction through HR data. Involves data preprocessing, EDA, and dashboards.',
      github: 'https://github.com/RaineJacob/Hr-analytics',
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: 'center' }}>My Projects</h1>
      <div style={styles.grid}>
        {projects.map((project, index) => (
          <ProjectBox key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

// Styles
const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    justifyContent: 'center',
  },
  projectBox: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    width: '350px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  projectPhoto: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  },
  title: {
    margin: '1rem 0 0.5rem 0',
    fontSize: '1.25rem',
  },
  githubButton: {
    marginTop: '0.75rem',
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    backgroundColor: '#24292e',
    color: '#fff',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};
