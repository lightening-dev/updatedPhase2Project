

import React, { useEffect, useState } from "react";
import CardFormSubmitPage from "./CardFormSubmitPage";
import CardContainer from "./CardFormSubmitPage";
import FrontEndTechCards from "./FrontEndTechCard";
import HomePage from "./HomePage";
import Login from './Login';
import {Route, Routes} from "react-router-dom"
import NotFound from "./NotFound";
import TechCardContainer from "./TechCardContainer";

function App() {

  
  const [technologies, setTechnologies] = useState([]);
  let backEndTech = technologies.filter((eachTech) => {
    if (eachTech.type === "Back") {
        return <TechCard 
                    name={eachTech.name}
                    image={eachTech.image}/>
    }})
let frontEndTech = technologies.filter((eachTech) => {
            if (eachTech.type === "Front"){
            return <TechCard 
                        name={eachTech.name}
                        image={eachTech.image}
                    />
                } 
            }
                    )
  
  
  
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
          <br>
        <li><Link to="/submit">Submit Technologies</Link></li>
          </br>
        <li><Link to="/cardcontainer">See Web Technologies</Link></li>
      </nav>
            <div>
              <Routes>
                  <Route path="/" element={<HomePage technologies={technologies}/>}/>
                  <Route path="/submit" element={<CardFormSubmitPage newTechHandler={newTechHandler}/>}/>
                  <Route path to="/cardcontainer" element={<TechCardContainer backEndTech={backEndTech} 
                                                                              frontEndTech={frontEndTech}/>}/>
                  <Route path="*" element={<NotFound/>}/>

                  
              </Routes>
              
              <div>
                    
              </div>
            </div>
            </>
        ) ;
}

export default App;
