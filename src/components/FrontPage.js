import React from 'react';
import Email from '../imgs/Email.png';
import Resume from '../imgs/Resume.png';
import Github from '../imgs/Github.png';
import '../styles/FrontPage.css';


function FrontPage() {
  return <div className="FrontPage">
    <h1>Tony Mendez</h1>
    <h2>Front-end {'&'} Back-end Developer</h2>
    <div className="FlexCenter">
      <div>
        <a href="https://github.com/Tonymndz/" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="Github Icon"/><br/>
          <span>Github</span>
        </a>
      </div>
      <div className="Resume">
        <a href="https://tonymndz.github.io/portfolio/Tony's%20Resume.pdf" target="_blank" rel="noopener noreferrer">
          <img src={Resume} alt="Resume Icon"/><br/>
          <span>Resume</span>
        </a>
      </div>
      <div>
        <a href="mailto:Tonymndz1141@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={Email} alt="Email Icon"/><br/>
          <span>Email</span>
        </a>
      </div>
    </div>
  </div>
}

export default FrontPage;