import React from 'react';
import { FaGithub } from "react-icons/fa";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    HotelBookingDesc: "An exploratory data analysis project on hotel booking data. This project uncovers patterns in booking behavior, cancellations, and customer demographics. It demonstrates skills in data cleaning, EDA, and storytelling using Python and visualization tools.",
    HotelBookingGithub: "https://github.com/RaineJacob/Hotel_Booking",

    DeliveryDelayDesc: "A detailed analysis of delivery delays using logistics data. This project highlights delay trends, contributing factors, and actionable insights for optimizing supply chains. It showcases SQL, Python, and visualization in a business context.",
    DeliveryDelayGithub: "https://github.com/RaineJacob/Delivery_delay_Analysis",

    MarketingAnalysisDesc: "This project analyzes marketing campaign data to evaluate ROI, customer segmentation, and performance metrics. It reflects real-world marketing analytics workflows and demonstrates Power BI and Python skills.",
    MarketingAnalysisGithub: "https://github.com/RaineJacob/Marketing_Analysis",

    HrAnalyticsDesc: "An HR data analysis project focused on employee attrition, satisfaction, and retention. It involves data preprocessing, exploratory analysis, and visualization to support data-driven HR decisions.",
    HrAnalyticsGithub: "https://github.com/RaineJacob/Hr-analytics"
  };

  let show = '';
  if (desc[projectName + 'Github'] === "") {
    show = "none";
  }

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        <a style={{ display: show }} href={desc[projectName + 'Github']} target='_blank' rel='noreferrer'>
          <button className='projectbtn'><FaGithub /> Github</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
