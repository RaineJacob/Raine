import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Raine Jacob</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
           <p>
            I love turning raw data into meaningful stories that drive real-world decisions and impact.<br/>
            Whether it’s cleaning messy datasets or visualizing trends, I find joy in every step of the analytics process.<br/><br/>

            I'm confident in <b>SQL</b> and <b>Excel</b>, and have hands-on experience using <b>Python</b> for data analysis and <b>Power BI</b> for interactive dashboards.<br/>
            I’m currently sharpening my skills with tools like <b>Tableau</b> and plan to explore <b>Snowflake</b> and <b>Looker</b> in the near future.<br/><br/>

            And yes — I run on <b>data</b>, curiosity, and a whole lot of <b>coffee</b> <CiCoffeeCup />
  
</p>
 
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home