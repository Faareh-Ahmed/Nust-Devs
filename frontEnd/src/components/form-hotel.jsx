import React from "react";
import './../index.css';
const Form = () => {
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
                        <p className="steps-p ml-4 pr-3 ">Hotels Information</p>
                    </div>
                    <div className="flex justify-center items-center h-1/4 hover:bg-slate-200">
                        <p className="steps-p ml-4">Available Hotels</p>
                    </div>
                    <div className="flex justify-center items-center h-1/4 hover:bg-slate-200">
                        <p className="steps-p ml-4">Suite Selection</p>
                    </div>
                    <div className="flex justify-center items-center h-1/4 hover:bg-slate-200">
                        <p className="steps-p ml-4">Summary</p>
                    </div>
                </div>
                <div className="w-full flex flex-col px-10 py-6">
                    <h4 className=" text-black text-center mb-4 font-black text-3xl">Choose Your Travel Destination</h4>
                    <div className="overflow-x-auto flexjustify-center items-center">
                        <form action="" className="form-grid w-full" method="post">
                            <div className="col-span-2 -mt-6 font-bold text-2xl font-serif">
                                Hotels Information
                            </div>
                            <div className="form-input-container">
                                <label for="destination" className="form-input-label">Destination City</label>
                                <input type="text" id="destination" name="city_country"
                                    className="form-input px-2 py-1 bg-slate-200 shadow-md" placeholder="Enter Destination City"
                                    autocomplete="off" required />
                            </div>
                            <div className="form-input-container">
                                <label for="number-of-adults" className="form-input-label">Number of Adults</label>
                                <input type="text" id="number-of-adults" className="form-input px-2 py-1 bg-slate-200 shadow-md"
                                    placeholder="eg: 2 Adults" autocomplete="off" required />
                            </div>
                            <div className="form-input-container">
                                <label for="check-in-date" className="form-input-label">Check-In Date</label>
                                <input type="date" id="check-in-date" name="check_in_date"
                                    className="form-input px-2 py-1 bg-slate-200 shadow-md" placeholder="" autocomplete="off"
                                    required />
                            </div>
                            <div className="form-input-container">
                                <label for="check-out-date" className="form-input-label">Check-Out Date</label>
                                <input type="date" id="check-out-date" name="check_out_date"
                                    className="form-input px-2 py-1 bg-slate-200 shadow-md" placeholder="" autocomplete="off"
                                    required />
                            </div>
                            <button type="submit"
                                className="form-input-submit col-span-2 mt-3 bg-slate-500 py-1 shadow-2xl text-white hover:text-black font-medium">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Form;



