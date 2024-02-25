import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import './index.css';
import Footer from "./components/Footer";
import HomePg from "./components/home-pg";
import Form from "./components/form-hotel";
import PopularDestinations from "./components/popularDestinations";
import Plan from "./components/plan";
// import flightForm from "./components/flight-form"

// import axios from 'axios';


// const options = {
//     method: 'GET',
//     url: 'https://trueway-places.p.rapidapi.com/FindPlacesNearby',
//     params: {
//         location: '37.783366,-122.402325',
//         type: 'cafe',
//         radius: '180',
//         language: 'en'
//     },
//     headers: {
//         'X-RapidAPI-Key': '79e636b089msh997aa1c461e0614p10c0cbjsn8c62dd36bb3c',
//         'X-RapidAPI-Host': 'trueway-places.p.rapidapi.com'
//     }
// };

// try {
//     const response = await axios.request(options);
//     console.log(response.data);
// } catch (error) {
//     console.error(error);
// }

function Home() {


    // useEffect(() => {

    //         axios.request(options).then(function(response){
    //             console.log(response.data);
    //         }).catch(function (error) {
    //         console.error(error);
    //     });

    // }, []);







    return (
        <div className="bg-img-main">
            <Navbar />
            <HomePg />
            <div className="bg-white bg-opacity-90 flex justify-center flex-col items-center">
                <Form />
                <Plan />
                <PopularDestinations />
            </div>

            <Footer />
        </div>

    );
}

export default Home;