import React from 'react';
import Github from '../imgs/Github.png';
import '../styles/Projects.css';

const ProjectsInfo = [
  {
    title: 'Mini-Discord Clone Site', 
    goal: 'The goal of the Discord Clone was to expand more into using Firebase, Learning to how to implement channel/messaging/ features all while using and gaining more knowledge in React.', 
    features: ['Channels', 'Emojis', 'Guest Login', 'Messaging', 'GIFS'], 
    technologies: ['React', 'FireBase', 'Material ui', 'Axios', 'HTML/CSS', 'JavaScript', 'Redux'], 
    demoLink: 'https://tonymndz.github.io/mini-discord-clone/', 
    codeSrcLink: 'https://github.com/Tonymndz/mini-discord-clone',
    CSSIDGIF: 'DiscordGIF',
    h3Color: '#31ffec',
  },
  {
    title: 'Stock Screener Site', 
    goal: 'The goal of the Stocker Screener was to test out tailwind, React Query, and show off my current React skills with a project that would look cool.', 
    features: ['Seachable Stocks', 'Stock History Graph', 'Stock Rating', 'Trending Stocks'], 
    technologies: ['Tailwind', 'React', 'Axios', 'date-fns', 'HTML/CSS', 'JavaScript', 'Highcharts', 'React-Query', 'Material-ui'], 
    demoLink: 'https://tonymndz.github.io/stock-screener/', 
    codeSrcLink: 'https://github.com/Tonymndz/stock-screener',
    CSSIDGIF: 'StockGIF',
    h3Color: '#fd6565',
  },
  {
    title: 'Best Budget Phones Sites', 
    goal: 'The goal of this project was to expand my knowledge and experience in MongoDB, Redux, and React while creating a website to let people know that these great budget phone options exist!', 
    features: ['Register account', 'Account login', 'Send comments'], 
    technologies: ['React', 'NodeJS', 'TypeScript', 'HTML/CSS', 'JavaScript', 'NodeJS', 'Socket.io', 'Express'], 
    demoLink: 'https://tonymndz.github.io/budget-phones/', 
    codeSrcLink: 'https://github.com/Tonymndz/budget-phones',
    CSSIDGIF: 'PhoneGIF',
    h3Color: '#55b0ec',
  }
]

function Projects() {
  return <div className="Projects">
    <h1>Projects</h1>
    {ProjectsInfo.map(projectInfo => <Project key={projectInfo.title} {...projectInfo} />)}
  </div>
}

function Project({ title, goal, features = [], technologies = [], CSSIDGIF, demoLink, codeSrcLink, h3Color = 'white'}) {
  const technologiesHalves = halfArray(technologies);
  const h3ColorStyle = { color: h3Color }

  return <div className="FlexSplit">
    <div className="LeftSide">
      <h2>{title}</h2>
      <div id={CSSIDGIF} className="BackgroundGIF">
        <a id="Demo" target="_blank" rel="noopener noreferrer" href={demoLink}>Live Demo</a>
        <a id="ViewSrc" target="_blank" rel="noopener noreferrer" href={codeSrcLink}>
          <img src={Github} alt="Github Logo" widht="33" height="33" />
          <span>View Source</span>
        </a>
      </div>
    </div>
    <div className="RightSide">
      <h3 style={h3ColorStyle}>Goal of Project</h3>
      <p>{goal}</p>
      <h3 style={h3ColorStyle}>Notable Features</h3>
      <ul>
        {features.map(feature => <li key={feature}>{feature}</li>)}
      </ul>
      <h3 style={h3ColorStyle}>Technologies Used</h3>
      <div className="SplitLists">
        <ul id="firstList">
          {technologiesHalves[0].map(technology => <li key={technology}>{technology}</li>)}
        </ul>
        <ul>
          {technologiesHalves[1].map(technology => <li key={technology}>{technology}</li>)}
        </ul>
      </div>
    </div>
</div>
}

function halfArray(arr) {
  const middleIndex = arr.length / 2 - 1;
  const aboutMiddleIndex = middleIndex % 2 === 0 ? middleIndex : Math.floor(middleIndex)
  return [arr.slice(0, aboutMiddleIndex + 1), arr.slice(aboutMiddleIndex + 1)]
}

export default Projects;