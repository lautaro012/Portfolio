import './App.css';
import Frontpage from './components/FrontPage/FrontPage';
import React, { useEffect, useState } from 'react';
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
 const [dataLanguage, setDataLanguage] = useState({})




  useEffect(()=> {
    if(!setLanguage) {
      localStorage.setItem("language", JSON.stringify(['en']))
    } 
  },[setLanguage])
  
  const rendertest = (num:number) => {
    let currentlanguage = localStorage.getItem('language')
    currentlanguage === 'es' ? setDataLanguage(Data.es) : setDataLanguage(Data.en)
  }


  
  return (
    <div className="App dark:bg-gray-900 duration-500 dark:text-gray-200 ">
      <div >
        <Navbar2 datalang={datalang} rendertest={rendertest} ></Navbar2>
      </div>
      <div className='my-4 pt-12 lg:ml-40 lg:mr-40'  id='home'>
        <Frontpage dataLanguage={datalang} ></Frontpage>
      </div>
      <div className='mx-4 py-8 lg:ml-40 lg:mr-40' >  
        <Techno datalang={datalang}></Techno>
      </div>
      <div className='ml-4 mr-4 lg:ml-40 lg:mr-40' >
        <Timeline datalang={datalang} ></Timeline>
      </div>
      <div className='ml-4 mr-4 lg:ml-40 lg:mr-40 ' id='projects'>
        <Proyects datalang={datalang}></Proyects>
      </div>
      <div className='ml-4 mr-4 lg:ml-40 lg:mr-40 lg:ml-40' id='contact'>
        <Contact datalang={datalang}></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
