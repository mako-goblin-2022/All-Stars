import React from "react"
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Stars from './components/Stars';


function App() {
  return (
    <div className="App" >
      <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/stars' element={<Stars/>}/>
          {/* <Route path='/continents/:name/:code' element={<Navbar/>}/> */}
        </Routes>
    </div>
    </div>
  );
}

export default App;
