// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Teams from './pages/Teams';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Bharat from './pages/Bharat';
import Rise from './pages/Rise';
import Vybe from './pages/Vybe';
import Sih from './pages/Sih';
import ClubBazar from './pages/ClubBazar';

function App() {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Bharat" element={<Bharat/>}/>
            <Route path="/Vybe" element={<Vybe/>}/>
            <Route path="/Rise" element={<Rise/>}/>
            <Route path='/Sih' element={<Sih/>}/>
            <Route path='/ClubBazar' element={<ClubBazar/>}/>

          </Routes>
        </div>
       
      
    </Router>
  );
}

export default App;
