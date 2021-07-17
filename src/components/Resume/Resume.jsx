import React from 'react'
import {GrClose} from 'react-icons/gr';


export default function Resume() {
    return (
        <div className="body-resume">
          <div className="closebtn">
<GrClose className="close-icon"/>
          </div>
        <div class="container">
  <div class="header">
    <div class="full-name">
      <span class="name">Ashok kumar rawat</span> 
     
    </div>
    <div class="contact-info">
      <span class="email">Email: </span>
      <span class="email-val">1510ashokrawat@gmail.com</span>
      <span class="separator"></span>
      <span class="phone">Phone: </span>
      <span class="phone-val">+91-8299008014</span>
    </div>
    
   
  </div>
   <div class="details">
    
    <div class="section">
      <div class="section__title">Education</div>
      <div class="section__list">
        <div class="section__list-item">
          <div class="left">
            <div class="name">INDIRA GANDHI NATIONAL OPEN UNIVERSITY</div>
            <div class="course">BACHELOR OF COMPUTER APPLICATION</div>
            <div class="duration">July 2019 - Present</div>
          </div>
         
        </div>
        <div class="section__list-item">
          <div class="left">
            <div class="name">GOVERNMENT POLYTECHNIC LUCKNOW</div>
            <div class="course">DIPLOMA IN INFORMATION TECHNOLOGY</div>
            <div class="duration">July 2016 - May 2019</div>
          </div>
         
        </div>
      

      </div>
      
  </div>
     <div class="section">
      <div class="section__title">Projects</div> 
       <div class="section__list">
         <div class="section__list-item">
           <div class="name">File Organiser</div>
           <div class="text">it's a global command line application using Node.js. 
It organizes all your files from from a folder into different section  so that you need not to do it manually.</div>
         </div>
         
        
       </div>
    </div>
     <div class="section">
       <div class="section__title">Skills</div>
       <div class="skills">
         <div class="skills__item">
           <div class="left"><div class="name">
             Java
             </div></div>
           <div class="right">
                          <input  id="ck1" type="checkbox" checked/>

             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox"  checked/>

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" checked />
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label>

           </div>
         </div>
         
       </div>
       <div class="skills__item">
           <div class="left">
               <div class="name">
                HTML/CSS</div>
            </div>
           <div class="right">
                          <input  id="ck1" type="checkbox" checked/>

             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox"  checked/>

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" checked/>
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label>

           </div>
         </div>
         <div class="skills__item">
           <div class="left"><div class="name">
             JavaScript
             </div></div>
           <div class="right">
                          <input  id="ck1" type="checkbox" checked/>

             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox" checked/>

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" />
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label>

           </div>
         </div>
         <div class="skills__item">
           <div class="left"><div class="name">
             ReactJs
             </div></div>
           <div class="right">
                          <input  id="ck1" type="checkbox" checked/>

             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox"  />

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" />
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label>

           </div>
         </div>
         
       </div>
     
     </div>
  </div>
</div>
    )
}
