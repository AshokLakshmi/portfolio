import React from 'react'
import {BiCodeAlt} from 'react-icons/bi'

export default function Skill() {
    return (
        <div className="skills">
                    <h4 className="heading"><BiCodeAlt className="edu-icon"/>My Skill</h4>
                        <ul className="skill-details">
                            <li>
                            <h3>HTML</h3>
                 <span className="bar"><span className="html"></span></span>
                        </li>
                       
                     <li>
                     <h3>css</h3>
                 <span className="bar"><span className="css"></span></span>
                        </li>
                        <li><h3>Java</h3>
                 <span className="bar"><span className="java"></span></span>
                 </li>
                 <li><h3>Javascript</h3>
                 <span className="bar"><span className="javascript"></span></span>
                 </li>
                 <li><h3>ReactJs</h3>
                 <span className="bar"><span className="reactjs"></span></span>
                 </li>
                        </ul>
                        
                        

                    </div>
    )
}
