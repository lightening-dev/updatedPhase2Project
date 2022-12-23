import React from "react";



function HomePage({technologies}) {


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




    return (
        <TechCardContainer back={backEndTech} front={frontEndTech}/>

    )
}

export default HomePage; 