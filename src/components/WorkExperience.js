import React from 'react';
import Github from '../imgs/Github.png';
import '../styles/WorkExperience.css';

function WorkExperience() {
  return <div className="WorkExperience">
    <h1>Work Experience</h1>
    <div className="FlexSplit">  {/* Go Off Work Experience */}
      <div className="LeftSide">
        <h2>Go Off!</h2>
        <div className="BackImgGoOff">
          <a id="Demo" target="_blank" rel="noopener noreferrer" href="https://go-off.co/">Live Site</a>
          <a id="ViewSrc" target="_blank" href="##">
            <img src={Github} alt="Github Logo" widht="33" height="33" />
            <span>Closed Source</span>
          </a>
        </div>
      </div>
      <div className="RightSide GoOff">
        <h1>Full Stack Intern Developer</h1>
        <h3>My Internship Experience</h3>
        <p>
          At Go off!, I met a lot of talented Bosten University Developers! 
          Who I could depend on for help whenever I was stuck and even help them out whenever they were stuck. <br />And I definitely learned a lot more plus honed more of my skills in React, NodeJS, Express
          & MySQL!
        </p>
        <h3>Features I Added</h3>
        <ul>
          <li>REST Api Routes joining/creating & fetching upcoming/past joined convos</li>
          <li>Multiple pages from designed wireframes</li>
          <li>REST Api Routes register & login</li>
          <li>Twillio notifications on register & login</li>
        </ul>
        <h3>Technologies Used</h3>
        <div className="SplitLists">
          <ul id="firstList">
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>Redux</li>
            <li>React-Query</li>
            <li>BootSTrap</li>
          </ul>
          <ul>
            <li>NodeJS</li>
            <li>MySQL</li>
            <li>Express</li>
          </ul>
        </div>
      </div>
    </div>

    {/*  */}

    <div className="FlexSplit">
      <div className="LeftSide">
        <h2>Adventure Networks trychats</h2>
        <div className="BackImg">
          <a id="Demo" target="_blank" rel="noopener noreferrer" href="https://trychats.com/#/room/Chatting">Live Site</a>
          <a id="ViewSrc" target="_blank" rel="noopener noreferrer" href="https://github.com/AdventurePizza/chat">
            <img src={Github} alt="Github Logo" widht="33" height="33" />
            <span>View Source</span>
          </a>
        </div>
      </div>
      <div className="RightSide">
        <h1>Full Stack Intern Developer</h1>
        <h3>My Internship Experience</h3>
        <p>
            In my time at Adventure Networks, I collaborated with creative
            designers, managers, and developers about their concepts and future
            ideas for <a target="_blank" rel="noopener noreferrer" href="https://trychats.com">trychats</a> some seen at <a target="_blank" rel="noopener noreferrer" href="https://whimsical.com/trychats-DeaXeiNKwQJwX7UZvrEkXH">trychats whimsical</a>.
            <br/>
            Not only did I get a lot of experience, but I learned about
            sockets and expanded my knowledge into NodeJS, Express, and
            React!
          </p>
        <h3>Features I Added</h3>
        <ul>
          <li>Audio Panel</li>
          <li>Background Panel</li>
          <li>Unfurling Link</li>
          <li>Whiteboard Panel</li>
        </ul>
        <h3>Technologies Used</h3>
        <div className="SplitLists">
          <ul id="firstList">
            <li>React</li>
            <li>TypeScript</li>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
          </ul>
          <ul>
            <li>NodeJS</li>
            <li>Sockets</li>
            <li>Express</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
}

export default WorkExperience;