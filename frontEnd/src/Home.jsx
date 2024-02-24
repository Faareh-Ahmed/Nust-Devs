import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import './index.css';
import Footer from "./components/Footer";
import HomePg from "./components/home-pg";
import bgImg from "./images/bg-destinations.jpg"

// const axios = require('axios');

// const options = {
//     method: 'GET',
//     url: 'https://place-autocomplete1.p.rapidapi.com/autocomplete/json',
//     params: {
//       input: 'new',
//       radius: '500'
//     },
//     headers: {
//       'X-RapidAPI-Key': '79e636b089msh997aa1c461e0614p10c0cbjsn8c62dd36bb3c',
//       'X-RapidAPI-Host': 'place-autocomplete1.p.rapidapi.com'
//     }
//   };

function Home() {


    // useEffect(() => {
        
    //         axios.request(options).then(function(response){
    //             console.log(response.data);
    //         }).catch(function (error) {
    //         console.error(error);
    //     });

    // }, []);







    return (
        // <div className="flex flex-col justify-around">
        //     <img src={bgImg}
        //         className="bg-cover bg-no-repeat bg-fixed"
        //     />
        <div className="h-screen bg-img bg-img-main">
            <Navbar />
            <HomePg />
            <Footer />
        </div>

    );
}

export default Home;