import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import { FaPython, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { SiVercel, SiMysql, SiPowerbi, SiJupyter, SiPostgresql, SiTableau, SiMicrosoftoffice, SiAmazonaws,  } from "react-icons/si";

const Skills = ({ skill }) => {
    const icon = {
        Git: <FaGitAlt />,
        Github: <FaGithub />,
        Figma: <FaFigma />,
        Vercel: <SiVercel />,
        Python: <FaPython />,
        MYSQL: <SiMysql />,
        Postgres: <SiPostgresql />,
        PowerBI: <SiPowerbi />,
        Excel: <SiMicrosoftoffice />,
        'MS Office': <SiMicrosoftoffice />,
        Tableau: <SiTableau />,
        Jupyter: <SiJupyter />,
        'AWS(Basics)': <SiAmazonaws />
    };

    return (
        <div title={skill} className='SkillBox'>
            {icon[skill] || <SiWindows />} {/* fallback icon */}
        </div>
    );
};

export default Skills;
