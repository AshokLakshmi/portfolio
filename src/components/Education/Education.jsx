import React ,{useEffect}from 'react'
import EducationInfo from './EducationInfo';
import Skill from './Skill';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Education() {
    useEffect(()=>{
        Aos.init({duration:2000});
      },[]);

    return (
        <div className="education-section" id="about" data-aos="fade-in">
            <div className="eduaction-item" data-aos="flip-up">
              <h2>About Me</h2>
              
                <div className="item" data-aos="flip-up">
                    
                 <EducationInfo/>
                    <Skill/>
               
                </div>
            </div>
         
        </div>
    )
}
