import React from 'react';
import './App.css';
import Opening from './js/Opening.js';
import NavBar from './js/NavBar.js';
import About from './js/About.js';
import Contact from './js/Contact.js';

function App() {
  return (
    <div>
      <Opening />
      <NavBar />
      <About />
      <Contact />
    </div>
  );
}

export default App;
