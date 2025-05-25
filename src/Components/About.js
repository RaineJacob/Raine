import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
            <p>
              Hey! I'm <b>Raine Jacob</b> — a curious mind with a passion for <b>data, design, and discovery</b>.<br/><br/>
              I graduated with a <b>BCA</b> degree and have been diving deep into the world of <b>data analytics</b> ever since. I love exploring patterns in data, building sleek dashboards, and translating numbers into stories using tools like <b>Python, SQL, Power BI, Excel</b>, and <b>Tableau</b>.<br/><br/>
              Whether it's breaking down business trends or finding hidden insights, I'm always up for a challenge. I’ve worked on several hands-on projects that reflect my skills and obsession with clean visuals and meaningful results.<br/><br/>
              When I’m not analyzing datasets, you’ll probably find me <b>gaming</b>, geeking out over <b>new tech</b>, or learning something new just for fun.<br/><br/>
              I’m actively looking for opportunities where I can grow, contribute, and collaborate with people who love data as much as I do.
</p>

        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='Python' />
        <Skills skill='Jupyter ' />
        <Skills skill='MYSQL' />
        <Skills skill='Postgres' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Power BI' />
        <Skills skill='Excel' />
        <Skills skill='MS Office' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Tableau' />
        <Skills skill='AWS(Basics)'/>
        
      </div>
    </>
  )
}

export default About