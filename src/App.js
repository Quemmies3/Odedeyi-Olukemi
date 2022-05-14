import './App.css';

import React from 'react';
import About from './components/about';
import Experience from './components/experience';
import Education from './components/education';
import Skills from './components/skills';
import Interests from './components/interests';
import Contact from './components/contact';


function App() {
  return (
    <div>
      <About />
      <Experience />
      <Education />
      <Skills />
      <Interests />
      <Contact />
    </div>
  );
}

export default App;
