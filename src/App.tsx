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
      <div>
        <Navbar2></Navbar2>
      </div>
      <div className='duration-500'  id='home'>
        <Frontpage></Frontpage>
      </div>
      <div className='duration-500' id='technologies'>  
        <Techno></Techno>
      </div>
      <div className='duration-500' id='about'>
        <Timeline></Timeline>
      </div>
      <div className='duration-500' id='projects'>
        <Proyects></Proyects>
      </div>
      <div className='duration-500' id='contact'>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
