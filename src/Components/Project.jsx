import React from 'react';
import ProjectCard from './ProjectCard';
import data from './ProjectsData.js';
import "../assets/css/Project.css"
function Project(){
    var cal = data.map(data =>{
        return (<ProjectCard title= {data.Title} desc={data.Description} tech = {data.Technologies} path= {data.Path}  />)
       }) 
    return(
<div className="cardcontainer">
<h1 id="projects">Projects</h1>
       {cal}
</div>
    )
}

export default Project;