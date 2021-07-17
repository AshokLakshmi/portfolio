import React from 'react'
import {FiInstagram,FiGithub,FiLinkedin} from 'react-icons/fi';

export default function SocialIcon() {
   
    return (
        <div className="icons"  >
        <a   target="_blank"  rel="noopener noreferrer" href="https://www.linkedin.com/in/ashok-rawat-aaa667205/"> <FiLinkedin  size={30}  className="s-icons"/></a>
         <a  target="_blank"  rel="noopener noreferrer" href="https://github.com/AshokLakshmi"><FiGithub  size={30} className="s-icons"/></a>
         <a target="_blank"  rel="noopener noreferrer" href="https://www.instagram.com/ashok1510aug/"><FiInstagram size={30} className="s-icons"/></a>
        </div>
    )
}
