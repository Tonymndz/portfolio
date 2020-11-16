import React from 'react';
import Github from '../imgs/Github.png';
import '../styles/Projects.css';

function Projects() {
  return <div className="Projects">
    <h1>Projects</h1>
    <div className="FlexSplit">
      <div className="LeftSide">
        <h2>Best Budget Phones Sites</h2>
        <div className="BackImg">
          <a id="Demo" target="_blank" href="http://under-120.bestbudgetphones.technology/">Live Demo</a>
          <a id="ViewSrc" target="_blank" href="https://github.com/Tonymndz/Budget-Phones-Under120-Frontend">
            <img src={Github} alt="Github Logo" widht="33" height="33" />
            <span>View Source</span>
          </a>
        </div>
      </div>
      <div className="RightSide">
        <h3>Goal of Project</h3>
        <p>The goal of the project was to create a well designed site, provide value to audience, and have interactive functionallty.</p>
        <h3>Notable Features</h3>
        <ul>
          <li>Register account</li>
          <li>Account login</li>
          <li>Send comments</li>
        </ul>
        <h3>Technologies Used</h3>
        <div className="SplitLists">
          <ul id="firstList">
            <li>React</li>
            <li>Redux</li>
            <li>TypeScript</li>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
          </ul>
          <ul>
            <li>NodeJS</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Express</li>
            <li>Json Web Token</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
}

export default Projects;