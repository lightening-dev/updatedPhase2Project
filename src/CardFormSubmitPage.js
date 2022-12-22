import React from "react";


function CardFormSubmitPage({}) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    
    const submitedTech = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, image: image })
    
    function handleSubmit(event) {
            
        fetch('http://localhost:3000', submitedTech)
        .then((response) => response.json())
        .then((data) => console.log(data)) 
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
            <input type="submit" value="Submit" />
        </form>


    );
}


export default CardFormSubmitPage;