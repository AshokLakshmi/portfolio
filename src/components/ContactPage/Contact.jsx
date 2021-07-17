
import React ,{useState,useEffect}from 'react'
import {FaMapMarkerAlt,FaPhoneAlt} from 'react-icons/fa'
import {SiMinutemailer} from 'react-icons/si';
import emailjs from 'emailjs-com';
import SocialIcon from '../SocialIcon';
import Footer from '../Footer/Footer';

import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
    useEffect(()=>{
        Aos.init({duration:2000});
      },[]);
    const[result,showResult]=useState(false);
    const Result=()=>{
        return(
            <p>Thank you. I will contact you soon...!</p>
        )
    }
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_m5glakc', 'template_z6swq2s', e.target, 'user_93FTTbSWMp7MgdEcKfK9S')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      }
    return (
       

        <div className="contact" id="contact">
        <div className="contact-head" data-aos="zoom-out-right">
            <h2 data-aos="fade-in">I'd love to hear from you</h2>
            <p data-aos="fade-in">Got a project you would like me to work on? Or how about just a friendly chat?</p>
         
        </div>
        <div className="contact-container" data-aos="zoom-in">
            <div className="contact-info">
                <div className="contact-box">
                    <div className="icon"><FaMapMarkerAlt/></div>
                    <div className="text">
                        <h3>Address</h3>
                        <p>Chinhat, Lucknow U.P, India, 226028</p>
                    </div>
                </div>
                <div className="contact-box">
                    <div className="icon"><FaPhoneAlt/></div>
                    <div className="text">
                        <h3>Phone</h3>
                        <p>+918299008014</p>
                    </div>
                </div>
               
                <div className="contact-box">
                    <div className="icon"><SiMinutemailer/></div>
                    <div className="text">
                        <h3>Email</h3>
                        <p>1510ashokrawat@gmail.com</p>
                    </div>
                </div>
                <div className="contact-box">
                   <h3>Find Me On</h3>
                   <SocialIcon/>
                </div>
            </div>
           
            <div className="contact-form" id="form">
                <form onSubmit={sendEmail}>
                   
                <div className="inputbox">
                    <input type="text" placeholder="Name" name="name" required/>

                </div>
                <div className="inputbox">
                    <input type="email" placeholder="Email" name="user_email" required/>
                    
                </div>
                <div className="inputbox">
                    <textarea type="text" placeholder="Message" name="message" required/>
                    
                </div>
                <div className="inputbox">
                    <input type="submit" className="btn"/>
                    
                </div>
                </form>
                <h3 className="alertmsg">{result ? <Result/> :null}</h3>
            </div>
        </div>
        <Footer/>
    </div>
    )
}
