import React from 'react'
import Navbar from './components/Navbar.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/AboutUs.js';
import AboutUs from './components/AboutUs.js';
import Login from './components/Login.js';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Navbar/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<AboutUs/>}/>
      <Route path='login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
