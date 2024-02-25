import React from "react";
import plan1 from "./../images/plan-1.jpg";
import plan2 from "./../images/plan-2.jpg";
import plan3 from "./../images/plan-3.jpg";


const Plan = () => {
    return (
        <div className="mt-10 bg-img-plan">
            <h1 className="flex justify-center text-5xl text-white font-mono font-bold">Start Planning Your Next Trip</h1>
            <div className="overflow-x-auto flex py-4">
                <div className="cursor-pointer rounded-xl bg-white shadow-lg border-gray-200 hover:shadow-xl min-w-self ml-2 flex flex-col">
                    <div className="relative flex items-end overflow-hidden rounded-xl ">
                        <img className="w-full h-48" src={plan1}
                            alt="wallpaper" />
                    </div>
                    <div className="mt-1 p-2">
                        <h2 className="text-slate-700 text-xl font-extrabold">Explore Our Destinations</h2>
                        <div className="text-xs p-1 border-t-0 border-b-2 border-gray-300 mt-20">
                        </div>
                        <div className="mt-3 flex items-end justify-between">
                            <p>
                                <span className="text-lg font-bold text-orange-500">$1,421</span>
                                <span className="text-sm text-slate-400">/night</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="cursor-pointer rounded-xl bg-white shadow-lg border-gray-200 hover:shadow-xl min-w-self ml-2 flex flex-col">
                    <div className="relative flex items-end overflow-hidden rounded-xl ">
                        <img className="w-full h-48" src={plan2}
                            alt="wallpaper" />
                    </div>
                    <div className="mt-1 p-2">
                        <h2 className="text-slate-700 text-xl font-extrabold">Your Perfect Holiday Awaits</h2>
                        <div className="text-xs p-1 border-t-0 border-b-2 border-gray-300 mt-20">
                        </div>
                        <div className="mt-3 flex items-end justify-between">
                            <p>
                                <span className="text-lg font-bold text-orange-500">$1,421</span>
                                <span className="text-sm text-slate-400">/night</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="cursor-pointer rounded-xl bg-white shadow-lg border-gray-200 hover:shadow-xl min-w-self ml-2 flex flex-col">
                    <div className="relative flex items-end overflow-hidden rounded-xl ">
                        <img className="w-full h-48" src={plan3}
                            alt="wallpaper" />
                    </div>
                    <div className="mt-1 p-2">
                        <h2 className="text-slate-700 text-xl font-extrabold">Travel Requirements</h2>
                        <div className="text-xs p-1 border-t-0 border-b-2 border-gray-300 mt-20">
                        </div>
                        <div className="mt-3 flex items-end justify-between">
                            <p>
                                <span className="text-lg font-bold text-orange-500">$1,421</span>
                                <span className="text-sm text-slate-400">/night</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Plan;