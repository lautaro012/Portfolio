import './App.css';
import Frontpage from './components/FrontPage/FrontPage';
import React from 'react';
import Proyects from './components/Proyects/Proyects';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Frontpage></Frontpage>
      <Proyects></Proyects>
      
    </div>
  );
}

export default App;
