
import React,{useEffect} from 'react';
import './App.scss';
import Contact from './components/ContactPage/Contact';
import Home from './components/HomePage/Home';
import Education from './components/Education/Education';
import Project from './components/Project/Project';
import Aos from 'aos';
import 'aos/dist/aos.css';


function App() {
useEffect(()=>{
  Aos.init({duration:2000});
},[]);

  return (
    <div className="App">
      <Home/>
     <Education/>
     <Project/>
     <Contact/>

     
    
     
    </div>
  );
}

export default App;
