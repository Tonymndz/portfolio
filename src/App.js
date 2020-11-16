import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import FrontPage from './components/FrontPage';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return <div className="App">
    <FrontPage />
    <Skills />
    <Projects />
    <AboutMe />
  </div>
}

export default App;


/*

<FrontPage />
<Skills />
<Projects />
<AboutMe />

*/