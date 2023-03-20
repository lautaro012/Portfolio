import './App.css';
import Frontpage from './components/FrontPage/FrontPage';
import React from 'react';
import Proyects from './components/Proyects/Proyects';
import Navbar2 from './components/Navbar/Navbar2';
import Contact from './components/Contact/Contact';
import Techno from './components/Technologies/Technologies';
import Timeline from './components/Timeline/Timeline';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App dark:bg-gray-400">
      <div>
        <Navbar2></Navbar2>
      </div>
      <div className=' min-h-screen'  id='home'>
        <Frontpage></Frontpage>
      </div>
      <div className=' min-h-screen' id='technologies'>  
        <Techno></Techno>
      </div>
      <div className=' min-h-screen' id='about'>
        <Timeline></Timeline>
      </div>
      <div className=' min-h-screen' id='projects'>
        <Proyects></Proyects>
      </div>
      <div className=' min-h-screen' id='contact'>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
