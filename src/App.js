

import React, { useEffect, useState } from "react";
import CardFormSubmitPage from "./CardFormSubmitPage";
import CardContainer from "./CardFormSubmitPage";
import FrontEndTechCards from "./FrontEndTechCard";
import HomePage from "./HomePage";
import Login from './Login';

function App() {

  const [newTech, setHandleNewTech] = useState({})
  const [technologies, setTechnologies] = useState([]);
  
  
  
  useEffect(() => {
      fetch('http://localhost:3000')
      .then((response) => response.json())
      .then((data) => setTechnologies(data))
  }, []) 

  function newTechHandler(newTech) {
    setHandleNewTech([...newTech, newTech])
  }

  return ( 
            <div>
              <NavBar />
              
              <HomePage technologies={technologies} />
              <CardFormSubmitPage newTechHandler={newTechHandler}/>
              <div>
                    
              </div>
            </div>
            
        ) ;
}

export default App;
