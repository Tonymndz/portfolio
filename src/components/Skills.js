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
import Socket from '../imgs/Socket.png';
import '../styles/Skills.css';

function Skills() {
  return <div className="Skills">
    <h1>Skills</h1>
    <div className="FlexSpace">
      <div>
        <h2>Front-end</h2>
        <div className="FlexClamp">
          <a href="https://www.w3schools.com/js/DEFAULT.asp" target="_blank" rel="noopener noreferrer"><img src={JS} alt="JS" /></a>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer"><img src={TS} alt="TS" /></a>
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img src={ReactLogo} alt="ReactLogo" /></a>
          <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer"><img src={CSS} alt="CSS" /></a>
          <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer"><img src={Redux} alt="Redux" /></a>
          <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer"><img src={HTML} alt="HTML" /></a>
        </div>
      </div>
      <div>
        <h2>Back-end</h2>
        <div className="FlexClamp">
          <a href="https://nodejs.org/en/"><img src={NodeJS} alt="NodeJS" /></a>
          <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer"><img src={MongoDB} alt="MongoDB" /></a>
          <a href="https://www.npmjs.com/package/express" target="_blank" rel="noopener noreferrer"><img src={Express} alt="Express" /></a>
          <a href="https://socket.io/"><img src={Socket} alt="Socket" /></a>
          <a href="https://jwt.io/" target="_blank" rel="noopener noreferrer"><img src={JWT} alt="JWT" /></a>
          <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer"><img src={PostgreSQL} alt="PostgreSQL" /></a>
        </div>
      </div>
    </div>
  </div>
}

export default Skills;