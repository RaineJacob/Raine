import React from 'react'; 
import { FaPython, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { 
    SiVercel, 
    SiMysql, 
    SiPowerbi, 
    SiJupyter, 
    SiPostgresql, 
    SiTableau, 
    SiMicrosoftoffice, 
    SiAmazonaws, 
    SiWindows 
} from "react-icons/si";

const Skills = ({ skill }) => {
        const icon = {
      Python: <FaPython />,
      Jupyter: <SiJupyter />,
      MySQL: <SiMysql />,
      Postgres: <SiPostgresql />,
      Git: <FaGitAlt />,
      Github: <FaGithub />,
      PowerBI: <SiPowerbi />,
      Excel: <SiMicrosoftoffice />,
      'MS Office': <SiMicrosoftoffice />,
      Figma: <FaFigma />,
      Vercel: <SiVercel />,
      Tableau: <SiTableau />,
      'AWS (Basics)': <SiAmazonaws />,
};

    };

    return (
        <div title={skill} className='SkillBox'>
            {icon[skill] || <SiWindows />} {/* fallback icon */}
        </div>
    );
};

export default Skills;
