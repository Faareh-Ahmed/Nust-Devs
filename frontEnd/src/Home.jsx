import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import './index.css';
import Footer from "./components/footer";
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