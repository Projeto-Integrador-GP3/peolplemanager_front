import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

import './App.css'; 

import Footer from './components/footer/Footer'; 

import Navbar from './components/navbar/Navbar'; 

import Home from './pages/home/Home'; 


 

 

function App() { 

  return ( 

    <> 

    <BrowserRouter> 

      <Navbar /> 

      <div className="min-h-[80vh]"> 

      <Routes> 

        <Route path="/" element={<Home />} /> 

        <Route path="/BuscarColaborador" element={<BuscarColaborador />} /> 

        <Route path="/BuscarCargo" element={<BuscarCargo />} /> 

      </Routes> 

      </div> 

      <Footer /> 

    </BrowserRouter> 

    </> 

  ); 

} 

 

export default App; 

 

 