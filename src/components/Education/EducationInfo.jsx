import React from 'react'
import {FaGraduationCap} from 'react-icons/fa';
export default function EducationInfo() {
    return (
        <div className="e-details">
        <h4 className="heading"><FaGraduationCap className="edu-icon"/> Education</h4>
        <ul className="edu-details">
            <li>
        <h3>indira gandhi national open university</h3>
        <p>Bachelor of Computer Application</p>
        <span>2019-present</span>
        </li>
       
     <li>
        <h3>Government Polytechnic Lucknow</h3>
        <p>diploma in information technology</p>
        <span>2016-2019</span>
        </li>
        </ul>
        
        

    </div>
    )
}
