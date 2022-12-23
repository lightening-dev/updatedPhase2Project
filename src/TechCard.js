import React from "react";

function TechCard({name, image}) {



    return (
        <li className="card">
            <image src={image} alt={name}/>
            <h4>{name}</h4>
        </li>
    );
}

export default TechContainerCard; 