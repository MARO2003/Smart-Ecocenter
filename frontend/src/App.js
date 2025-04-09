import React, {useEffect,useState} from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Locations from './components/Pages/Locations';

function App() {
  const [backendData, setBackendData] = useState([{}])
  useEffect(()=>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data=>{
        setBackendData(data)
      }
    )
  },[])
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/locations" element={<Locations/>} />
    </Routes>
    
  );
}

export default App;