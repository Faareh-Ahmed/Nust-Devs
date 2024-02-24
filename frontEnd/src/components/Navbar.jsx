import React from "react";


function Navbar() {
    // <div classNameName="Nav">
    //     <div>
    //         <li>Home</li>
    //         <li>Tourist Destinations</li>
    //         <li>Umrah</li>
    //         <li>Hajj</li>
    //     </div>
    // </div>
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-2 pt-2  lg:px-8" aria-label="Global">
        <div className="-mb-4">
            <a href="home.html" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-20 w-auto" src="./images/logo2.png" alt="" />
            </a>
        </div>
        <div className="pt-4">
            <ul className="flex justify-around items-center px-4">
                <li><a href="home.html">Home</a></li>
                <li><a href="hotels.html">Hotels</a></li>
                <li><a href="flights.html">Flights</a></li>
                <li><a href="bus.html">Bus</a></li>
                <li><a href="destinations.html">Popular Destinations</a></li>
                <li><a href="aboutus.html">About Us</a></li>
            </ul>
        </div>
        <div className="pt-4">
            Account
        </div>
    </nav>

}

export default Navbar;