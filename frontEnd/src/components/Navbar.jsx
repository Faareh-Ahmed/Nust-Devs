import React from 'react';
import logo from './../images/logo2.png'
const Navbar = () => {
  return (
    <header className="bg-gradient-to-b from-slate-100 via-white to-transparent opacity-90 text-xl font-serif font-bold -mt-7">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-2 pt-2 lg:px-8" aria-label="Global">
        <div className="-mb-4">
          <a href="home.html" className="-m-1.5 p-1.5">
            <span className="sr-only">Jet-Set Journey</span>
            <img className="h-20 w-auto" src={logo} alt="" />
          </a>
        </div>
        <div className="pt-4">
          <ul className="flex justify-around items-center">
            <li className='px-4'><a href="">Home</a></li>
            <li className='px-4'><a href="">Bookings</a></li>
            <li className='px-4'><a href="">Popular Destinations</a></li>
            <li className='px-4'><a href="">Umrah</a></li>
            <li className='px-4'><a href="">Hajj</a></li>
            <li className='px-4'><a href="">About Us</a></li>
          </ul>
        </div>
        <div className="pt-4">
          Account
        </div>
      </nav>
    </header>
  );
};

export default Navbar;