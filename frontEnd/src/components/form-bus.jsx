import React from "react";

const FormFlight = () => {
    return (

        <div className="-mt-12 rounded-3xl shadow-3xl custom-shadow bg-white w-3/4 text-md font-bold">
            <div className="h-12 bg-slate-300 rounded-tr-3xl rounded-tl-3xl flex justify-evenly">
                <div className="hover:bg-slate-200 w-1/3 h-full rounded-tl-3xl flex justify-center items-center">Book a Hotel</div>
                <div className=" hover:bg-slate-200 w-1/3 h-full  flex justify-center items-center">Book a Flight</div>
                <div className=" hover:bg-slate-200 w-1/3 h-full hover:rounded-tr-3xl flex justify-center items-center">Book a Bus</div>
            </div>
            <div className="flex justify-center flex-row  h-full">
                <div className="w-1/4 rounded-bl-3xl items-center bg-slate-300  ">
                    <div className="flex justify-center items-center h-1/4 hover:bg-slate-200">
                        <p className="steps-p ml-4 pr-3 ">Destination Information</p>
                    </div>
                    <div className="flex justify-center items-center h-1/4 hover:bg-slate-200">
                        <p className="steps-p ml-4">Bus Information</p>
                    </div>
                    <div className="flex justify-center items-center h-1/4 hover:bg-slate-200">
                        <p className="steps-p ml-4">Seat Selection</p>
                    </div>
                    <div className="flex justify-center items-center h-1/4 hover:bg-slate-200">
                        <p className="steps-p ml-4">Summary</p>
                    </div>
                </div>
                <div className="w-full flex flex-col px-10 py-6">
                    <h4 className=" text-black text-center mb-4 font-black text-3xl">Choose Your Travel Destination</h4>
                    <div className="overflow-x-auto flexjustify-center items-center">
                    <form action="" class="form-grid w-full">
                        <div class="col-span-2 -mt-6 font-bold text-2xl font-serif">
                            Destination Information
                        </div>
                        <div class="form-input-container">
                            <label for="departure" class="form-input-label">Departure City</label>
                            <input type="text" id="departure"
                                class="form-input px-2 py-1 bg-slate-200 shadow-md active:border-none"
                                placeholder="Enter Departure City" autocomplete="off" required />
                        </div>
                        <div class="form-input-container">
                            <label for="destination" class="form-input-label">Destination City</label>
                            <input type="text" id="destination" class="form-input px-2 py-1 bg-slate-200 shadow-md"
                                placeholder="Enter Destination City" autocomplete="off" required />
                        </div>
                        <div class="form-input-container">
                            <label for="departure-date" class="form-input-label">Departure Date</label>
                            <input type="date" id="departure-date" class="form-input px-2 py-1 bg-slate-200 shadow-md"
                                placeholder="" autocomplete="off" required />
                        </div>
                        <div class="form-input-container">
                            <label for="bus-service" class="form-input-label">Bus Service</label>
                            <input type="text" id="bus-service" class="form-input px-2 py-1 bg-slate-200 shadow-md"
                                placeholder="Select Bus Service" autocomplete="off" required />
                        </div>
                        <button type="submit"
                            class="form-input-submit col-span-2 mt-3 bg-red-800 py-1 shadow-2xl text-white hover:text-black font-medium">Search</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default FormFlight;




