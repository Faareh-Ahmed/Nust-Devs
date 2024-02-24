import React from "react";
import Navbar from "./components/Navbar";
import './index.css';
import Footer from "./components/Footer";
import HomePg from "./components/home-pg";

function Home() {
    return (
        <div  className="flex flex-col justify-around">
            <Navbar />
            <HomePg />
            <Footer />
        </div>

    );
}

export default Home;