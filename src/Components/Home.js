import React from 'react';
import Lottie from "lottie-react";
import DataVisualization from "../LottieFiles/DataVisualization.json"; // Replace with the downloaded Lottie file
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/AvatarWithCoffee.png'; // Make sure you have an updated avatar image with coffee
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  return (
    <div>
      {/* Home Page Section */}
      <div className='HomePage'>
        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Raine Jacob</b></h1>
          <Typed />
        </div>

        {/* Lottie Animation for Data Visualization */}
        <Lottie 
          className="illustration" 
          animationData={DataVisualization} 
          loop={true} 
        />
      </div>

      {/* About Page Section */}
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I turn raw data into impactful insights that drive smarter decisions.<br/>
            With a strong foundation in <b>SQL</b>, <b>Python</b>, and <b>Excel</b>, I specialize in uncovering trends, cleaning data, and visualizing results that matter.<br/><br/>

            I design compelling dashboards using <b>Power BI</b> and <b>Tableau</b> that bring clarity to complexity and enable informed strategies.<br/>
            I'm not just analyzing data — I'm helping teams understand it, trust it, and act on it.<br/><br/>

            Always curious, always improving — and powered by <b>coffee</b> <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />.
          </p>
        </div>

        {/* Avatar Image with Coffee */}
        <Tilt>
          <img className='Avatar' src={Avatar} alt="Data Analyst Avatar with Coffee" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
