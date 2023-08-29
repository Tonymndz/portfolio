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
          <a id="Demo" target="_blank" rel="noopener noreferrer" href="https://www.gooffco.com/">Live Site</a>
          <a id="ViewSrc" href="/">
            <img src={Github} alt="Github Logo" widht="33" height="33" />
            <span>Closed Source</span>
          </a>
        </div>
      </div>
      <div className="RightSide GoOff">
        <h1>Full Stack Intern Developer</h1>
        <h3>My Internship Experience</h3>
        <p>
          At Go off!, I had the pleasure of meeting a multitude of skilled developers from Boston University – individuals upon whom I could rely for assistance whenever I encountered obstacles. Likewise, I gladly extended my aid whenever they found themselves in a bind. Through this collaborative environment, I not only expanded my knowledge but also refined my proficiency in technologies like React, NodeJS, Express, and MySQL.
        </p>
        <h3>Features Added</h3>
        <ul>
          <li>Transformed Figma wireframes to React pages </li>
          <li>Live chats centered around specific dates & topics</li>
          <li>Past/upcoming/trending/highlighted conversations</li>
          <li>Twilio phone and email registration verification</li>
        </ul>
        <h3>Technologies Used</h3>
        <div className="SplitLists">
          <ul id="firstList">
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>Redux</li>
            <li>React-Query</li>
            <li>BootStrap</li>
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
          Not only did I get a lot of experience, but I learned about
          sockets and expanded my knowledge into NodeJS, Express, and
          React!
        </p>
        <h3>Features Added</h3>
        <ul>
          <li>Audio Panel</li>
          <li>Background Panel</li>
          <li>Unfurling Links</li>
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