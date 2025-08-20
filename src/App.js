import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import FrontPage from './components/FrontPage';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';

function App() {
  return <div className="App">
    <FrontPage />
    <Skills />
    <WorkExperience />
    <Projects />
    <AboutMe />
  </div>
}

export default App;


/*
Lorem Ipsum

<FrontPage />
<Skills />
<Projects />
<AboutMe />

*/
