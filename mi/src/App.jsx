import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Contacto from './components/Contacto';
import Home from './components/Home';

function App() {
   return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/contacto" element={<Contacto />} />
       </Routes>
     </BrowserRouter>
   



   );
  }

export default App
