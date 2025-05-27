import React from 'react';
import { FaGithub } from 'react-icons/fa';

const desc = {
  HotelBooking: {
    description:
      'An exploratory data analysis project on hotel booking data. This project uncovers patterns in booking behavior, cancellations, and customer demographics. It demonstrates skills in data cleaning, EDA, and storytelling using Python and visualization tools.',
    github: 'https://github.com/RaineJacob/Hotel_Booking',
  },
  DeliveryDelay: {
    description:
      'A detailed analysis of delivery delays using logistics data. This project highlights delay trends, contributing factors, and actionable insights for optimizing supply chains. It showcases SQL, Python, and visualization in a business context.',
    github: 'https://github.com/RaineJacob/Delivery_delay_Analysis',
  },
  MarketingAnalysis: {
    description:
      'This project analyzes marketing campaign data to evaluate ROI, customer segmentation, and performance metrics. It reflects real-world marketing analytics workflows and demonstrates Power BI and Python skills.',
    github: 'https://github.com/RaineJacob/Marketing_Analysis',
  },
  HrAnalytics: {
    description:
      'An HR data analysis project focused on employee attrition, satisfaction, and retention. It involves data preprocessing, exploratory analysis, and visualization to support data-driven HR decisions.',
    github: 'https://github.com/RaineJacob/Hr-analytics',
  },
};

const ProjectBox = ({ projectPhoto, projectName }) => {
  const project = desc[projectName];

  if (!project) {
    return <div>Invalid project name: {projectName}</div>;
  }

  return (
    <div className="projectBox" style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', maxWidth: '400px' }}>
      <img
        className="projectPhoto"
        src={projectPhoto}
        alt="Project display"
        style={{ width: '100%', height: 'auto' }}
      />
      <div>
        <h3 style={{ marginTop: '1rem' }}>{projectName}</h3>
        <p style={{ marginTop: '0.5rem' }}>{project.description}</p>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            <button className="projectbtn" style={{ marginTop: '0.5rem', padding: '0.5rem 1rem' }}>
              <FaGithub style={{ marginRight: '0.5rem' }} /> GitHub
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
