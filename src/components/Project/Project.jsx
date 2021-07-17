import React,{useState,useEffect} from 'react'
import projectList from './projectList';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Project() {
    useEffect(()=>{
        Aos.init({duration:2000});
      },[]);
    const[dataItem,setDataItem]=useState(projectList);
    const handleBtn=(e)=>{
     
        let word=e.target.value;
        if(word==='All'){
            setDataItem(projectList);
            console.log("all");
        }else if(word==='ReactJs'){
            const filterData=projectList.filter(item=>
                item.category==='ReactJs');
                setDataItem(filterData);
                console.log(filterData);
        }
        else if(word==='NodeJs'){
            const filterData=projectList.filter(item=>
                item.category==='NodeJs');
                setDataItem(filterData);
                console.log(filterData);
        }
    }
    return (
        <div className="project-outer" id="project">
            <h2 data-aos="slide-up">  My Work</h2>
            <div className="filter-btn" data-aos="slide-right">
                <button value="All" onClick={handleBtn}>All</button>
                <button value="ReactJs" onClick={handleBtn}>ReactJs</button>
                <button value="NodeJs" onClick={handleBtn}>NodeJs</button>
            </div>
           <div className="project-container" data-aos="slide-left">
           {dataItem.map((item)=>{
return  <div className="porject-item" key={item.id} data-aos="top-bottom">
<div className="project-img">
<img src={item.image} alt={item.title}/>
<div className="details-overlay"><p>{item.details}</p></div>
</div>
<div className="project-info" data-aos="zoom-out">
<h3>{item.title}</h3>

<div className="p-btn">
    <a target="_blank"  rel="noopener noreferrer" href={item.demo}>Preview</a>
    <a target="_blank"  rel="noopener noreferrer" href={item.code}>Code</a>
</div>
</div>
</div>
      })}
               </div>  
        </div>
    )
}
