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
      I'm a self-taught web developer who likes programming and creating things. 
      I enjoy learning new technologies and libaries to expand my knowledge in web
      development and to figure out many ways to create many things.
    </p>
    </div>
    <div className="FlexRightBottom">
    <div>
        <a href="https://github.com/Tonymndz" target="_blank" >
          <img src={Github} alt="Github Icon" width="33" height="33"/>
        </a>
      </div>
      <div className="ResumeLogo">
        <a href="https://docs.google.com/document/d/1Cc60sjvCFzxi_O11bJxPgVDYOKvGKzkLiXig0yO5SSw/edit#" target="_blank" >
          <img src={Resume} alt="Resume Icon" width="33" height="33"/>
        </a>
      </div>
      <div>
        <a href="https://github.com/Tonymndz" target="_blank" >
          <img src={Email} alt="Email Icon" width="33" height="33"/>
        </a>
      </div>
    </div>
  </div>
}

export default AboutMe;