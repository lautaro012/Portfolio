import './App.css';
import Frontpage from './components/FrontPage/FrontPage';
import React from 'react';
import Proyects from './components/Proyects/Proyects';
import Navbar2 from './components/Navbar/Navbar2';
import Contact from './components/Contact/Contact';
import Techno from './components/Technologies/Technologies';
import Timeline from './components/Timeline/Timeline';


function App() {
  return (
    <div className="App dark:bg-gray-400">
      <Navbar2></Navbar2>
      <Frontpage></Frontpage>
      <Techno></Techno>
      <Timeline></Timeline>
      <Proyects></Proyects>
      <Contact></Contact>
    </div>
  );
}

export default App;
