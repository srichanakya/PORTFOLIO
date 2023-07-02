import React from 'react';
import "../assets/css/ProjectCard.css"

function ProjectCard(props){

    var numbers = props.tech
    
    return (
        <div className = "PC">
            <h1 id="title">{props.title}</h1>
            <p id="description">{props.desc}</p>
            <ul>
                {numbers.map(number =>{
                return (<li>{number}</li>)
                })}
            </ul>
            <button><a href={props.path}> Source Code</a></button>
        </div>
    )}



export default ProjectCard;