import './App.css';
import Frontpage from './components/FrontPage/FrontPage';
import React, { SetStateAction, useEffect, useState } from 'react';
import Proyects from './components/Proyects/Proyects';
import Navbar2 from './components/Navbar/Navbar2.jsx';
import Contact from './components/Contact/Contact';
import Techno from './components/Technologies/Technologies';
import Timeline from './components/Timeline/Timeline';
import Footer from './components/Footer/Footer';
import Data from "./Language.json" 


function App() {


 var datalang:any = Data
 const [setLanguage, useSetLanguage] = useState(localStorage.getItem("language"))
 const [render, setRender] = useState(false)
 const [dataLanguage, setDataLanguage] = useState({})


  useEffect(() => {
   // console.log('testing')
  }, [render])

  useEffect(()=> {
    if(!setLanguage) {
      localStorage.setItem("language", JSON.stringify(['en']))
    } 
  },[setLanguage])
  
  const rendertest = (num:number) => {
    //render ? setRender(false) : setRender(true)
    let currentlanguage = localStorage.getItem('language')
    currentlanguage === 'es' ? setDataLanguage(Data.es) : setDataLanguage(Data.en)
  }


  return (
    <div className="App dark:bg-gray-400 ">
      <div >
        <Navbar2 datalang={datalang} rendertest={rendertest} ></Navbar2>
      </div>
      <div className='ml-4 mr-4 min-h-screen lg:ml-40 lg:mr-40'  id='home'>
        <Frontpage dataLanguage={datalang} ></Frontpage>
      </div>
      <div className='ml-4 mr-4 min-h-screen lg:ml-40 lg:mr-40' id='technologies'>  
        <Techno datalang={datalang}></Techno>
      </div>
      <div className='ml-4 mr-4 lg:ml-40 lg:mr-40 min-h-screen' id='about'>
        <Timeline datalang={datalang} ></Timeline>
      </div>
      <div className='ml-4 mr-4 lg:ml-40 lg:mr-40 min-h-screen' id='projects'>
        <Proyects datalang={datalang}></Proyects>
      </div>
      <div className='ml-4 mr-4 min-h-screen lg:ml-40 lg:mr-40' id='contact'>
        <Contact datalang={datalang}></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
