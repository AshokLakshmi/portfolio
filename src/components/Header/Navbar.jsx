import React ,{useState,useEffect} from 'react'
import { Link } from "react-scroll";
import {FiMenu} from 'react-icons/fi';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Navbar() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  const [Nav,ShowNav]=useState (false);
    return (
        <div className="header-outer" data-aos="fade-in">
            <div className="nav-container">
                <div className="logo">
                 <h2>AshokRawat</h2>
                </div>
                <div className="navbar" >
                <div id={Nav ? "hidden" : ""} className="li-item">
                <Link
                     activeClass="active"
                       to="/"
                       spy={true}
                       smooth={true}
                       offset={0}
                       duration={500}> Home</Link>
                       <Link
                     activeClass="active"
                       to="about"
                       spy={true}
                       smooth={true}
                       offset={0}
                       duration={500}> About</Link>
                        <Link
                     activeClass="active"
                       to="project"
                       spy={true}
                       smooth={true}
                       offset={0}
                       duration={500}> Project</Link>
                       <Link
                     activeClass="active"
                       to="contact"
                       spy={true}
                       smooth={true}
                       offset={0}
                       duration={500}> Contact</Link>
              
              </div> 
              <button onClick={()=>ShowNav(!Nav)} className="Rnavbar"><FiMenu className="menubtn"/></button>
                </div>
            </div>
        </div>
    )
}
