import React, { useState } from "react";


function CardFormSubmitPage({newTechHandler}) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [type, setTypeofTech] = useState("");

    
    const submitedTech = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, image: image , type: type})
    }
    
    function handleSubmit() {
            
        fetch('http://localhost:3000', submitedTech)
        .then((response) => response.json())
        .then((data) => newTechHandler(data)) 
    }
    return (
        
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" onChange={(event) => setName(event.target.value)} />
            </label>
            <input type="submit" value="Submit" />
            <label>
                Image Address:
                <input type="text" name="ImageAddress" onChange={(event) => setImage(event.target.value)} />
            </label>
            
                <select value={this.state.value} onChange={setTypeofTech(value)}>
                    <option value="Front">Front End Technology</option>
                    <option value="Back">Back End Technology</option>
                </select>
            <input type="submit" value="Submit" />
        </form>


    );
}


export default CardFormSubmitPage;