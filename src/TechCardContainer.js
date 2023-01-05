import React from "react";
import { useState } from "react";

function TechCardContainer({backEndTech, frontEndTech}) {

        
    
    
    
    
    
    const {toggleBtn, setToggleBtn} = useState(false);

        function handleClick() {
            if (toggleBtn === false) {
                return !toggleBtn;
            }
        }

    return( <div>
                <btn onClick={(e) => handleClick(e)}>
                    {toggleBtn ? backEndTech : frontEndTech}
                </btn>
        </div>)


}

export default TechCardContainer; 