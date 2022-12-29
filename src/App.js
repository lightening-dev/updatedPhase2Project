

import React, { useEffect, useState } from "react";
import CardFormSubmitPage from "./CardFormSubmitPage";
import CardContainer from "./CardFormSubmitPage";
import FrontEndTechCards from "./FrontEndTechCard";
import HomePage from "./HomePage";
import Login from './Login';
import {Route, Routes} from "react-router-dom"

function App() {

  
  const [technologies, setTechnologies] = useState([]);
  
  
  
  useEffect(() => {
      fetch('http://localhost:3000')
      .then((response) => response.json())
      .then((data) => setTechnologies(data))
  }, []) 

  function newTechHandler(newTech) {
    setTechnologies([...technologies, newTech])
  }

  return ( 
      <>
      <nav>
        <li><Link to="/"></Link>Home</li>
        <li></li>

      </nav>
            <div>
              <Routes>
                 <Route path="/" element={<HomePage technologies={technologies}/>}/>
                  <Route path="/submit" element={<CardFormSubmitPage newTechHandler={newTechHandler}/>}/>
                  
                  <CardFormSubmitPage newTechHandler={newTechHandler}/>
              </Routes>
              
              <div>
                    
              </div>
            </div>
            </>
        ) ;
}

export default App;
