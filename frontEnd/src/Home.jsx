import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import './index.css';
import Footer from "./components/footer";
import HomePg from "./components/home-pg";
import bgImg from "./images/bg-destinations.jpg"

function Home() {

    return (
        // <div className="flex flex-col justify-around">
        //     <img src={bgImg}
        //         className="bg-cover bg-no-repeat bg-fixed"
        //     />
        <div className="h-screen bg-img bg-img-main">
            <Navbar />
            <HomePg />
            <Footer />
        </div>

    );
}

export default Home;