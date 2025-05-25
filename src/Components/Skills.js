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
  SiAmazonaws 
} from "react-icons/si";
import { AiOutlineQuestionCircle } from "react-icons/ai"; // Fallback icon

const Skills = ({ skill }) => {
    const icon = {
        Python: <FaPython />,
        Jupyter: <SiJupyter />,
        MYSQL: <SiMysql />,
        Postgres: <SiPostgresql />,
        Git: <FaGitAlt />,
        Github: <FaGithub />,
        PowerBI: <SiPowerbi />,
        Tableau: <SiTableau />,
        Excel: <SiMicrosoftoffice />,
        'MS Office': <SiMicrosoftoffice />,
        Figma: <FaFigma />,
        Vercel: <SiVercel />,
        AWS: <SiAmazonaws />
    };

    return (
        <div title={skill} className='SkillBox'>
            {icon[skill] || <AiOutlineQuestionCircle />} {/* fallback icon if not found */}
        </div>
    );
};

export default Skills;
