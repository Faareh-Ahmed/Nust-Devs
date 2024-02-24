import React from "react";
import Image1 from "../images/bg-destinations.jpg"

function HomePg() {
    return (
        <div className="">
            <img
                src={Image1}
                alt="Hero Background"
                className="absolute h-full w-full object-cover"
            />        
        </div>
    )
}

export default HomePg;