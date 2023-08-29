import React from 'react';
import Email from '../imgs/Email.png';
import Resume from '../imgs/Resume.png';
import Github from '../imgs/Github.png';
import '../styles/AboutMe.css';


function AboutMe() {
  return <div className="AboutMe">
    <h1>About Me</h1>
    <h2>Hi, I'm Tony Mendez</h2>
    <div className="FlexCentering">
    <p>
      I'm a developer who likes learning and creating things. I enjoy learning new technologies and libraries to expand my skills to figure out many ways to create many things.
    </p>
    </div>
    <div className="FlexRightBottom">
    <div>
        <a href="https://github.com/Tonymndz/" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="Github Icon" width="33" height="33"/>
        </a>
      </div>
      <div className="ResumeLogo">
        <a href="https://docs.google.com/document/d/1Cc60sjvCFzxi_O11bJxPgVDYOKvGKzkLiXig0yO5SSw/edit#" target="_blank" rel="noopener noreferrer">
          <img src={Resume} alt="Resume Icon" width="33" height="33"/>
        </a>
      </div>
      <div>
        <a href="mailto:Tonymndz1141@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={Email} alt="Email Icon" width="33" height="33"/>
        </a>
      </div>
    </div>
  </div>
}

export default AboutMe;