import React from "react";

function Navbar() {
    return (
        <div>
            <header
                class="bg-gradient-to-b from-slate-500 via-slate-300 to-transparent opacity-90 text-xl font-serif font-bold -mt-7">
                <nav class="mx-auto flex max-w-7xl items-center justify-between px-2 pt-2  lg:px-8" aria-label="Global">
                    <div class="-mb-4">
                        <a href="home.html" class="-m-1.5 p-1.5">
                            <span class="sr-only">Your Company</span>
                            <img class="h-20 w-auto" src="frontEnd\src\images\logo2.png" alt="" />
                        </a>
                    </div>
                    <div class="pt-4">
                        <ul class="flex justify-around items-center px-4">
                            <li className="px-4">Home</li>
                            <li className="px-4">Travel Destinations</li>
                            <li className="px-4">Umrah</li>
                            <li className="px-4">Hajj</li>
                            <li className="px-4">Contact</li>
                            <li className="px-4">About</li>
                        </ul>
                    </div>
                    <div class="pt-4">
                        Account
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default Navbar;