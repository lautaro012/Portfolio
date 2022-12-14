import './App.css';
import Frontpage from './components/FrontPage/FrontPage';
import React from 'react';
import Proyects from './components/Proyects/Proyects';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Techno from './components/Technologies/Technologies';
import Timeline from './components/Timeline/Timeline';


function App() {
  return (
    <div className="App dark:bg-gray-400">
      <Navbar></Navbar>
      <Frontpage></Frontpage>
      <Techno></Techno>
      <Timeline></Timeline>
      <Proyects></Proyects>
      <Contact></Contact>
    </div>
  );
}

export default App;
