
import video from '../../Video/video1.mp4';
import Navbar from '../Header/Navbar';
import { Link } from "react-scroll";
import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

import SocialIcon from '../SocialIcon';

export default function Home() {
    useEffect(()=>{
        Aos.init({duration:2000});
      },[]);


    return (
        <div className="home-outer" data-aos="fade-in">
           <div className="home-container" >
              
               <video data-aos="fade-in" src={video} autoPlay loop muted typeof="video/mp4"></video>
        
      
               </div>
            <div className="overlay" data-aos="fade-in">
               <Navbar/>
               <div className="content-container">
                  
             <SocialIcon />
                <div className="intro" >
                    <p data-aos="fade-left">HELLO, MY NAME IS</p>
                </div>
                <div className="name" data-aos="fade-in">
                    <h2 data-aos="fade-right">ASHOK KUMAR RAWAT</h2>
                </div>
                <div className="details" data-aos="fade-in">
                    <p data-aos="fade-up-right" data-aos-duration="4000"> Knack of building applications with front and back end operations</p>
                </div>
                <div className="btn" data-aos="fade-up-left" data-aos-duration="4000">
               
                   <button>Resume</button>
 
                     <Link
                     activeClass="active"
                       to="form"
                       spy={true}
                       smooth={true}
                       offset={0}
                       duration={500}> <button> Hire Me</button></Link>
                </div>
               </div>
            </div> 
          
        </div>
    )
}
