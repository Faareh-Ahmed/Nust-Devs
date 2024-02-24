import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
// import "tailwindcss"
function Home(){

//     const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://place-autocomplete1.p.rapidapi.com/autocomplete/json',
//   params: {
//     input: 'new',
//     radius: '500'
//   },
//   headers: {
//     'X-RapidAPI-Key': '79e636b089msh997aa1c461e0614p10c0cbjsn8c62dd36bb3c',
//     'X-RapidAPI-Host': 'place-autocomplete1.p.rapidapi.com'
//   }
// };

// useEffect(() => {
    
//         axios.request(options).then(function(response){
//             console.log(response.data);
//         }).catch (function(error) {
//         console.error(error);
//     });
// }, []);

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }


    return ( 
        <>
        <h1> Hi this is the main page</h1>
        <Navbar/>
        </>
     );
}

export default Home;