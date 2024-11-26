import React from "react";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import './App.css';
import Skills from "./components/skills/skills";
import Contact from './components/contact/contact';

function App() {
  return (
    <div >
     
     <Navbar />
     <Intro />
     <Skills />
     <Contact />
    
    </div>
  );
}

export default App;
