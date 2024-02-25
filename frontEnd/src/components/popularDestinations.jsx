// PopularDestinations.js
import React from 'react';
import Paris from './../images/img-1.jpg'
import London from './../images/img-3.jpg'
import Amsterdam from './../images/img-4.jpg'
import Australia from './../images/img-5.jpg'
import NewYork from './../images/img-2.jpg'
import Japan from './../images/img-6.jpg'
const PopularDestinations = () => {
    return (
        <div className='pt-10 bg-slate-400'>
            <div className="flex text-4xl justify-center items-center font-extrabold text-gray-100 mb-5">
                <h1 className="text-slate-800 px-4 py-2 pb-2 text-5xl">Popular Destinations</h1>
            </div>
            <div className="flex justify-center items-center h-screen">
                <div className="grid grid-cols-3 gap-8 px-6 w-3/4">
                    <div className="relative group hover:scale-105 transition-all duration-300 cursor-pointer">
                        <a href="destinations.html">
                            <img src={Paris} alt="Paris" className="w-full h-auto" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="text-white text-center text-xl bg-black px-5 py-2 bg-opacity-80 rounded-xl shadow-xl">
                                    <p>Paris</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="relative group hover:scale-105 transition-all duration-300 cursor-pointer">
                        <a href="destinations.html">
                            <img src={NewYork} alt="New York" className="w-full h-auto" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="text-white text-center text-xl bg-black px-5 py-2 bg-opacity-80 rounded-xl shadow-xl">
                                    <p>New York</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="relative group hover:scale-105 transition-all duration-300 cursor-pointer">
                        <a href="destinations.html">
                            <img src={London} alt="London" className="w-full h-auto" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="text-white text-center text-xl bg-black px-5 py-2 bg-opacity-80 rounded-xl shadow-xl">
                                    <p>London</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="relative group hover:scale-105 transition-all duration-300 cursor-pointer">
                        <a href="destinations.html">
                            <img src={Amsterdam} alt="Amsterdam" className="w-full h-auto" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="text-white text-center text-xl bg-black px-5 py-2 bg-opacity-80 rounded-xl shadow-xl">
                                    <p>Amsterdam</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="relative group hover:scale-105 transition-all duration-300 cursor-pointer">
                        <a href="destinations.html">
                            <img src={Australia} alt="Australia" className="w-full h-auto" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="text-white text-center text-xl bg-black px-5 py-2 bg-opacity-80 rounded-xl shadow-xl">
                                    <p>Australia</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="relative group hover:scale-105 transition-all duration-300 cursor-pointer">
                        <a href="destinations.html">
                            <img src={Japan} alt="Japan" className="w-full h-auto" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="text-white text-center text-xl bg-black px-5 py-2 bg-opacity-80 rounded-xl shadow-xl">
                                    <p>Japan</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularDestinations;
