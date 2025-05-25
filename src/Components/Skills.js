import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
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
  SiMicrosoftazure 
} from "react-icons/si";

const Skills = ({ skill }) => {
    const icon = {
        Git: <FaGitAlt />, 
        Github: <FaGithub />, 
        Figma: <FaFigma />, 
        Vercel: <SiVercel />, 
        Python: <FaPython />, 
        Jupyter: <SiJupyter />, 
        MySQL: <SiMysql />, 
        Postgres: <SiPostgresql />, 
        PowerBI: <SiPowerbi />, 
        Excel: <SiMicrosoftoffice />, 
        'MS Office': <SiMicrosoftoffice />, 
        Tableau: <SiTableau />, 
        AWS: <SiAmazonaws />
    };

    return (
        <div title={skill} className='SkillBox'>
            {icon[skill] || <span>❓</span>} {/* fallback icon if missing */}
        </div>
    );
};

export default Skills;
