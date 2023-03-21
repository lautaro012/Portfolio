import './App.css';
import Frontpage from './components/FrontPage/FrontPage';
import React, { useEffect } from 'react';
import Proyects from './components/Proyects/Proyects';
import Navbar2 from './components/Navbar/Navbar2';
import Contact from './components/Contact/Contact';
import Techno from './components/Technologies/Technologies';
import Timeline from './components/Timeline/Timeline';
import Footer from './components/Footer/Footer';
import Data from "./Language.json" 
import { unwatchFile } from 'fs';


function App() {

 const translate = localStorage.getItem("language");
 var datalang:any = Data

  useEffect(()=> {
    if(!translate) {
      localStorage.setItem("language", JSON.stringify(['en']))
    } 
  },[translate])


  return (
    <div className="App dark:bg-gray-400">
      <div>
        <Navbar2 datalang={datalang} ></Navbar2>
      </div>
      <div className=' min-h-screen'  id='home'>
        <Frontpage datalang={datalang}></Frontpage>
      </div>
      <div className=' min-h-screen' id='technologies'>  
        <Techno datalang={datalang}></Techno>
      </div>
      <div className=' min-h-screen' id='about'>
        <Timeline datalang={datalang} ></Timeline>
      </div>
      <div className=' min-h-screen' id='projects'>
        <Proyects datalang={datalang}></Proyects>
      </div>
      <div className=' min-h-screen' id='contact'>
        <Contact datalang={datalang}></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
