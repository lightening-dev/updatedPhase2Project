

import React, { useEffect, useState } from "react";
import CardFormSubmitPage from "./CardFormSubmitPage";
import HomePage from "./HomePage";
import { Route, Switch, Link } from "react-router-dom";
import NotFound from "./NotFound";
import TechCardContainer from "./TechCardContainer";
import TechCard from "./TechCard"

function App() {

  useEffect(() => {
    fetch('http://localhost:3000')
      .then((response) => response.json())
      .then((data) => console.log(data))
  }, [])


  const [technologies, setTechnologies] = useState([]);

  console.log(technologies);

  let backEndTech = technologies.filter((eachTech) => {
    if (eachTech.type === "Back") {
      return <TechCard
        name={eachTech.name}
        image={eachTech.image} />
        
    }
   else {};
  })

  console.log(backEndTech);

  let frontEndTech = technologies.filter((eachTech) => {
    if (eachTech.type === "Front") {
      return <TechCard
        name={eachTech.name}
        image={eachTech.image}
      />
    }
  }
  )

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
        <Switch>
          <Route path="/" element={<HomePage />} />
          <Route path="/submit" element={<CardFormSubmitPage newTechHandler={newTechHandler} />} />
          <Route path="/cardcontainer" element={<TechCardContainer backEndTech={backEndTech}
            frontEndTech={frontEndTech} />} />
          <Route path="*" element={<NotFound />} />


        </Switch>

        <div>

        </div>
      </div>
    </>
  );
}

export default App;


// cody.green@flatironschool.com