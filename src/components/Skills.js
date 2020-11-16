import React from 'react';
import CSS from '../imgs/CSS.png';
import Express from '../imgs/Express.png';
import JS from '../imgs/JS.png';
import HTML from '../imgs/HTML.png';
import MongoDB from '../imgs/MongoDB.png';
import ReactLogo from '../imgs/React.png';
import Redux from '../imgs/Redux.png';
import JWT from '../imgs/JWT.png';
import PostgreSQL from '../imgs/PostgreSQL.png';
import NodeJS from '../imgs/NodeJS.png';
import TS from '../imgs/TS.png';
import '../styles/Skills.css';

function Skills() {
  return <div className="Skills">
    <h1>Skills</h1>
    <div className="FlexSpace">
      <div>
        <h2>Front-end</h2>
        <div className="FlexClamp">
          <img src={JS} alt="JS" />
          <img src={TS} alt="TS" />
          <img src={ReactLogo} alt="ReactLogo" />
          <img src={CSS} alt="CSS" />
          <img src={Redux} alt="Redux" />
          <img src={HTML} alt="HTML" />
        </div>
      </div>
      <div>
        <h2>Back-end</h2>
        <div className="FlexClamp">
          <img src={NodeJS} alt="NodeJS" />
          <img src={MongoDB} alt="MongoDB" />
          <img src={Express} alt="Express" />
          <img src={JWT} alt="JWT" />
          <img src={PostgreSQL} alt="PostgreSQL" />
        </div>
      </div>
    </div>
  </div>
}

export default Skills;