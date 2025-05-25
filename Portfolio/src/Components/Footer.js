import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <div className='footerLinks'>
        <a href="https://github.com/RaineJacob" target='_blank'><FaGithub/></a>
        <a href="www.linkedin.com/in/rainejacob" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:raine.jacob07@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer