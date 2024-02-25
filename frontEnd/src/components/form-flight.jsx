import React from "react";

const FormLight = () => {
    return(
        <div className="-mt-12 rounded-3xl shadow-3xl custom-shadow bg-white w-3/4">
            <div className="h-12 bg-slate-300 rounded-tr-3xl rounded-tl-3xl flex justify-evenly">
                <div className=" hover:bg-slate-200 w-1/3 h-full hover:rounded-tl-3xl flex justify-center items-center">Book a Flight</div>
                <div className=" hover:bg-slate-200 w-1/3 h-full  flex justify-center items-center">Book a Hotel</div>
                <div className=" hover:bg-slate-200 w-1/3 h-full hover:rounded-tr-3xl flex justify-center items-center">Book a Bus</div>
            </div>
            <div class="flex items-center justify-center flex-col px-10 py-6">  
                <h4 class=" text-white text-center mb-4 font-black text-3xl">Choose Your Travel Destination</h4>
                <div class="bg-white px-10 py-6 rounded-md shadow-2xl w-3/4 flex flex-row min-h-96">
                    <div class="w-1/3 bg-slate-500 mr-10 rounded-lg flex flex-col items-center text-white">
                        <div class="steps h-1/4">
                            <h2 class="rounded-full px-2 border-white border-2">1</h2>
                            <p class="steps-p ml-4 pr-3">Destination Information</p>
                        </div>
                        <div class="steps h-1/4">
                            <h2 class="rounded-full px-2 border-white border-2">2</h2>
                            <p class="steps-p ml-4">Flights Information</p>
                        </div>
                        <div class="steps  h-1/4">
                            <h2 class="rounded-full px-2 border-white border-2">3</h2>
                            <p class="steps-p ml-4">Seat Selection</p>
                        </div>
                        <div class="steps  h-1/4">
                            <h2 class="rounded-full px-2 border-white border-2">4</h2>
                            <p class="steps-p ml-4">Summary</p>
                        </div>
                    </div>
                    <div class="overflow-x-auto flex w-3/4">
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
                                    placeholder="Enter Article Source" autocomplete="off" required />
                            </div>
                            <div class="form-input-container">
                                <label for="flight-service" class="form-input-label">Airline Service</label>
                                <input type="text" id="flight-service" class="form-input px-2 py-1 bg-slate-200 shadow-md"
                                    placeholder="Select Airline Service" autocomplete="off" required />
                            </div>
                            <button type="submit"
                                class="form-input-submit col-span-2 mt-3 bg-slate-500 py-1 shadow-2xl text-white hover:text-black font-medium">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default FormFlight;




