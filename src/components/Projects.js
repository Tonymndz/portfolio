import React from 'react';
import Github from '../imgs/Github.png';
import '../styles/Projects.css';

const ProjectsInfo = [
  {
    title: 'Mini-Discord Clone Site', 
    goal: 'My project goal was to leverage Firebase for channel and messaging features, while advancing my React skills. Through creating a Discord Clone, I aimed to grasp Firebase integration for real-time databases. Implementing channel management, messaging, emojis, and GIFs honed my skills in dynamic user interfaces. This journey expanded my grasp of React, Firebase, Redux, and web technologies like HTML, CSS, and JavaScript, boosting my ability to craft modern web applications.', 
    features: ['Channels', 'Emojis', 'Guest Login', 'Messaging', 'GIFS'], 
    technologies: ['React', 'FireBase', 'Material ui', 'Axios', 'HTML/CSS', 'JavaScript', 'Redux'], 
    demoLink: 'https://tonymndz.github.io/mini-discord-clone/', 
    codeSrcLink: 'https://github.com/Tonymndz/mini-discord-clone',
    CSSIDGIF: 'DiscordGIF',
    h3Color: '#31ffec',
  },
  {
    title: 'Stock Screener Site', 
    goal: 'The project aimed to showcase my React skills by implementing a Stock Screener with features like searchable stocks, informative history graphs, stock ratings, and trending stock highlights. I leveraged Tailwind for styling, React Query for APIs data management, and React for UI development, resulting in a visually appealing  application that shows users an appealing platform to explore stock data.', 
    features: ['Seachable Stocks', 'Stock History Graph', 'Stock Rating', 'Trending Stocks'], 
    technologies: ['Tailwind', 'React', 'Axios', 'Date-fns', 'HTML/CSS', 'JavaScript', 'Highcharts', 'React-Query', 'Material-ui'], 
    demoLink: 'https://tonymndz.github.io/stock-screener/', 
    codeSrcLink: 'https://github.com/Tonymndz/stock-screener',
    CSSIDGIF: 'StockGIF',
    h3Color: '#fd6565',
  },
  {
    title: 'Best Budget Phones Sites', 
    goal: "The project's goal was twofold: to expand my expertise in MongoDB, Redux, and React, while creating a useful website. I was also looking for a new phone options due to battery drain and performance problems. I recognized the project's relevance and seized the chance to merge my interests. And so, I embarked on the longest research journey of discovering so many phones known to man, with their fluctuating prices, and varying specifications.", 
    features: ['User registration', 'Account login', 'Sending comments'], 
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