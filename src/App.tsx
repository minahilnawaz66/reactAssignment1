import { useState } from 'react';
// import './App.css';
import Routing from './routing/Routing.tsx';
import NavBar from './components/pages/molecule/NavBar.tsx';


import { BrowserRouter , Routes , Route } from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routing />
    </BrowserRouter>
    </>
  )
}

export default App

// Container - BrowserRouter
// -Routes - routes
// -Route1 -individual routes
// -Route2 -individual routes
// -Route3 -individual routes
// -navigational components
